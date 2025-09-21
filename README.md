# Swarajya Agro Foods - Premium Indian Spices Website

A beautiful, modern React website for Swarajya Agro Foods, showcasing premium Indian spices with an impressive visual design.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Beautiful gradients, animations, and interactive elements
- **Spice Showcase**: Detailed information about various Indian spices
- **About Us Page**: Company story and leadership team profiles
- **Contact Form**: Interactive contact form with modern styling
- **GitHub Pages Ready**: Optimized for free hosting on GitHub Pages

## Pages

1. **Home Page**: Hero section, spice showcase, features, and contact
2. **About Page**: Company story, mission, vision, and leadership team

## Technologies Used

- React 18
- React Router DOM
- CSS3 with modern features (Grid, Flexbox, Animations)
- Responsive design principles
- GitHub Pages deployment ready

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/swarajya-agro-foods.git
cd swarajya-agro-foods
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment. Follow these steps:

1. Update the `homepage` field in `package.json` with your GitHub repository URL:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the project
- Deploy it to the `gh-pages` branch
- Make it available at your GitHub Pages URL

## Customization

### Adding Your Images

Replace the emoji placeholders in the following files with your actual images:
- `src/components/Leadership.js` - CEO and MD photos
- `src/components/SpicesShowcase.js` - Spice images

### Updating Content

- Company information: Edit `src/components/CompanyStory.js`
- Contact details: Update `src/components/Contact.js` and `src/components/Footer.js`
- Spice information: Modify `src/components/SpicesShowcase.js`

### Styling

All CSS files are modular and can be customized:
- Global styles: `src/App.css`
- Component-specific styles: Individual `.css` files in component folders

## Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css
│   ├── Hero.js & Hero.css
│   ├── SpicesShowcase.js & SpicesShowcase.css
│   ├── Features.js & Features.css
│   ├── Contact.js & Contact.css
│   ├── Footer.js & Footer.css
│   ├── AboutHero.js & AboutHero.css
│   ├── CompanyStory.js & CompanyStory.css
│   └── Leadership.js & Leadership.css
├── pages/
│   ├── Home.js
│   └── About.js
├── App.js & App.css
├── index.js & index.css
└── index.html
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or support, please contact:
- Email: info@swarajyaagrofoods.com
- Phone: +91 98765 43210

---

Made with ❤️ for Swarajya Agro Foods
