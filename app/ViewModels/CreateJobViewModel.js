let createJobVM = new Vue({
	el: '.form__container',
	data: {
		form: {
			jobName: 'Default job name',
			accountGroups: ['UQ-RCC', 'qris-uq'],
			walltime: 1,
			select: 1,
			ncpus: 1,
			memory: 1,
			payload: 'Default payload'
		}
	}
});