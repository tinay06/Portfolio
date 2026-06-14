# Portfolio
# Cristine Jane Sedollo — Personal Portfolio

A modern, single-page portfolio website showcasing the work, skills, and achievements of **Cristine Jane Sedollo** (CJ), an IT student at the Institute of Computing, Davao del Norte State College (DNSC).

Built with semantic HTML5, modern CSS3, and vanilla JavaScript — no frameworks required. Designed for smooth scrolling, glassmorphism aesthetics, and full responsiveness on mobile devices.

---

## Live Demo

Deploy this repository to GitHub Pages to publish your site:

**GitHub Profile:** [github.com/tinay06](https://github.com/tinay06)

---

## Features

- **Hero section** — Bold typography, profile photo, floating project chips, and call-to-action buttons
- **About section** — Bento-style grid with bio, strengths, and team photo
- **Skills & stack** — Interactive glass cards with hover glow effects
- **Certificates** — Achievement cards with lightbox viewer
- **Projects** — Interactive project cards with tilt effect and image carousel gallery
- **Contact form** — Animated inputs with validation feedback
- **Scroll animations** — Reveal effects, staggered grids, parallax hero, and scroll progress bar
- **Responsive navigation** — Fixed blur header with mobile drawer menu
- **Accessibility** — Respects `prefers-reduced-motion` for users who disable animations

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Markup | HTML5 |
| Styling | CSS3, Custom Properties, Flexbox, Grid |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | [Syne](https://fonts.google.com/specimen/Syne), [DM Sans](https://fonts.google.com/specimen/DM+Sans) |

---

## Project Structure

```
Lalay Portfolio/
├── index.html          # Main page structure
├── styles.css          # All styles and animations
├── script.js           # Interactions, carousel, scroll effects
├── README.md           # Project documentation
└── images/
    ├── profile.png                 # Hero profile photo
    ├── Assets/                     # Team and project photos
    ├── Certificates/               # Certificate scans
    ├── Herbscan/                   # HerbScan screenshots
    ├── NeighborHelp/               # NeighborHelp screenshots
    ├── VitalDrop/                  # VitalDrop ecosystem screenshots
    └── IT111 (PHOTOGRAPHY)/        # Photography composition series
```

---

## Featured Projects

| Project | Description |
|---------|-------------|
| **VitalDrop** | Multi-platform blood donation ecosystem (mobile app, hospital dashboard, promotional site) |
| **NeighborHelp** | Neighborhood-first service marketplace for local providers |
| **HerbScan** | AI-powered plant identification mobile app |
| **Visual Composition Series** | IT111 photography portfolio exploring composition techniques |

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, or Safari)
- Optional: [Python](https://www.python.org/) or [Node.js](http://nodejs.org/) for a local dev server

### Run Locally

**Option 1 — Open directly**

Double-click `index.html` or open it in your browser.

**Option 2 — Local server (recommended)**

Using Python:

```bash
python -m http.server 8765
```

Then visit `http://localhost:8765`

Using Node.js:

```bash
npx serve .
```

---

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `Portfolio`)
2. Push all project files to the repository:

   ```bash
   git init
   git add .
   git commit -m "Add personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/tinay06/Portfolio.git
   git push -u origin main
   ```

3. Go to **Repository → Settings → Pages**
4. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)`
5. Save and wait a few minutes for the site to go live at:

   `https://tinay06.github.io/Portfolio/`

> **Note:** If your repository name is different, replace `Portfolio` in the URL above.

---

## Customization

| What to change | Where |
|----------------|-------|
| Name, bio, and intro text | `index.html` |
| Email and social links | Contact section in `index.html` |
| Profile photo | Replace `images/profile.png` |
| Projects and screenshots | `index.html` + `images/` folders |
| Project gallery images | `galleries` object in `script.js` |
| Certificates | Certificate cards in `index.html` + `certificates` array in `script.js` |
| Colors and theme | CSS custom properties in `:root` at the top of `styles.css` |

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Uses native `<dialog>` for modals and `IntersectionObserver` for scroll animations. Both are supported in all modern browsers.

---

## License

This project is for personal portfolio use. All project screenshots, certificates, and images belong to their respective owners.

---

## Author

**Cristine Jane Sedollo**  
Institute of Computing · Davao del Norte State College  
[GitHub](https://github.com/tinay06)
