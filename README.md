# rbxFoundry - Texture Copier Website

A modern React-based website for the rbxFoundry texture copier tool for Roblox avatars.

## Features

- **Custom Oval Toggle Switch**: Beautiful sun/moon toggle with smooth sliding animation
  - Active side highlighted with bright blue (#2F54EB)
  - Inactive side remains dim/transparent
  - Smooth transitions between light and dark modes
- **React + Vite**: Fast, modern development setup
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Beautiful, consistent icon set
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Persistent theme preference with localStorage
- **Modern UI**: Clean, professional design with smooth animations

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
/workspace
├── src/
│   ├── components/
│   │   └── ThemeToggle.jsx    # Custom oval toggle switch component
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind directives and global styles
├── index.html                  # HTML entry point
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **PostCSS**: CSS processing with Autoprefixer

## Theme Toggle Design

The custom theme toggle features:
- Oval shape with sun (left) and moon (right) icons
- Active side: Bright blue background (#2F54EB) with white icon
- Inactive side: Transparent/dim background with gray icon
- Smooth color and transform transitions
- Hover effects for better interactivity
- Saved preference across sessions

## Color Scheme

**Light Mode:**
- Background: Gray 200
- Cards: Gray 100
- Text: Gray 900
- Accent: Blue (#2F54EB)

**Dark Mode:**
- Background: Gray 900
- Cards: Gray 800
- Text: White
- Accent: Blue (#2F54EB)

## Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
