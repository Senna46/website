<!-- Site footer with copyright and GitHub link. -->
<script lang="ts">
	import { Github } from '@lucide/svelte';
	import { socialLinks } from '$lib/data/profile.js';
</script>

<footer class="border-border/40 border-t">
	<div
		class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6"
	>
		<p class="text-muted-foreground text-sm">
			&copy; {new Date().getFullYear()} OHMURA Senna. All rights reserved.
		</p>
		<a
			href={socialLinks.github}
			target="_blank"
			rel="noopener noreferrer"
			class="text-muted-foreground hover:text-foreground transition-colors"
			aria-label="GitHub"
		>
			<Github class="h-5 w-5" />
		</a>
	</div>
</footer>
