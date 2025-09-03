# Shubh Sales Homepage

Static, responsive landing page for Shubh Sales (mattresses, furnishings, handloom). Built with semantic HTML, modern CSS (no frameworks), and minimal vanilla JS.

## Live Overview
- Sections: Header/Nav, Hero, Featured Products, Why Choose Us, Footer
- Enhancements: Scroll animations, mobile menu, scroll-to-top button, accessible focus states

## Features
- Responsive layout (CSS Grid + Flexbox)
- Mobile hamburger navigation with ARIA attributes
- Product card hover + keyboard focus styles
- IntersectionObserver fade-in animations
- Smooth scrolling + scroll-to-top control
- Dynamic year in footer
- Semantic structure + alt text for images
- SEO title + meta description

## Tech Stack
- HTML5, CSS3, Vanilla JavaScript
- Fonts: Roboto (Google Fonts) + Geist fallback (system sans fallback if not self-hosted)
- Icons: Font Awesome CDN

## File Structure
```
shubhsales/
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ scripts.js
└─ images/
   ├─ hero.jpg
   ├─ product1.jpg
   ├─ product2.jpg
   ├─ product3.jpg
   └─ product4.jpg
```

## Getting Started
Open `index.html` directly in a browser.

On Windows (PowerShell):
```powershell
start index.html
```

Optional tiny local server (Python 3):
```powershell
python -m http.server 5500
# then visit http://localhost:5500
```

## Customization
| Area | How |
|------|-----|
| Accent color | Edit `--accent` / `--accent-alt` in `:root` in `css/styles.css` |
| Add products | Duplicate a `.product-card` in the Featured Products grid |
| Fonts | Self-host Geist or replace with Poppins / Inter |
| Animation timing | Adjust `.fade-in` transition or remove `observer` block in `scripts.js` |
| Social links | Replace placeholder Instagram/WhatsApp URLs in footer |

## Accessibility
- Keyboard focus styles (`:focus-visible`)
- ARIA labels on navigation toggle & social icons
- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`
- Descriptive `alt` attributes (replace with real product descriptions when available)

## SEO Basics
- Unique `<title>` + meta description already included
- Use real copy for product descriptions for better relevance
- Consider adding Open Graph tags when deploying:
```html
<meta property="og:title" content="Shubh Sales" />
<meta property="og:description" content="Premium mattresses, furnishings & handloom." />
<meta property="og:image" content="/images/hero.jpg" />
<meta property="og:type" content="website" />
```

## Performance Tips
- Optimize images (WebP/AVIF + appropriate dimensions)
- Add `loading="lazy"` to non-hero images if page grows
- Consider preloading hero image for Largest Contentful Paint improvements

## Future Enhancements (Optional)
- Dedicated Products page with filtering
- Contact form (progressive enhancement)
- Light/dark theme toggle
- Replace Font Awesome with SVG sprite for smaller payload
- Add structured data (JSON-LD) for local business

## Deployment
Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages). For GitHub Pages:
1. Commit + push
2. Enable Pages (branch: `main`, root)
3. Wait for build, then share the URL

## License
Not specified—add a LICENSE file if needed (e.g., MIT) and ensure you have rights to all images before production use.

---
Feel free to request a Products page, About page, or deployment workflow next.
