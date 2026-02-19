// Generates a static sitemap.xml for search engine indexing.
// Lists all public pages with their last modification dates.

const siteUrl = 'https://senna46.com';

const pages = [
	{ path: '/', priority: '1.0' },
	{ path: '/performance', priority: '0.8' },
	{ path: '/contact', priority: '0.7' }
];

export function GET() {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
