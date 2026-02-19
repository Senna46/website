// Project data for the Projects page.
// Defines organizations, their featured repositories, and metadata.

export interface Repository {
	name: string;
	description: string;
	language: string;
	url: string;
	stars?: number;
}

export interface ProjectLink {
	label: string;
	url: string;
	type: 'website' | 'github' | 'docs' | 'skills';
}

export interface Project {
	id: string;
	name: string;
	description: string;
	longDescription: string;
	tags: string[];
	links: ProjectLink[];
	repositories: Repository[];
}

export const projects: Project[] = [
	{
		id: 'sunrise',
		name: 'Sunrise',
		description: 'L1 blockchain integrating Data Availability Layer and Liquidity Hub',
		longDescription:
			'Sunrise is the base layer for Interliquid Networks. It integrates Data Availability layer and Liquidity Hub functions into a single platform powered by Proof-of-Liquidity, enabling sovereign rollups and leading L1s like Ethereum and Solana to connect seamlessly through deep, shared liquidity.',
		tags: ['Go', 'Rust', 'TypeScript', 'Cosmos SDK', 'Blockchain'],
		links: [
			{ label: 'Website', url: 'https://sunriselayer.io', type: 'website' },
			{ label: 'GitHub', url: 'https://github.com/sunriselayer', type: 'github' },
			{ label: 'Docs', url: 'https://docs.sunriselayer.io', type: 'docs' }
		],
		repositories: [
			{
				name: 'sunrise',
				description: 'Sunrise L1 blockchain built with Cosmos SDK',
				language: 'Go',
				url: 'https://github.com/sunriselayer/sunrise',
				stars: 27
			},
			{
				name: 'sunrise-client-js',
				description: 'JavaScript/TypeScript client library for Sunrise',
				language: 'TypeScript',
				url: 'https://github.com/sunriselayer/sunrise-client-js'
			},
			{
				name: 'token-factory',
				description:
					'Token factory module forked from Osmosis, compatible with cosmos-sdk v0.53.2',
				language: 'Go',
				url: 'https://github.com/sunriselayer/token-factory'
			},
			{
				name: 'ibc-hooks',
				description: 'IBC hooks module forked from Osmosis, compatible with ibc-go v10',
				language: 'Go',
				url: 'https://github.com/sunriselayer/ibc-hooks'
			}
		]
	},
	{
		id: 'd6e-ai',
		name: 'D6E-AI',
		description: 'AI-powered business efficiency application platform',
		longDescription:
			'D6E is a platform for building AI-driven workflow automation. Docker STFs (Serverless Task Functions) execute as containerized workflow steps, enabling custom data processing and business logic. The main application is proprietary, with Agent Skills published as open source.',
		tags: ['Python', 'Docker', 'AI', 'Agent Skills'],
		links: [
			{ label: 'GitHub', url: 'https://github.com/d6e-ai', type: 'github' },
			{
				label: 'skills.sh',
				url: 'https://skills.sh/d6e-ai/d6e-docker-stf-skills/d6e-docker-stf-development',
				type: 'skills'
			}
		],
		repositories: [
			{
				name: 'd6e-docker-stf-skills',
				description:
					'Agent Skills for Claude Code and Cursor to create D6E Docker STF workflow steps',
				language: 'Python',
				url: 'https://github.com/d6e-ai/d6e-docker-stf-skills'
			}
		]
	},
	{
		id: 'cauchye',
		name: 'CauchyE',
		description: 'Blockchain and AI application development company',
		longDescription:
			'CauchyE, Inc. is a Japan-based technology company specializing in blockchain infrastructure and AI application development. Most repositories are private, with select projects published as open source.',
		tags: ['TypeScript', 'Blockchain', 'AI'],
		links: [{ label: 'GitHub', url: 'https://github.com/cauchye', type: 'github' }],
		repositories: [
			{
				name: 'telescope',
				description: 'TypeScript code generation tool for Cosmos SDK blockchain clients',
				language: 'TypeScript',
				url: 'https://github.com/cauchye/telescope',
				stars: 10
			}
		]
	}
];
