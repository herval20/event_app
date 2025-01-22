<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1>ADMIN DASHBOARDS - EVENTS</h1>

<a href="/admin/events/new">Create a new event</a>

	{#each data.events as event (event.id)}
		<div class="box" transition:slide>
			<p>{event.id} - {event.title} - {event.location_name}</p>

			<form action="?/deleteEvent" method="POST" use:enhance>
				<input type="hidden" name="id" value={event.id} />
				<button type="submit">Delete</button>
			</form>
		</div>
	{/each}

