# Prairie Sky Drones — Claude Code Rules

## Site
- Domain: https://prairieskydrones.com
- Vercel project: prairieskydrones
- GitHub: damienschuster-91/prairieskydrones

## Pages
- `/` → `index.html`
- `/about` → `about.html`
- `/articles` → `articles.html`
- `/contact` → `contact.html`
- `/templates` → `templates.html`

## Nav Links (public-facing only)
- Home
- About
- Resources
- Book a Flyover (CTA)

Do NOT add Page Guide, Templates, or any internal pages to the nav.

## Pilots & Service Area
Two pilots, two hubs:

**Sioux Falls hub (Jax Schuster) — SE South Dakota:**
- SD Counties: Minnehaha, Lincoln, Turner, McCook, Moody, Lake, Brookings, Kingsbury, Hamlin, Deuel
- Cities: Sioux Falls, Brandon, Tea, Harrisburg, Dell Rapids, Baltic, Canton, Lennox, Hartford, Brookings, Watertown, Madison, Yankton

**Rapid City hub — West SD + border areas in NE/WY/MT:**
- SD Counties: Pennington, Meade, Lawrence, Custer, Fall River, Butte, Harding
- SD Cities: Rapid City, Sturgis, Spearfish, Deadwood, Hot Springs, Belle Fourche, Custer, Keystone, Hill City
- NE (Dawes, Sioux, Sheridan): Chadron, Crawford, Gordon
- WY (Crook, Weston, Campbell): Sundance, Newcastle, Gillette
- MT (Carter, Fallon, Powder River): Ekalaka, Baker, Broadus

## SEO Files — Update Rules

After every commit that adds or modifies a page, route, or significant content change:

**`sitemap.xml`** — update `lastmod` date for any changed pages. Add new `<url>` entries for new pages. Remove entries for deleted pages.

**`robots.txt`** — only update if new directories or routes are added that should be blocked or allowed.

**`llms.txt`** — update if services, pricing, service area, or page list changes.

Never update these files for CSS, JS, or cosmetic-only changes.
