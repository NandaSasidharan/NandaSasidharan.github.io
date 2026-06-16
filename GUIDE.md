# NSR Website — Customization & Deployment Guide

## File Structure
```
nsr-website/
├── index.html        ← Home / Landing page
├── research.html     ← Research & publications
├── yoga.html         ← Yoga journey
├── theory.html       ← Consciousness theory
├── blog.html         ← Blog (coming soon layout)
├── contact.html      ← Contact form
├── style.css         ← All shared styles (single source of truth)
├── script.js         ← Theme toggle, nav, scroll animations
└── GUIDE.md          ← This file
```

---

## 1. Replacing Your Photo

In `index.html`, find the comment `<!-- REPLACE WITH YOUR PHOTO -->`.
Replace the placeholder `<div>` with:

```html
<img
  src="your-photo.jpg"
  alt="Nandakumar Sasidharan Rajalekshmi"
  style="width:100%;height:100%;object-fit:cover;"
/>
```

**Recommended**: Export your LinkedIn photo at 600×720px or higher for crisp display.

---

## 2. Adding Your CV

In both `index.html` and `contact.html`, find the "Download CV" link:

```html
<a href="#" class="social-link" download>
```

Replace `href="#"` with the path to your PDF:

```html
<a href="cv-nandakumar-sr.pdf" class="social-link" download>
```

Upload your PDF to the same folder as the HTML files.

---

## 3. Publications (research.html)

Find the `<!-- PUBLICATION 1 -->` comments and replace each entry:

```html
<div class="pub-entry">
  <p class="pub-venue">Nature Communications · 2019</p>
  <p class="pub-title">High-performance synaptic learning with phase-change memory</p>
  <p class="pub-authors">Rajalekshmi N.S., Author B., Author C. ·
    <a href="https://doi.org/..." target="_blank" rel="noopener">PDF ↗</a>
  </p>
</div>
```

---

## 4. News & Awards (research.html)

Find the "Research Grant" and "Best Thesis Award" cards. Add:
- Grant name, amount, awarding body
- Link to actual news article (replace `href="#"`)
- Award institution and year

---

## 5. Research Figures & Code (research.html)

Find the dashed `<!-- ADD RESEARCH FIGURE HERE -->` placeholders.
Replace with:

```html
<img
  src="fig1-accuracy-vs-precision.png"
  alt="Accuracy vs. precision trade-off in RRAM training"
  style="width:100%;border-radius:8px;"
/>
<p style="font-size:0.75rem;color:var(--text-subtle);margin-top:0.5rem;">
  Fig. 1 — Description of result
</p>
```

---

## 6. Yoga Gallery Photos (yoga.html)

Find the `<!-- REPLACE WITH PHOTO -->` comments inside `.gallery-item` divs.
Replace each placeholder `<div>` with:

```html
<img src="yoga-class-kerala.jpg" alt="Yoga class in Kerala, 2022" />
```

Recommended ratio: 4:3 landscape photos. Compress to ≤300KB each.

---

## 7. Contact Form Setup (contact.html)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy your endpoint URL (looks like `https://formspree.io/f/xabc1234`)
3. In `contact.html`, find:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your actual ID.

---

## 8. Colour Customisation (style.css)

All colours are CSS variables at the top of `style.css`:

```css
:root {
  --bg:          #F7F4EE;   /* Page background (parchment) */
  --accent:      #1E5B5E;   /* Primary accent (deep teal) */
  --accent-warm: #8B5E3C;   /* Secondary accent (warm terracotta) */
  --text:        #1A1814;   /* Body text */
  ...
}
```

Change `--accent` to any colour to shift the entire site's tone.

---

## 9. Adding Blog Posts (blog.html)

When you're ready to publish:

**Option A — Keep blog in-house:**
Add a new `<article>` HTML file (e.g., `blog-post-1.html`) using the same navbar/footer structure, and link to it from `blog.html`.

**Option B — Link to Medium/Substack:**
Update each `.blog-card` to be a real `<a>` tag pointing to your Medium/Substack post. Remove `coming-soon` class and `opacity:0.65`.

---

## 10. Deployment

### GitHub Pages (free, recommended)

1. Create a GitHub account and a new public repository named `your-username.github.io`
2. Upload all files from `nsr-website/` to the root of the repository
3. Go to Repository Settings → Pages → Source: `main` branch, `/ (root)`
4. Your site will be live at `https://your-username.github.io` within minutes

### Netlify (free, drag & drop)

1. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
2. Drag the entire `nsr-website/` folder into the deploy area
3. Netlify gives you a free `xyz.netlify.app` URL instantly
4. Add a custom domain in Settings → Domain Management

### Custom Domain

Once deployed on GitHub Pages or Netlify:
- Buy a domain (e.g., `nandakumarsr.com`) at Namecheap or Google Domains
- Point the domain's DNS to your host following their guide
- HTTPS is handled automatically by both platforms

---

## 11. Adding Google Analytics (optional)

Paste before `</head>` in every HTML file:

```html
<!-- Google Analytics — replace G-XXXXXXXX with your Measurement ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

---

## 12. Performance Tips

- Compress all images with [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com) before uploading
- Keep each image under 200–400KB
- The site already loads fonts from Google Fonts; no additional CDN needed
- Dark/light mode preference is stored in `localStorage` — works across page loads

---

*Design by request · Built with HTML, CSS, vanilla JS · Fonts: Cormorant Garamond + DM Sans*
