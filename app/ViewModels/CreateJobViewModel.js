import User from '../user/User.js';

let createJobVM = new Vue({
	el: '.form__container',
	props: {
		submitting: false,
		submitted: false,
	},
	data: {
		form: {
			jobName: '',
			workDirectory: '',
			selectedAccountGroup: '',
			accountGroups: '',
			selectedHPCCluster: '',
			HPCClusters: ['Awoonga', 'FlashLite', 'Tinaroo'],
			select: 1,
			ncpus: 1,
			memory: 1,
			walltime: 1,
			payload: ''
		},
	},
	async created() {
		this.form.accountGroups = await User.requestUserGroups();
		let params = new URLSearchParams(document.location.search.substring(1));
		this.form.workDirectory = params.get("workDirectory");
	},
	methods: {
		async onSubmit() {
			this.submitting = true;
			let pbsScript = `#!/bin/bash
#
#PBS -A ${this.form.selectedAccountGroup}
#
#PBS -l select=${this.form.select}:ncpus=${this.form.ncpus}:mem=${this.form.memory}G
#PBS -l walltime=${this.form.walltime}:00:00
#PBS -N ${this.form.jobName}
#
${this.form.payload}`

			console.log("Submitting");
			console.log(pbsScript);

			let machine;

			if (this.form.selectedHPCCluster == "Awoonga") {
				machine = "@awonmgr2";
			} else if (this.form.selectedHPCCluster == "FlashLite") {
				machine = "@flashmgr2";
			} else if (this.form.selectedHPCCluster == "Tinaroo") {
				machine = "@tinmgr2.ib0";
			}
			
			await User.requestJobSubmission(this.form.jobName, this.form.workDirectory, pbsScript, machine);
			this.submitted = true;
			this.submitting = false;
		},
		viewActiveJobs: function() {
			window.location.href = "/list-jobs";
		},
		submitNewJob: function() {
			location.reload();
		}
	}
});