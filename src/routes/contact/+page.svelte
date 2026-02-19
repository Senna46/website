<!-- Contact page: displays email contact cards for research and development. -->
<script lang="ts">
	import { Mail, GraduationCap, Code } from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { contacts } from '$lib/data/contact.js';

	const iconMap: Record<string, typeof Mail> = {
		research: GraduationCap,
		develop: Code
	};
</script>

<svelte:head>
	<title>Contact - OHMURA Senna</title>
	<meta name="description" content="大村瀬奈へのお問い合わせ。研究・ブロックチェーン開発に関するご連絡。" />
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-12 sm:px-6">
	<div class="mb-10">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
		<p class="text-muted-foreground mt-3">
			お問い合わせは下記メールアドレスまでお願いいたします。
		</p>
	</div>

	<div class="grid gap-6 sm:grid-cols-2">
		{#each contacts as contact}
			{@const Icon = iconMap[contact.id] ?? Mail}
			<Card.Root class="flex flex-col">
				<Card.Header>
					<div class="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-lg">
						<Icon class="text-primary h-6 w-6" />
					</div>
					<Card.Title>{contact.category}</Card.Title>
					<Card.Description>{contact.categoryEn}</Card.Description>
				</Card.Header>
				<Card.Content class="flex-1">
					<p class="text-muted-foreground text-sm">{contact.description}</p>
					<p class="mt-3 font-mono text-sm">{contact.email}</p>
				</Card.Content>
				<Card.Footer>
					<Button
						variant="outline"
						href="mailto:{contact.email}?subject={encodeURIComponent(contact.subject)}"
						class="w-full"
					>
						<Mail class="mr-2 h-4 w-4" />
						Open Mail App
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
