# HelloCheck Landing Page - Quick Start

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd landing
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 3. Build for Production
```bash
npm run build
```

The `dist/` folder contains your production-ready static site.

## 📦 Deploy

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

Or connect your GitHub repo to Vercel for automatic deployments.

### Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Follow prompts

Or drag and drop the `dist` folder to Netlify.

## 🎨 Customize

- **Colors**: Edit `tailwind.config.js`
- **Content**: Update text in component files in `src/components/`
- **Links**: Modify hrefs in Header and Footer
- **SEO**: Update meta tags in `index.html`

## 📝 Notes

- All components are in `src/components/`
- Main app logic in `src/App.jsx`
- Styles in `src/styles.css`
- SEO meta tags in `index.html`

## 🔗 Connect to App

Update the CTA button in `src/components/CTASection.jsx` to link to your HelloCheck app:

```jsx
window.location.href = '/app'; // Change to your app URL
```

---

**Ready to launch! 🚀**

