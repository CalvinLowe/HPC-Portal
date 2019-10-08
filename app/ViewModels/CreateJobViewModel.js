import User from '../user/User.js';

let createJobVM = new Vue({
	el: '.form__container',
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
	},
	methods: {
		async onSubmit() {
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
			let machine = "@flashmgr2"; // TODO: Make this programmatic
			await User.requestJobSubmission(this.form.jobName, this.form.workDirectory, pbsScript, machine);
		}
	}
});