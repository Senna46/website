<!-- Root layout: initializes theme, renders header/footer around page content. -->
<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/theme.svelte.js';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();

	onMount(() => {
		theme.init();
	});
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
