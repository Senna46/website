<!-- Home page: profile hero, career timeline, research, performance summary,
     open source projects, and programming skills. -->
<script lang="ts">
	import { ArrowRight, ExternalLink, Github } from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import {
		profile,
		history,
		research,
		openSourceProjects,
		programmingSkills,
		socialLinks
	} from '$lib/data/profile.js';
	import { performanceSummary } from '$lib/data/performance.js';
</script>

<svelte:head>
	<title>大村瀬奈 (OHMURA Senna) - Official Website</title>
	<meta name="description" content="大村瀬奈 OHMURA Senna 公式ホームページ。ブロックチェーン・AI開発エンジニア。" />
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-12 sm:px-6">
	<!-- Hero -->
	<section class="flex flex-col items-center gap-8 md:flex-row md:gap-12">
		<div class="shrink-0">
			<img
				src={profile.image}
				alt={profile.name.en}
				class="h-40 w-40 rounded-full object-cover shadow-lg ring-2 ring-border md:h-48 md:w-48"
			/>
		</div>
		<div class="text-center md:text-left">
			<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
				{profile.name.ja}
			</h1>
			<p class="text-muted-foreground mt-1 text-lg">{profile.name.en}</p>
			<div class="mt-3 space-y-0.5">
				{#each profile.roles as role}
					<p class="text-muted-foreground text-sm">{role}</p>
				{/each}
			</div>
			<div class="mt-4 flex justify-center gap-3 md:justify-start">
				<Button variant="outline" size="sm" href={socialLinks.github} target="_blank">
					<Github class="mr-2 h-4 w-4" />
					GitHub
				</Button>
				<Button variant="outline" size="sm" href="/contact">
					Contact
				</Button>
			</div>
		</div>
	</section>

	<Separator class="my-12" />

	<!-- History / Timeline -->
	<section>
		<h2 class="mb-8 text-2xl font-bold tracking-tight">History</h2>
		<div class="relative ml-4 border-l-2 border-border pl-8">
			{#each history as entry, i}
				<div class="relative mb-6 last:mb-0">
					<div
						class="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
					></div>
					<p class="text-sm font-semibold text-primary">{entry.date}</p>
					<p class="text-foreground mt-0.5">{entry.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<Separator class="my-12" />

	<!-- Research -->
	<section>
		<h2 class="mb-6 text-2xl font-bold tracking-tight">Research</h2>
		<Card.Root>
			<Card.Content class="pt-6">
				<div class="space-y-3">
					{#each research.description as paragraph}
						<p class="text-muted-foreground leading-relaxed">{paragraph}</p>
					{/each}
				</div>
			</Card.Content>
		</Card.Root>
	</section>

	<Separator class="my-12" />

	<!-- Performance Summary -->
	<section>
		<h2 class="mb-6 text-2xl font-bold tracking-tight">Performance</h2>
		<Card.Root>
			<Card.Content class="pt-6">
				<ul class="space-y-2">
					{#each performanceSummary as item}
						<li class="text-muted-foreground flex items-start gap-2">
							<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
							{item}
						</li>
					{/each}
				</ul>
			</Card.Content>
			<Card.Footer>
				<Button variant="outline" href="/performance">
					Details
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</Card.Footer>
		</Card.Root>
	</section>

	<Separator class="my-12" />

	<!-- Open Source -->
	<section>
		<h2 class="mb-6 text-2xl font-bold tracking-tight">Open Source</h2>
		<div class="flex flex-wrap gap-2">
			{#each openSourceProjects as project}
				<a href={project.url} target="_blank" rel="noopener noreferrer">
					<Badge variant="secondary" class="cursor-pointer gap-1.5 px-3 py-1.5 text-sm">
						<Github class="h-3.5 w-3.5" />
						{project.name}
						<ExternalLink class="h-3 w-3 opacity-50" />
					</Badge>
				</a>
			{/each}
		</div>
	</section>

	<Separator class="my-12" />

	<!-- Programming Skills -->
	<section>
		<h2 class="mb-6 text-2xl font-bold tracking-tight">Skills</h2>
		<div class="flex flex-wrap gap-2">
			{#each programmingSkills as skill}
				<Badge variant="outline" class="px-3 py-1.5 text-sm">{skill}</Badge>
			{/each}
		</div>
	</section>
</div>
