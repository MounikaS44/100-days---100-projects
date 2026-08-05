# 🖼️ Image Gallery with Lightbox

**Day 5 / 100 — #100Days100Projects Challenge**

A responsive image gallery with a fully interactive lightbox — click any image to view it full-screen, navigate with arrows or your keyboard, and enjoy a soft glassmorphism UI over a custom background. Built with plain **HTML, CSS, and JavaScript** — no frameworks, no libraries.

![status](https://img.shields.io/badge/status-complete-brightgreen)
![html](https://img.shields.io/badge/HTML5-orange)
![css](https://img.shields.io/badge/CSS3-blue)
![js](https://img.shields.io/badge/JavaScript-yellow)

---

## ✨ Features

- 🔳 Responsive grid gallery (auto-adjusts to any screen size)
- 💡 Click-to-open lightbox with a smooth fade-in animation
- ⬅️➡️ Next / Previous navigation via buttons **or** arrow keys
- ⌨️ Keyboard shortcuts — `←` `→` to navigate, `Esc` to close
- 🖱️ Click outside the image to close the lightbox
- 🔢 Live image counter (e.g. `3 / 12`)
- 🌫️ Custom background image with a frosted-glass overlay effect
- 📱 Fully responsive — works on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Structure | HTML5 |
| Styling | CSS3 (Grid, Flexbox, `backdrop-filter`, animations) |
| Interactivity | Vanilla JavaScript (DOM manipulation, event listeners) |

No frameworks. No build tools. Just the fundamentals — done well.

---

## 📁 Project Structure

```
image-gallery-lightbox/
├── index.html      # Markup & structure
├── style.css        # Styling, layout, animations
├── script.js         # Lightbox logic & interactivity
├── bg.jpg              # Background image
└── README.md
```

---

## 🚀 Getting Started

No installation needed — it's pure front-end.

1. Clone the repo
   ```bash
   git clone https://github.com/<your-username>/image-gallery-lightbox.git
   ```
2. Open `index.html` in your browser

That's it. 🎉

---

## 🧠 The Process

This project was built as **Day 5** of my **100 Days, 100 Projects** challenge — a personal commitment to sharpening my front-end fundamentals one small project at a time.

1. **Planned the structure** — a responsive grid gallery was the natural starting point; a lightbox was the added challenge for the day.
2. **Built the HTML skeleton** — a `.gallery` container holding a set of images, plus a hidden `.lightbox` overlay reused for every image.
3. **Styled with CSS Grid** — `auto-fit` + `minmax()` for a gallery that reflows automatically without media queries doing all the work.
4. **Wired up the JavaScript** — tracked a `currentIndex`, updated the lightbox's `src` on click, and added `next` / `prev` / `close` handlers plus keyboard listeners.
5. **Polished the details** — hover states, fade-in animation, an image counter, and click-outside-to-close for a native-app feel.
6. **Final touch** — added a custom background image with a dark overlay and `backdrop-filter: blur()` on the gallery container for a modern glassmorphism look.

**Key takeaway:** even a "simple" gallery has real UX decisions baked in — keyboard accessibility, click targets, and visual hierarchy all matter, even in a small project.

---

## 🔮 Possible Next Steps

- [ ] Add swipe gestures for mobile
- [ ] Add a thumbnail strip inside the lightbox
- [ ] Add category filtering
- [ ] Lazy-load images for performance

---

## 📬 Connect

If you're following the **#100Days100Projects** journey, feel free to connect, fork this repo, or drop feedback!

⭐ **Star this repo** if you found it useful.
