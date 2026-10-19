<!-- Performance page: product releases and academic achievements with external links. -->
<script lang="ts">
	import { FileText, Youtube, ExternalLink, Award, Calendar } from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { performances } from '$lib/data/performance.js';
	import type { PerformanceLink } from '$lib/data/performance.js';

	function getLinkIcon(type: PerformanceLink['type']) {
		switch (type) {
			case 'pdf':
				return FileText;
			case 'video':
				return Youtube;
			default:
				return ExternalLink;
		}
	}
</script>

<svelte:head>
	<title>Performance - OHMURA Senna</title>
	<meta
		name="description"
		content="大村瀬奈のプロダクトリリース・研究業績・学会発表。AI Talent Mapping、D6E リリース、Sunrise mainnet launch、日銀グランプリ、SFERS 2019、UBRI Connect 2021。"
	/>
	<meta property="og:title" content="Performance - OHMURA Senna" />
	<meta property="og:description" content="Product releases and research achievements: AI Talent Mapping, D6E launch, Sunrise blockchain launch, BOJ Grand Prix, SFERS 2019, UBRI Connect 2021." />
	<meta property="og:url" content="https://senna46.com/performance" />
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-12 sm:px-6">
	<div class="mb-10">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Performance</h1>
		<p class="text-muted-foreground mt-3">
			これまでに関わったプロダクトのリリースや、研究・学会発表を紹介しています。
		</p>
	</div>

	<div class="space-y-8">
		{#each performances as perf}
			<Card.Root>
				<Card.Header>
					<div class="flex flex-wrap items-center gap-3">
						<Badge variant="secondary" class="gap-1.5">
							<Calendar class="h-3.5 w-3.5" />
							{perf.date}
						</Badge>
						{#if perf.id === 'boj-grand-prix'}
							<Badge class="gap-1.5 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
								<Award class="h-3.5 w-3.5" />
								敢闘賞
							</Badge>
						{/if}
					</div>
					<Card.Title class="text-xl">{perf.title}</Card.Title>
					{#if perf.subtitle}
						<Card.Description class="text-base italic">
							{perf.subtitle}
						</Card.Description>
					{/if}
				</Card.Header>
				<Card.Content>
					<div class="space-y-2">
						{#each perf.description as paragraph}
							<p class="text-muted-foreground leading-relaxed">{paragraph}</p>
						{/each}
					</div>
				</Card.Content>
				{#if perf.links.length > 0}
					<Card.Footer class="flex flex-wrap gap-2">
						{#each perf.links as link}
							{@const Icon = getLinkIcon(link.type)}
							<Button variant="outline" size="sm" href={link.url} target="_blank">
								<Icon class="mr-2 h-4 w-4" />
								{link.label}
							</Button>
						{/each}
					</Card.Footer>
				{/if}
			</Card.Root>
		{/each}
	</div>
</div>
