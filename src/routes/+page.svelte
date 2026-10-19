<!-- Home page: profile hero, career timeline, about, projects highlight,
     performance summary, and programming skills. -->
<script lang="ts">
	import { ArrowRight, ExternalLink, Github, Linkedin } from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { profile, history, research, programmingSkills, socialLinks } from '$lib/data/profile.js';
	import { performanceSummary } from '$lib/data/performance.js';
	import { projects } from '$lib/data/projects.js';
</script>

<svelte:head>
	<title>大村瀬奈 (OHMURA Senna) - Official Website</title>
	<meta
		name="description"
		content="大村瀬奈 OHMURA Senna 公式ホームページ。ブロックチェーン・AI開発エンジニア。"
	/>
	<meta property="og:title" content="大村瀬奈 (OHMURA Senna) - Official Website" />
	<meta property="og:description" content="ブロックチェーン・AI開発エンジニア。Sunrise / D6E-AI Core Developer, CAUCHYE ASIA Lead Developer." />
	<meta property="og:url" content="https://senna46.com/" />
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
				<Button variant="outline" size="sm" href={socialLinks.linkedin} target="_blank">
					<Linkedin class="mr-2 h-4 w-4" />
					LinkedIn
				</Button>
				<Button variant="outline" size="sm" href="/contact">
					Contact
				</Button>
			</div>
		</div>
	</section>

	<Separator class="my-12" />

	<!-- About -->
	<section>
		<h2 class="mb-6 text-2xl font-bold tracking-tight">About</h2>
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

	<!-- Projects -->
	<section>
		<h2 class="mb-6 text-2xl font-bold tracking-tight">Projects</h2>
		<div class="grid gap-4 sm:grid-cols-3">
			{#each projects as project}
				<a href="/projects#{project.id}" class="block">
					<Card.Root class="hover:bg-muted/50 h-full transition-colors">
						<Card.Header>
							<Card.Title>{project.name}</Card.Title>
							<Card.Description>{project.description}</Card.Description>
						</Card.Header>
						<Card.Content>
							<div class="flex flex-wrap gap-1">
								{#each project.tags.slice(0, 3) as tag}
									<Badge variant="outline" class="text-xs">{tag}</Badge>
								{/each}
							</div>
						</Card.Content>
					</Card.Root>
				</a>
			{/each}
		</div>
		<div class="mt-4">
			<Button variant="outline" href="/projects">
				View All
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
		</div>
	</section>

	<Separator class="my-12" />

	<!-- History / Timeline -->
	<section>
		<h2 class="mb-8 text-2xl font-bold tracking-tight">History</h2>
		<div class="relative ml-4 border-l-2 border-border pl-8">
			{#each history as entry}
				<div class="relative mb-6 last:mb-0">
					<div
						class="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
					></div>
					<p class="text-sm font-semibold text-primary">{entry.date}</p>
					{#if entry.url}
						<p class="mt-0.5">
							<a
								href={entry.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-foreground inline-flex items-center gap-1 underline-offset-4 hover:underline"
							>
								{entry.description}
								<ExternalLink class="h-3.5 w-3.5 shrink-0" />
							</a>
						</p>
					{:else}
						<p class="text-foreground mt-0.5">{entry.description}</p>
					{/if}
				</div>
			{/each}
		</div>
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
