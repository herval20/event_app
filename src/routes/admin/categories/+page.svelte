<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/warning.svelte';

	import { slide } from 'svelte/transition';

	let { data, form } = $props();
</script>

<h1>ADMIN DASHBOARDS - CATEGORY</h1>

<a href="/admin/categories/new" class="pageloc">Create a new category</a>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

{#each data.categories as category (category.id)}
	<div class="box" transition:slide>
		<p>{category.id} - {category.name}</p>
		<form action="?/deleteCategory" method="POST" use:enhance>
			<input type="hidden" name="id" value={category.id} />
			<button type="submit">Delete</button>
		</form>
	</div>
{/each}
