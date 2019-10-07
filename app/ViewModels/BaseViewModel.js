import { UQGlobalMenu, HPCHeaderComponent, HPCNavigationComponent } from '../common-components/hpc-header.js';
import { HPCFooterComponent } from '../common-components/hpc-footer.js';

let headerVM = new Vue({
	el: '.site-header',
	components: {
		'uq-global-menu': UQGlobalMenu,
		'hpc-header': HPCHeaderComponent
	}
});

let navigationVM = new Vue({
	el: '.navigation',
	components: {
		'hpc-navigation': HPCNavigationComponent
	}
});

let footerVM = new Vue({
	el: '.site-footer',
	components: {
		'hpc-footer': HPCFooterComponent
	} 
});