<!-- Contact page: displays email contact cards with copy-to-clipboard. -->
<script lang="ts">
	import { Mail, GraduationCap, Code, Copy, Check } from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { contacts } from '$lib/data/contact.js';

	const iconMap: Record<string, typeof Mail> = {
		research: GraduationCap,
		develop: Code
	};

	let copiedId = $state<string | null>(null);

	async function copyEmail(contactId: string, email: string) {
		try {
			await navigator.clipboard.writeText(email);
			copiedId = contactId;
			setTimeout(() => {
				copiedId = null;
			}, 2000);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			console.error(`Failed to copy email for contact "${contactId}": ${errorMessage}`);
		}
	}
</script>

<svelte:head>
	<title>Contact - OHMURA Senna</title>
	<meta name="description" content="大村瀬奈へのお問い合わせ。研究・ブロックチェーン開発に関するご連絡。" />
	<meta property="og:title" content="Contact - OHMURA Senna" />
	<meta property="og:description" content="Contact OHMURA Senna for research or blockchain/AI development inquiries." />
	<meta property="og:url" content="https://senna46.com/contact" />
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
					<div class="bg-muted/50 mt-3 flex items-center justify-between rounded-md border px-3 py-2">
						<span class="font-mono text-sm">{contact.email}</span>
						<Button
							variant="ghost"
							size="icon"
							class="h-8 w-8 shrink-0"
							onclick={() => copyEmail(contact.id, contact.email)}
							aria-label="Copy email address"
						>
							{#if copiedId === contact.id}
								<Check class="h-4 w-4 text-green-500" />
							{:else}
								<Copy class="h-4 w-4" />
							{/if}
						</Button>
					</div>
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
