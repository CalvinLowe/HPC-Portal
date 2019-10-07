import User from '../user/User.js';

let createJobVM = new Vue({
	el: '.form__container',
	data: {
		form: {
			jobName: '',
			workDirectory: '',
			selectedAccountGroup: '',
			accountGroups: '',
			walltime: '',
			select: '',
			ncpus: '',
			memory: '',
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
#PBS -A ${this.form.accountGroup}
#
#PBS -l select=${this.form.select}:ncpus=${this.form.ncpus}:mem=${this.form.memory}G
#PBS -l walltime=${this.form.walltime}:00:00
#PBS -N ${this.form.jobName}
#
${this.form.payload}`

			console.log("Submitting");
			await User.requestJobSubmission(this.form.jobName, this.form.workDirectory, pbsScript);
		}
	}
});

