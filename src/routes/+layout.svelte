<!-- Root layout: OGP defaults, theme init, page transitions, header/footer. -->
<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { theme } from '$lib/theme.svelte.js';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();

	const siteUrl = 'https://senna46.com';

	onMount(() => {
		theme.init();
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta property="og:site_name" content="OHMURA Senna" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{siteUrl}/images/senna.jpg" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}
	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}
	:root::view-transition-old(root) {
		animation: 150ms ease-out fade-out;
	}
	:root::view-transition-new(root) {
		animation: 150ms ease-in fade-in;
	}
</style>
