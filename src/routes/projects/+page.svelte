<!-- Projects page: showcases main organizations and their key repositories. -->
<script lang="ts">
	import {
		Github,
		ExternalLink,
		Globe,
		BookOpen,
		Star,
		Sparkles
	} from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { projects } from '$lib/data/projects.js';
	import type { ProjectLink } from '$lib/data/projects.js';

	function getLinkIcon(type: ProjectLink['type']) {
		switch (type) {
			case 'website':
				return Globe;
			case 'github':
				return Github;
			case 'docs':
				return BookOpen;
			case 'skills':
				return Sparkles;
			default:
				return ExternalLink;
		}
	}
</script>

<svelte:head>
	<title>Projects - OHMURA Senna</title>
	<meta
		name="description"
		content="Sunrise blockchain, D6E-AI, CauchyE - ブロックチェーン・AI開発プロジェクト。"
	/>
	<meta property="og:title" content="Projects - OHMURA Senna" />
	<meta property="og:description" content="Sunrise blockchain, D6E-AI, CauchyE - blockchain and AI development projects." />
	<meta property="og:url" content="https://senna46.com/projects" />
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-12 sm:px-6">
	<div class="mb-10">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
		<p class="text-muted-foreground mt-3">
			ブロックチェーンインフラストラクチャとAIアプリケーションの開発に取り組んでいます。
		</p>
	</div>

	<div class="space-y-12">
		{#each projects as project}
			<section id={project.id} class="scroll-mt-24">
				<div class="mb-4 flex flex-wrap items-center gap-3">
					<h2 class="text-2xl font-bold tracking-tight">{project.name}</h2>
					<div class="flex flex-wrap gap-1.5">
						{#each project.tags as tag}
							<Badge variant="secondary" class="text-xs">{tag}</Badge>
						{/each}
					</div>
				</div>

				<p class="text-muted-foreground mb-4 leading-relaxed">
					{project.longDescription}
				</p>

				<div class="mb-6 flex flex-wrap gap-2">
					{#each project.links as link}
						{@const Icon = getLinkIcon(link.type)}
						<Button variant="outline" size="sm" href={link.url} target="_blank">
							<Icon class="mr-2 h-4 w-4" />
							{link.label}
						</Button>
					{/each}
				</div>

				{#if project.repositories.length > 0}
					<div class="grid gap-3 sm:grid-cols-2">
						{#each project.repositories as repo}
							<a
								href={repo.url}
								target="_blank"
								rel="noopener noreferrer"
								class="block"
							>
								<Card.Root
									class="hover:bg-muted/50 h-full transition-colors"
								>
									<Card.Header class="pb-2">
										<div class="flex items-center justify-between">
											<Card.Title class="text-base font-semibold">
												{repo.name}
											</Card.Title>
											<div class="flex items-center gap-2">
												{#if repo.stars}
													<span
														class="text-muted-foreground flex items-center gap-1 text-xs"
													>
														<Star class="h-3.5 w-3.5" />
														{repo.stars}
													</span>
												{/if}
												<Badge variant="outline" class="text-xs">
													{repo.language}
												</Badge>
											</div>
										</div>
									</Card.Header>
									<Card.Content>
										<p class="text-muted-foreground text-sm">
											{repo.description}
										</p>
									</Card.Content>
								</Card.Root>
							</a>
						{/each}
					</div>
				{/if}

				{#if project.id !== projects[projects.length - 1].id}
					<Separator class="mt-12" />
				{/if}
			</section>
		{/each}
	</div>
</div>
