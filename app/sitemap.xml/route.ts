import { properties } from '../../lib/data'

export async function GET() {
  const baseUrl = 'https://hariproperties.in'
  const routes = ['', 'about', 'contact', 'services', 'featured-projects', 'compare']
  const propertyUrls = properties.map((property) => `property/${property.slug}`)
  const allUrls = [...routes, ...propertyUrls]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
    .map(
      (path) => `  <url><loc>${baseUrl}/${path}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
    )
    .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
