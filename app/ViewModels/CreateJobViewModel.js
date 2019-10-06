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
	}
});

