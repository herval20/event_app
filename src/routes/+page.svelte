
<script>
	import { flip } from 'svelte/animate';
	let { data } = $props();

	let filteredEvents = $state(data.events);
	console.log(data.events);
	let selectedCategory = $state('all');

	function filterEvents() {
		if (selectedCategory === 'all') {
			filteredEvents = data.events;
		} else {
			filteredEvents = data.events.filter((e) => e.category_id === selectedCategory.id);
		}
	}
</script>





<div>


{#if data.user}


<p>Welcome back, {data.user.username}</p>


<form action="/logout?/logout" method="POST">


<button type="submit">Log out</button>
</form>

<form action="/deleteaccount?/deleteaccount" method="POST">


<button type="submit">Delete Account</button>
	


</form>


{:else}


<p>You have not logged in. <a href="/login">Login</a>


</p>


<p>
	
	 
	 <a href="/register">Register</a>

</p>

{/if}


</div>



<nav>
	<a href="/admin/events">Events</a>
	<a href="/admin/locations">Locations</a>
	<a href="/admin/categories">Categories</a>
</nav>

<h1>MY EVENT APP</h1>
<p>Here are the current events</p>

<main class="">
	<select name="" id="" bind:value={selectedCategory} onchange={filterEvents}>
		<option value="all">All</option>
		{#each data.categories as category}
			<option value={category}>{category.name}</option>
		{/each}
	</select>

	<div class="event">
		{#each filteredEvents as event (event.id)}
			<div class="box" animate:flip>
				<p>{event.id} - {event.Title}</p>
			</div>
		{/each}
	</div>
</main>
