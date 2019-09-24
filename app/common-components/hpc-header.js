// Header
export let UQGlobalMenu = {
	template: `
<nav class="site-header__global-menu">
	<div class="global-menu hide-for-small-only">
		<ul class="global-menu__list">
			<li class="global-menu__item"><a href="https://www.uq.edu.au/" accesskey="1" class="global-menu__link">UQ Home</a></li>
			<li class="global-menu__item"><a href="https://www.uq.edu.au/contacts/" accesskey="2" class="global-menu__link">Contacts</a></li>
			<li class="global-menu__item"><a href="https://www.uq.edu.au/study/" accesskey="3" class="global-menu__link">Study</a></li>
			<li class="global-menu__item"><a href="https://www.uq.edu.au/maps/" accesskey="4" class="global-menu__link">Maps</a></li>
			<li class="global-menu__item"><a href="https://www.uq.edu.au/news/" accesskey="5" class="global-menu__link">News</a></li>
			<li class="global-menu__item"><a href="https://www.uq.edu.au/events/" accesskey="6" class="global-menu__link">Events</a></li>
			<li class="global-menu__item"><a href="https://www.library.uq.edu.au/" accesskey="7" class="global-menu__link">Library</a></li>
			<li class="global-menu__item"><a href="https://www.uq.edu.au/giving/" class="global-menu__link">Give now</a></li>
			<li class="global-menu__item"><a href="https://my.uq.edu.au/" accesskey="8" class="global-menu__link">my.UQ</a></li>
		</ul>
	</div>
</nav>`
}

export let HPCHeaderComponent = {
	template: `
<div class="site-header__content">
	<div class="columns medium-11 large-8">
		<a href="https://www.uq.edu.au/" title="UQ Homepage" class="uq-logo">The University of Queensland</a>
		<h2 class="site-title"><a class="site-title__link" rel="home" title="Live Learning Library" href="https://hpcportal.rcc.uq.edu.au/">High Performance Computing Portal</a></h2>
	</div>
</div>`
}

let HPCNavigationLinkComponent = {
	props: ['location', 'title'],
	computed: {
		isActive: function() {
				// If the navigation-item component location prop matches the current pathname then set it to active
				return document.location.pathname.replace(/\b\/+/,'').replace(/^\//, '') === this.location;
			}
	},
	template: `
	<li class="leaf">
		<a :href="'/' + location" :title="title" class="menu__link" :class="{ active: isActive, 'active-trail': isActive }">
			<slot></slot>
		</a>
	</li>`
}

export let HPCNavigationComponent = {
	components: {
		'navigation-item': HPCNavigationLinkComponent
	},
	template: `
<div class="region region-navigation">
	<div id="block-system-main-menu" class="block block-system block-menu main-menu">
		<ul class="menu" id="main-menu">
			<navigation-item class="first" location="" title="Home">Home</navigation-item>
			<navigation-item location="dashboard" title="Dashboard">Dashboard</navigation-item>
			<navigation-item class="active-trail" location="create-job" title="Create new job">Create new job</navigation-item>
			<navigation-item location="list-jobs" title="List active jobs">List active jobs</navigation-item>
			<navigation-item location="list-files" title="List files">List files</navigation-item>
			<navigation-item class="last" location="list-logout" title="Log out">Log out</navigation-item>
		</ul>
	</div>
</div>`
}

