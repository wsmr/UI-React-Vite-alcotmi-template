# Alco TMI Website Replica

A modern, responsive React application that replicates the visual appearance and layout of the Alco TMI industrial services website (https://www.alcotmi.com).

## 🎯 Project Overview

This project is a frontend-only replica that focuses on visual design, user interface, and interactive elements without implementing backend functionality. It demonstrates modern web development practices and responsive design principles.

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.1.0** - Modern JavaScript library for building user interfaces
- **Vite 6.3.5** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible React components
- **Montserrat Font** - Google Fonts integration for typography

### Interactive Components
- **Swiper.js 11.2.8** - Modern touch slider for carousels and galleries
- **Lucide React** - Beautiful, customizable SVG icons
- **Framer Motion** - Production-ready motion library for React (pre-installed)

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **pnpm** - Fast, disk space efficient package manager

## 🏗️ Architecture & Design Patterns

### Component Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui base components
│   ├── Header.jsx    # Navigation and branding
│   ├── Hero.jsx      # Main hero section with video background
│   ├── Services.jsx  # Services grid layout
│   ├── About.jsx     # Company information section
│   ├── Projects.jsx  # Project showcase with Swiper carousel
│   ├── CTA.jsx       # Call-to-action section
│   ├── News.jsx      # News and updates grid
│   ├── Careers.jsx   # Career opportunities section
│   ├── Members.jsx   # Partner/member logos carousel
│   └── Footer.jsx    # Contact info and newsletter signup
├── App.jsx           # Main application component
├── App.css           # Global styles and custom CSS
└── main.jsx          # Application entry point
```

### Design Principles Applied
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **Component Modularity** - Reusable, self-contained React components
- **Accessibility** - WCAG 2.1 compliant with proper ARIA labels
- **Performance** - Optimized images, lazy loading, and efficient animations
- **Modern CSS** - CSS Grid, Flexbox, and CSS custom properties

## 🎨 Visual Design Features

### Color Scheme
- **Primary Red**: #e74c3c (Alco TMI brand color)
- **Dark Blue**: #2c3e50 (Headers and accents)
- **Neutral Grays**: Various shades for text and backgrounds

### Interactive Elements
- **Smooth Scrolling Navigation** - Seamless section transitions
- **Hover Effects** - Card animations and button interactions
- **Carousel Components** - Auto-playing project and member sliders
- **Responsive Dropdowns** - Mobile-friendly navigation menus
- **Form Interactions** - Newsletter signup with validation

### Animations & Transitions
- **Fade-in Animations** - Staggered content reveals
- **Transform Effects** - Hover states and micro-interactions
- **Swiper Transitions** - Smooth carousel animations
- **Loading States** - Visual feedback for user actions

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Single column layouts, stacked navigation
- **Tablet**: 768px - 1024px - Two-column grids, condensed spacing
- **Desktop**: > 1024px - Full multi-column layouts, expanded content

### Mobile Optimizations
- Touch-friendly button sizes (minimum 44px)
- Swipe gestures for carousels
- Collapsible navigation menu
- Optimized typography scaling

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ (tested with v22.14.0)
- pnpm 8+ (or npm/yarn as alternative)

### Installation Steps

1. **Clone or extract the project**
   ```bash
   cd alcotmi-replica
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `pnpm run dev` - Start development server with hot reload
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run lint` - Run ESLint for code quality

## 🏗️ Build for Production

### Build Process
```bash
pnpm run build
```

This creates an optimized production build in the `dist/` directory with:
- Minified JavaScript and CSS
- Optimized asset loading
- Tree-shaken dependencies
- Compressed static files

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: Cloudflare, AWS CloudFront
- **Traditional Hosting**: Any web server with static file support

## 📁 Asset Requirements

The following assets need to be added to complete the visual design:

### Images & Media
```
src/assets/
├── images/
│   ├── logo.svg                    # Company logo (SVG preferred)
│   ├── hero-video.mp4             # Hero background video (1920x1080)
│   ├── hero-fallback.jpg          # Video fallback image
│   ├── about-image.jpg            # About section image (800x600)
│   ├── project1.jpg               # Project showcase images (600x400)
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── news1.jpg                  # News article images (400x225)
│   ├── news2.jpg
│   ├── news3.jpg
│   ├── acq-logo.svg               # Member/partner logos (SVG)
│   ├── cmmtq-logo.svg
│   ├── paptac-logo.svg
│   └── naval-quebec-logo.svg
└── icons/
    ├── chaudronnerie-icon.svg     # Service icons (SVG)
    ├── tuyauterie-icon.svg
    ├── mecanique-icon.svg
    ├── entretien-icon.svg
    └── conception-icon.svg
```

### Asset Guidelines
- **Images**: WebP format preferred, JPEG fallback
- **Icons**: SVG format for scalability
- **Video**: MP4 format, H.264 codec, under 10MB
- **Optimization**: Use appropriate compression for web delivery

## 🔧 Customization Guide

### Brand Colors
Update CSS custom properties in `src/App.css`:
```css
:root {
  --alco-red: #e74c3c;
  --alco-red-dark: #c0392b;
  --alco-dark: #2c3e50;
  --alco-dark-light: #34495e;
}
```

### Content Updates
- **Text Content**: Update component JSX files
- **Navigation**: Modify `src/components/Header.jsx`
- **Contact Info**: Update `src/components/Footer.jsx`
- **Services**: Edit `src/components/Services.jsx`

### Styling Modifications
- **Global Styles**: `src/App.css`
- **Component Styles**: Tailwind classes in JSX
- **Custom Components**: `src/components/ui/`

## 🌐 Browser Compatibility

### Supported Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced interactions require modern browser features
- Graceful degradation for older browsers

## ♿ Accessibility Features

### WCAG 2.1 Compliance
- **Keyboard Navigation**: Full site navigation without mouse
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Meets AA standards (4.5:1 ratio)
- **Focus Management**: Visible focus indicators
- **Alternative Text**: Descriptive alt text for images

### Accessibility Testing
- Use browser dev tools accessibility audits
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify keyboard-only navigation
- Check color contrast ratios

## 🔍 SEO Optimization

### Meta Tags
- Descriptive title and meta description
- Open Graph tags for social sharing
- Structured data markup ready
- Canonical URLs for content

### Performance
- Lazy loading for images
- Code splitting for JavaScript
- Optimized asset delivery
- Fast loading times (< 3 seconds)

## 🧪 Testing Recommendations

### Manual Testing
- Cross-browser compatibility
- Responsive design on various devices
- Interactive element functionality
- Form validation and submission

### Automated Testing
- Lighthouse performance audits
- Accessibility scanning tools
- Cross-browser testing services
- Mobile device testing

## 📈 Performance Metrics

### Target Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimization Techniques
- Image optimization and lazy loading
- Code splitting and tree shaking
- CSS and JavaScript minification
- CDN delivery for static assets

## 🔄 Future Enhancements

### Potential Improvements
- **Internationalization**: Multi-language support
- **Dark Mode**: Theme switching capability
- **Advanced Animations**: GSAP integration for complex animations
- **PWA Features**: Offline support and app-like experience
- **CMS Integration**: Headless CMS for content management

### Scalability Considerations
- Component library expansion
- State management (Redux/Zustand) for complex interactions
- API integration preparation
- Testing framework implementation

## 📞 Support & Maintenance

### Development Environment
- **Node.js**: v22.14.0
- **pnpm**: v10.4.1
- **React**: v19.1.0
- **Vite**: v6.3.5

### Troubleshooting
- Clear node_modules and reinstall dependencies
- Check browser console for JavaScript errors
- Verify asset paths and file permissions
- Update dependencies for security patches

## 📄 License & Credits

### Framework Credits
- **React**: Meta (Facebook) - MIT License
- **Tailwind CSS**: Tailwind Labs - MIT License
- **Swiper**: nolimits4web - MIT License
- **Lucide**: Lucide Contributors - ISC License

### Design Inspiration
- Original design: Alco TMI (https://www.alcotmi.com)
- Modern web design principles and best practices
- Industrial/corporate design patterns

---

**Note**: This is a frontend replica for demonstration purposes. All content and branding elements should be replaced with appropriate materials for production use.

