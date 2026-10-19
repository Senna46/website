// Profile and history data for OHMURA Senna's personal website.
// Contains biographical information, education/career timeline,
// research interests, open source projects, technical skills, and social links.
// History entries may have an optional url; the Home page renders those as external links.

export const profile = {
	name: {
		ja: '大村 瀬奈',
		en: 'OHMURA Senna',
		reading: 'おおむら せな'
	},
	roles: [
		'Sheliak Lab 代表',
		'Lead Developer, CAUCHYE ASIA PTE. LTD.',
		'Core Developer, Sunrise',
		'Core Developer, D6E-AI',
		'Visiting Researcher, Kyoto Univ. Social Innovation Center'
	],
	image: '/images/senna.jpg'
};

export interface HistoryEntry {
	date: string;
	description: string;
	url?: string;
}

export const history: HistoryEntry[] = [
	{ date: '2017/04', description: '京都大学経済学部入学 (特色入試首席)' },
	{ date: '2021/03', description: '京都大学経済学部卒業' },
	{ date: '2021/04', description: '経済産業省入省 (商務情報政策局事務官)' },
	{ date: '2021/06', description: '経済産業省辞職' },
	{ date: '2021/07', description: 'CauchyE, Inc. 入社' },
	{ date: '2021/07', description: '京都大学思修館 共同研究' },
	{ date: '2022/04', description: 'CAUCHYE ASIA PTE. LTD. (シンガポール) へ異動' },
	{
		date: '2025/08',
		description: 'Sunrise ブロックチェーン リリース',
		url: 'https://sunriselayer.io'
	},
	{
		date: '2026/02',
		description: 'AI業務自動化プラットフォーム D6E リリース',
		url: 'https://www.d6e.ai/ja-JP'
	}
];

export const research = {
	description: [
		'ブロックチェーンの設計・開発を専門としています。Data Availability Layer と Liquidity Hub を統合した L1 ブロックチェーン「Sunrise」を開発し、2025年8月にメインネットをリリースしました。Proof of Liquidity による新しいコンセンサスメカニズムの実装や、ZKP ベースの相互運用性の構築に取り組んでいます。',
		'2026年2月には、自然言語の指示で業務フローを自動化する AI プラットフォーム「D6E」をリリースしました。現在はブロックチェーンと AI の両領域でソフトウェアエンジニアリングを行っています。',
		'京都大学では経済学を専攻し、マクロ経済の金融政策を研究しました。学士論文では金融緩和政策の波及経路を分析しています。現在も京都大学社会イノベーションセンターの客員研究員として研究活動を継続しています。'
	]
};

export interface OpenSourceProject {
	name: string;
	url: string;
}

export const openSourceProjects: OpenSourceProject[] = [
	{ name: 'Sunrise', url: 'https://github.com/sunriselayer' },
	{ name: 'CauchyE', url: 'https://github.com/cauchye' },
	{ name: 'D6E-AI', url: 'https://github.com/d6e-ai' }
];

export const programmingSkills: string[] = [
	'TypeScript',
	'Go',
	'Rust',
	'Python',
	'Svelte',
	'Docker',
	'AWS',
	'Google Cloud',
	'GitHub Actions',
	'LLM',
	'AI Agents',
	'MCP',
	'Agent Skills'
];

export const socialLinks = {
	github: 'https://github.com/Senna46',
	linkedin: 'https://www.linkedin.com/in/%E7%80%AC%E5%A5%88-%E5%A4%A7%E6%9D%91-b2b21b105/'
};
