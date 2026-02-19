<!-- Theme toggle button for switching between light and dark mode. -->
<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { theme } from '$lib/theme.svelte.js';
</script>

<Button variant="ghost" size="icon" onclick={theme.toggle} aria-label="Toggle theme">
	{#if theme.isDark}
		<Sun class="h-5 w-5" />
	{:else}
		<Moon class="h-5 w-5" />
	{/if}
</Button>
