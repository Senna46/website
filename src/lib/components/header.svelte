<!-- Site header with navigation, mobile menu (Sheet), and theme toggle. -->
<script lang="ts">
	import { page } from '$app/state';
	import { Menu, X } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/performance', label: 'Performance' },
		{ href: '/contact', label: 'Contact' }
	];

	let mobileOpen = $state(false);

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<header class="border-border/40 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
		<a href="/" class="text-lg font-bold tracking-tight">OHMURA Senna</a>

		<nav class="hidden items-center gap-1 md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors {page
						.url.pathname === item.href
						? 'text-foreground'
						: ''}"
				>
					{item.label}
				</a>
			{/each}
			<ThemeToggle />
		</nav>

		<div class="flex items-center gap-1 md:hidden">
			<ThemeToggle />
			<Sheet.Root bind:open={mobileOpen}>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button variant="ghost" size="icon" {...props} aria-label="Open menu">
							<Menu class="h-5 w-5" />
						</Button>
					{/snippet}
				</Sheet.Trigger>
				<Sheet.Content side="right" class="w-64">
					<Sheet.Header>
						<Sheet.Title>Menu</Sheet.Title>
					</Sheet.Header>
					<nav class="mt-6 flex flex-col gap-2">
						{#each navItems as item}
							<a
								href={item.href}
								onclick={closeMobile}
								class="hover:bg-accent rounded-md px-4 py-3 text-base font-medium transition-colors {page
									.url.pathname === item.href
									? 'bg-accent'
									: ''}"
							>
								{item.label}
							</a>
						{/each}
					</nav>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>
