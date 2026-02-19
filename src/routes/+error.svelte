<!-- Custom error page for 404 and other errors. -->
<script lang="ts">
	import { page } from '$app/state';
	import { ArrowLeft } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<div class="flex flex-1 flex-col items-center justify-center px-4 py-24">
	<p class="text-muted-foreground text-8xl font-bold">{page.status}</p>
	<h1 class="mt-4 text-2xl font-bold tracking-tight">
		{#if page.status === 404}
			Page Not Found
		{:else}
			Something Went Wrong
		{/if}
	</h1>
	<p class="text-muted-foreground mt-2 text-center">
		{#if page.status === 404}
			The page you are looking for does not exist or has been moved.
		{:else}
			{page.error?.message ?? 'An unexpected error occurred.'}
		{/if}
	</p>
	<Button variant="outline" href="/" class="mt-8">
		<ArrowLeft class="mr-2 h-4 w-4" />
		Back to Home
	</Button>
</div>
