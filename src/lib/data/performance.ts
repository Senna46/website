// Performance data: product releases, academic presentations, awards, and publications.
// performanceSummary is shown on the Home page; performances is shown on the Performance page.

export interface PerformanceLink {
	label: string;
	url: string;
	type: 'pdf' | 'video' | 'external';
}

export interface PerformanceEntry {
	id: string;
	date: string;
	title: string;
	subtitle?: string;
	description: string[];
	links: PerformanceLink[];
}

export const performanceSummary = [
	'2026/04/15 AI Talent Mapping 公開 (開発に参画)',
	'2026/02/24 AI業務自動化プラットフォーム D6E リリース',
	'2025/08/04 Sunrise ブロックチェーン メインネットリリース',
	'2021/10/11 UBRI Connect 2021',
	'2019/11/23 第15回 日銀グランプリ 敢闘賞',
	'2019/11/30 SFERS 2019 Korea-Japan Joint Economics Seminar'
];

export const performances: PerformanceEntry[] = [
	{
		id: 'ai-talent-mapping',
		date: '2026/04/15',
		title: 'AI Talent Mapping 公開',
		subtitle: '称賛データから“隠れた才能”を発掘する AI 人材分析サービス',
		description: [
			'開発に参画した「AI Talent Mapping」が、南青山アドバイザリーグループ株式会社より公開されました。',
			'従業員の称賛 (レコグニション) データを AI で解析し、特定のポジションへの適合性、組織図に現れない非公式ネットワークの中心人物、次世代リーダー候補といったシグナルを可視化するサービスです。'
		],
		links: [
			{
				label: 'プレスリリース (PR TIMES)',
				url: 'https://prtimes.jp/main/html/rd/p/000000093.000033965.html',
				type: 'external'
			},
			{
				label: '掲載記事 (東京新聞デジタル)',
				url: 'https://adv.tokyo-np.co.jp/prtimes/article143899/',
				type: 'external'
			}
		]
	},
	{
		id: 'd6e-release',
		date: '2026/02/24',
		title: 'AI業務自動化プラットフォーム D6E リリース',
		subtitle: '業務フローを、AIで自動化。',
		description: [
			'お客様の環境にデプロイして使う AI 業務自動化プラットフォーム「D6E」をリリースしました。',
			'自然言語で指示するだけで、AI エージェントがデータ処理、ワークフロー実行、SaaS との連携、Excel・PDF・PowerPoint のレポート生成を行います。オンプレミスやプライベートクラウドで動かせるため、データを自社環境の外に出さずに業務を自動化できます。'
		],
		links: [
			{
				label: 'D6E Website',
				url: 'https://www.d6e.ai/ja-JP',
				type: 'external'
			},
			{
				label: 'GitHub',
				url: 'https://github.com/d6e-ai',
				type: 'external'
			}
		]
	},
	{
		id: 'sunrise-mainnet',
		date: '2025/08/04',
		title: 'Sunrise ブロックチェーン メインネットリリース',
		subtitle: 'The Next Generation of Liquidity and Sovereignty',
		description: [
			'Data Availability Layer と Liquidity Hub を統合した L1 ブロックチェーン「Sunrise」のメインネットをリリースしました。',
			'Proof of Liquidity によるコンセンサスメカニズムと、ZKP ベースの相互運用性を実装し、Ethereum や Solana とのシームレスな接続を実現しています。'
		],
		links: [
			{
				label: 'Sunrise Website',
				url: 'https://sunriselayer.io',
				type: 'external'
			},
			{
				label: 'GitHub',
				url: 'https://github.com/sunriselayer',
				type: 'external'
			}
		]
	},
	{
		id: 'boj-grand-prix',
		date: '2019/11/23',
		title: '第15回 日銀グランプリ',
		subtitle:
			'キャッシュレス推進と幣制改革の必要性 ～高額紙幣廃止のマイナス金利政策における効果の実証分析～',
		description: [
			'2019/11/23に日本銀行本店にて開催された第15回日銀グランプリ 決勝大会に出場し、研究発表を行いました。',
			'敢闘賞を受賞しています。'
		],
		links: [
			{
				label: '論文 [PDF 662KB] (日本銀行HP)',
				url: 'https://www.boj.or.jp/announcements/release_2019/data/rel191227a7.pdf',
				type: 'pdf'
			},
			{
				label: 'プレゼンテーション資料 [PDF 1,354KB] (日本銀行HP)',
				url: 'https://www.boj.or.jp/announcements/release_2019/data/rel191227a8.pdf',
				type: 'pdf'
			},
			{
				label: 'プレゼンテーション',
				url: 'https://youtu.be/Vnq35DH5moY',
				type: 'video'
			},
			{
				label: '質疑応答',
				url: 'https://youtu.be/jtGoyHG5jzc',
				type: 'video'
			}
		]
	},
	{
		id: 'sfers-2019',
		date: '2019/11/30',
		title: 'SFERS 2019 Korea-Japan Joint Economics Seminar',
		subtitle: 'The Effects of Japanese Negative Interest Rate Policy on Inflation Rate',
		description: [
			'2019/11/30にSeoul National Universityで開催されたSFERS 2019 Korea-Japan Joint Economics Seminarにて、京都大学経済学部岩本ゼミナールの代表として発表を行いました。'
		],
		links: [
			{
				label: '論文 (英文)',
				url: '/files/English_iwamoto.pdf',
				type: 'pdf'
			}
		]
	},
	{
		id: 'ubri-connect-2021',
		date: '2021/10/11',
		title: 'UBRI Connect 2021',
		subtitle:
			'Development of a Blockchain-Based Electricity Trading System at Kyoto University',
		description: [
			'2021/10/11にオンラインで開催された、UBRI Connect 2021にて京都大学との共同事業について、京都大学思修館の池田教授より発表されました。',
			'Collection of Electricity Charges on Blockchain to Promote Energy Savings'
		],
		links: [
			{
				label: '講演の様子',
				url: 'https://youtu.be/vMrCGI8FyCs',
				type: 'video'
			}
		]
	}
];
