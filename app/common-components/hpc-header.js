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

export let HPCNavigationComponent = {
	template: `
<div class="region region-navigation">
	<div id="block-system-main-menu" class="block block-system block-menu main-menu">
		<ul class="menu" id="main-menu">
			<li class="first leaf"><a href="/" title="" class="menu__link">Home</a></li>
			<li class="leaf menu__logged-in-item"><a href="/dashboard" title="" class="menu__link"">Dashboard</a></li>
			<li class="leaf active-trail menu__logged-in-item"><a href="/create-job" title="" class="active-trail menu__link active">Create new job</a></li>
			<li class="leaf menu__logged-in-item"><a href="/list-jobs" title="" class="menu__link">List active jobs</a></li>
			<li class="leaf menu__logged-in-item"><a href="/list-files" title="" class="menu__link">List files</a></li>
			<li class="last leaf menu__logged-in-item"><a id="logout" href="#" title="Log out" class="menu__link logout logout--hidden">Log out</a></li>
		</ul>
	</div>
</div>`
}