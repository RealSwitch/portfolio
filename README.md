# Real Switch Portfolio

A simple, self-updating portfolio website built with React. It fetches your latest GitHub projects every time someone visits!

## Features

- **About**, **Projects**, **Resume/Skills**, and **Contact** sections
- Projects list auto-updates using the GitHub API
- Clean, responsive design with navigation
- Easy deployment to GitHub Pages

## Setup

1. **Clone this repo**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start locally**

   ```bash
   npm start
   ```

   Visit `http://localhost:3000`

4. **Deploy to GitHub Pages**

   - Make sure the `homepage` field in `package.json` is:
     ```
     "homepage": "https://realswitch.github.io/portfolio"
     ```
   - Run:
     ```bash
     npm install gh-pages --save-dev
     npm run deploy
     ```

   - Enable GitHub Pages in your repo settings (set source to `gh-pages` branch if needed).

## How does it update?

- The Projects section fetches your latest public repositories directly from the GitHub API whenever the site loads.
- Whenever you push new repos or code to GitHub, your portfolio shows the updates automatically.

## Customization

- Edit `src/components/About.js` for your own intro.
- Change the username in `App.js` and `RepoList.js` to your own if needed.
- For the contact form, your Formspree endpoint is already set up.
- Place your `resume.pdf` in the `public/` folder.

---

Questions or want enhancements? [Open an issue!](https://github.com/RealSwitch/portfolio/issues)