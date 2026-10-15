# MyPortfolio-Revamp

The revamped portfolio of **Justine Felicilda**, a multimedia creator based in Manila. Built with Next.js and plain CSS, so everything can be edited by hand in any code editor.

## What's inside

- **Homepage:** waving, typed greeting; profile photo with a hover effect; bio; a featured works carousel with arrows; timeline; things I love; links on the web.
- **Works page:** all projects, grouped into Works, Collaborations, and Other works.
- **Project pages:** description, links, and a screenshot gallery with a click-to-enlarge viewer.
- **Navbar:** a live Manila clock (on other pages it also takes you home), plus a light/dark toggle with a changing caption.
- **Works everywhere:** responsive on phones, tablets, and desktops, and respects visitors' reduced-motion settings.

## Run it on your computer

You need [Node.js](https://nodejs.org) 18.18 or newer.

```bash
npm install      # first time only
npm run dev      # start the site
```

Then open http://localhost:3000. Changes you save show up in the browser right away.

To check a production build: `npm run build`, then `npm start`.

## Editing content

Almost everything is in **`data/content.js`**:

| What you want to change | Where in `data/content.js` |
| --- | --- |
| Greeting, name, roles, details row, bio | `profile` |
| Buttons under the bio | `heroButtons` |
| Projects in the featured works carousel | `featuredWorks` |
| Timeline, interests, social links | `timeline`, `interests`, `socials` |
| Clock messages and dark mode captions | `navbar` |
| Projects and their pages | `works` |

**Add a project:**
1. Put its images in `public/images/works/`.
2. Add an entry to `works` in `data/content.js`, copying an existing one.

Its page appears at `/works/<slug>` automatically.

Colors, spacing, and fonts are in **`app/globals.css`**. Light mode colors are in `:root` at the top, and dark mode colors are right below them.

## Profile photo hover effects

Two effects are included, in `components/photo-effects/`:

- `CycleEffect.jsx` flips through your poses like a flipbook. This is the current one.
- `FanOutEffect.jsx` spreads your poses out like Polaroids.

To switch, change one line in `data/content.js`:

```js
photoEffect: "cycle",   // or "fanout"
```

**Your pose photos:** the files in `public/images/poses/` are placeholders. Replace them with your own square photos, keeping the same file names, or update the `poses` list in `data/content.js`. Three to five photos with similar framing look best.

## Project structure

```
app/                 pages (homepage, works, project pages, 404) and styles
components/          navbar, greeting, gallery, cards, icons, photo effects
data/content.js      all site content and settings
public/images/       profile photo, poses, project images, link preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import `MyPortfolio-Revamp`.
3. Keep the default settings and click **Deploy**.

After that, every push to `main` updates the live site. Once it has its final address, update `site.url` in `data/content.js` so link previews use the right domain.

## Pin it on your GitHub profile

On your GitHub profile page, click **Customize your pins**, check **MyPortfolio-Revamp**, and save.

## Credits

Design and content by Justine Felicilda. Built with [Next.js](https://nextjs.org) and the [M PLUS Rounded 1c](https://fonts.google.com/specimen/M+PLUS+Rounded+1c) font.
