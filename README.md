# Taco Tango website

A 4-page static site (Home, About, Menu, Events) built with plain HTML/CSS/JS —
no build step, no dependencies. Live on GitHub Pages at
https://eloynaz.github.io/taco-tango/

## Folder contents
```
index.html          Home page (hero, intro, ticker)
about.html           About the owners + QR code section
menu.html            Full menu (appetizers, entrees, desserts, beverages, mocktails, kids menu)
events.html          Weekly events schedule
assets/css/styles.css   All site styling
assets/js/main.js       Nav toggle + scroll-reveal animation
assets/js/ticker.js     Builds the review ticker from reviews-data.js
assets/js/reviews-data.js   The 30 preloaded reviews
assets/img/logo.png     Logo, cropped from the Canva file
assets/img/owners-illustration.png   Illustrated photo of Maia & Savannah
assets/video/           Empty — drop the hero video here (see below)
```

## Status

1. ~~Hero video~~ — done. `assets/video/TacoTangoHero.mp4` is wired up as the
   home page hero background, with a sound-on toggle since browsers block
   autoplay with audio.
2. ~~Banner images~~ — done. Menu and Events pages each have a banner image
   (`assets/img/banner-menu.jpg`, `assets/img/banner-events.jpg`) above
   their headings.
3. ~~QR code~~ — done. `assets/img/qr-code.png` is a real, scannable QR code
   in a taco-branded gold/cream frame, linking to
   https://eloynaz.github.io/taco-tango/, embedded in `about.html`. A
   larger standalone flyer version (with the full logo and a caption) was
   also generated for the class presentation.

## How to publish on GitHub Pages

1. Create a free GitHub account if you don't have one, and a new **public**
   repository (e.g. `taco-tango`).
2. Upload every file and folder from this project into that repository,
   keeping the same folder structure (drag-and-drop works on github.com,
   no command line needed).
3. In the repository, go to **Settings > Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch **main**, folder **/ (root)**. Save.
5. GitHub gives you a live URL, usually
   `https://<your-username>.github.io/taco-tango/` — it can take a minute or
   two to go live the first time.

That URL is what she'll pull up in class, and what the QR code will point to
once we generate it.
