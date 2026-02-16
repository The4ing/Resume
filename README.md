# Portfolio Website

A modern, responsive single-page portfolio website built with pure HTML5, CSS3, and Vanilla JavaScript. Features a clean minimalist design with dark/light mode toggle and smooth animations.

## 🎨 Features

- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Toggle between themes with persistence using localStorage
- **Smooth Animations**: Scroll-triggered fade-in effects and hover interactions
- **Semantic HTML**: Accessible and SEO-friendly structure
- **Modern Design**: Clean typography with Syne and Work Sans fonts from Google Fonts
- **Pure JavaScript**: No frameworks or dependencies (except Tailwind CSS via CDN)
- **Performance Optimized**: Debounced scroll events and intersection observers

## 📁 File Structure

```
portfolio-website/
│
├── index.html          # Main HTML structure
├── style.css           # Custom CSS styles and animations
├── script.js           # JavaScript for interactivity
├── README.md           # This file
│
└── images/             # Image directory (you need to create this)
    ├── profile.jpg     # Your profile picture (circular, ~400x400px recommended)
    ├── gymrat.jpg      # GymRat project screenshot
    └── webtimer.jpg    # WebTimer project screenshot
```

## 🚀 Setup Instructions

1. **Download all files** (index.html, style.css, script.js)

2. **Create an images folder** in the same directory:
   ```
   mkdir images
   ```

3. **Add your images**:
   - `profile.jpg` - Your profile photo (square format works best)
   - `gymrat.jpg` - Screenshot of your GymRat project
   - `webtimer.jpg` - Screenshot of your WebTimer project

4. **Customize the content**:
   - Replace "Your Name" in the hero section with your actual name
   - Update social media links (GitHub, LinkedIn, email)
   - Modify the bio text to match your background
   - Update experience details with your actual work history
   - Adjust skills to match your expertise
   - Update project descriptions and tags

5. **Open in browser**:
   - Simply double-click `index.html` or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000`

## 🎨 Design System

### Colors
- **Accent Color**: Cyan (#06b6d4) - Modern and tech-focused
- **Dark Mode**: Deep navy (#0f172a) background with white text
- **Light Mode**: White (#ffffff) background with dark navy text

### Typography
- **Display Font**: Syne (headings, bold statements)
- **Body Font**: Work Sans (paragraphs, readable content)

### Key Components
1. **Sticky Navigation**: Fixed header with smooth scroll links
2. **Hero Section**: Two-column layout with profile image
3. **Timeline**: Visual work experience timeline
4. **Skill Cards**: Categorized skill badges
5. **Project Grid**: Card-based project showcase
6. **Education**: Prominent degree information

## ✨ Interactive Features

- **Theme Toggle**: Dark/light mode with localStorage persistence
- **Smooth Scrolling**: Animated navigation to sections
- **Scroll Animations**: Elements fade in as you scroll
- **Active Navigation**: Current section highlighted in navbar
- **Mobile Menu**: Responsive hamburger menu
- **Project Card Hover**: 3D tilt effect on project cards
- **Timeline Pulse**: Animated timeline dots
- **Social Icons**: Hover effects with elevation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom animations, transitions, CSS Grid, Flexbox
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **FontAwesome**: Icon library (via CDN)
- **Google Fonts**: Syne and Work Sans typography

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (adjusted spacing)
- **Desktop**: > 1024px (full layout with maximum width)

## 🎯 Customization Tips

1. **Change Accent Color**: Update the `--color-accent` in style.css
2. **Modify Animations**: Adjust timing and effects in the CSS animations section
3. **Add Sections**: Copy existing section structure and modify content
4. **Change Fonts**: Replace Google Fonts links in index.html
5. **Adjust Spacing**: Modify Tailwind classes (py-20, px-6, etc.)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support for accessibility preferences
- High contrast mode support
- Screen reader friendly

## 📊 Performance

- Lazy loading for scroll animations
- Debounced scroll event handlers
- CSS-only animations where possible
- Optimized image loading (add your own optimized images)
- Minimal external dependencies

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## 🤝 Credits

Built with passion and attention to detail. Designed to stand out from generic portfolio templates.

---

**Need Help?** Feel free to modify any part of the code to match your personal brand and style!
