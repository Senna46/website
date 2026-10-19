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
		description: 'AI workflow automation platform for enterprises',
		longDescription:
			'D6E is an AI workflow automation platform released in February 2026. It is deployed on-premises or in a private cloud. Users give instructions in natural language, and AI agents handle data processing, workflow execution, integration with SaaS such as freee, Money Forward, Google Workspace and Salesforce, and report generation in Excel, PDF and PowerPoint. Docker STFs (State Transition Functions) run custom business logic as containerized workflow steps, and Plugins package prompts, functions and workflows. Every feature is available through a public API and MCP. The core platform is proprietary, while setup tools, documentation, Agent Skills and Plugins are published as open source.',
		tags: ['Python', 'Docker', 'AI', 'Agent Skills', 'MCP'],
		links: [
			{ label: 'Website', url: 'https://www.d6e.ai/ja-JP', type: 'website' },
			{ label: 'GitHub', url: 'https://github.com/d6e-ai', type: 'github' },
			{ label: 'Docs', url: 'https://docs.d6e.ai', type: 'docs' },
			{
				label: 'skills.sh',
				url: 'https://skills.sh/d6e-ai/d6e-docker-stf-skills/d6e-docker-stf-development',
				type: 'skills'
			}
		],
		repositories: [
			{
				name: 'd6e-setup',
				description:
					'Configuration files, Docker Compose, and database schema for deploying D6E platform instances',
				language: 'PLpgSQL',
				url: 'https://github.com/d6e-ai/d6e-setup'
			},
			{
				name: 'd6e-docs',
				description: 'D6E developer documentation published at docs.d6e.ai',
				language: 'MDX',
				url: 'https://github.com/d6e-ai/d6e-docs'
			},
			{
				name: 'd6e-setup-skills',
				description: 'Agent Skills for deploying and configuring D6E platform instances',
				language: 'Markdown',
				url: 'https://github.com/d6e-ai/d6e-setup-skills'
			},
			{
				name: 'd6e-docker-stf-skills',
				description:
					'Agent Skills for Claude Code and Cursor to create D6E Docker STF workflow steps',
				language: 'Markdown',
				url: 'https://github.com/d6e-ai/d6e-docker-stf-skills'
			},
			{
				name: 'd6e-plugin-skills',
				description: 'Agent Skills for developing and publishing D6E Plugin packages',
				language: 'Markdown',
				url: 'https://github.com/d6e-ai/d6e-plugin-skills'
			},
			{
				name: 'd6e-plugin-registry',
				description: 'Registry and discovery pipeline for D6E Plugins',
				language: 'JavaScript',
				url: 'https://github.com/d6e-ai/d6e-plugin-registry'
			},
			{
				name: 'd6e-docker-stf-finance',
				description: 'Docker STF suite for finance and accounting workflows on D6E',
				language: 'Python',
				url: 'https://github.com/d6e-ai/d6e-docker-stf-finance'
			},
			{
				name: 'd6e-docker-stf-legal',
				description: 'Docker STF suite for legal workflows on D6E',
				language: 'Python',
				url: 'https://github.com/d6e-ai/d6e-docker-stf-legal'
			},
			{
				name: 'd6e-plugin-invoice-jp',
				description:
					'Japanese Qualified Invoice document generator plugin that outputs PDF and Word files',
				language: 'JavaScript',
				url: 'https://github.com/d6e-ai/d6e-plugin-invoice-jp'
			}
		]
	},
	{
		id: 'cauchye',
		name: 'CauchyE',
		description: 'Blockchain and AI application development company',
		longDescription:
			'CauchyE is a technology group specializing in blockchain infrastructure and AI application development, operating as CauchyE, Inc. in Japan and CAUCHYE ASIA PTE. LTD. in Singapore. Most repositories are private, with select projects published as open source.',
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
