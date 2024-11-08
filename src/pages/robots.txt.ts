// https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: Googlebot
User-agent: Twitterbot 
User-agent: Bingbot
User-agent: Slurp
User-agent: DuckDuckBot
User-agent: Applebot
User-agent: FacebookExternalHit
User-agent: Discordbot
Disallow:
Allow: *
Crawl-delay: 10

User-agent: archive.org_bot
Disallow:
Allow: *
Crawl-delay: 2

User-agent: *
Disallow: *

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};