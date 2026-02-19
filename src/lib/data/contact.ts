// Contact information for research and development inquiries.

export interface ContactEntry {
	id: string;
	category: string;
	categoryEn: string;
	description: string;
	email: string;
	subject: string;
}

export const contacts: ContactEntry[] = [
	{
		id: 'research',
		category: '研究のお問い合わせ',
		categoryEn: 'Research',
		description: '経済学・学術研究に関するお問い合わせ',
		email: 'ohmura.sena.58s@kyoto-u.jp',
		subject: 'お問い合わせ'
	},
	{
		id: 'develop',
		category: 'ブロックチェーンなどのお問い合わせ',
		categoryEn: 'Develop',
		description: 'ブロックチェーン・開発に関するお問い合わせ',
		email: 'sena.omura@cauchye.com',
		subject: 'お問い合わせ'
	}
];
