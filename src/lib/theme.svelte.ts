// Theme state management using Svelte 5 runes.
// Provides reactive dark/light mode toggle with localStorage persistence
// and system preference detection.

type Theme = 'light' | 'dark' | 'system';

function createThemeState() {
	let current = $state<Theme>('system');

	function getEffectiveTheme(theme: Theme): 'light' | 'dark' {
		if (theme === 'system') {
			if (typeof window === 'undefined') return 'light';
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		return theme;
	}

	function applyTheme(theme: Theme) {
		if (typeof document === 'undefined') return;
		const effective = getEffectiveTheme(theme);
		document.documentElement.classList.toggle('dark', effective === 'dark');
	}

	function init() {
		if (typeof localStorage === 'undefined') return;
		const stored = localStorage.getItem('theme') as Theme | null;
		current = stored ?? 'system';

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (current === 'system') {
				applyTheme('system');
			}
		});
	}

	function toggle() {
		const effective = getEffectiveTheme(current);
		const next = effective === 'dark' ? 'light' : 'dark';
		current = next;
		localStorage.setItem('theme', next);
		applyTheme(next);
	}

	return {
		get current() {
			return current;
		},
		get isDark() {
			return getEffectiveTheme(current) === 'dark';
		},
		init,
		toggle
	};
}

export const theme = createThemeState();
