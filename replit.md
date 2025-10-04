# Nova Restaurant Website

## Overview
Nova Restaurant is a multilingual static website for a restaurant featuring:
- Homepage with hero section, chef's specials, offers, about section, reviews, and location
- Interactive menu page with order modal
- Reservation booking form
- Contact page with contact form
- Multilingual support with elegant dropdown selector (6 languages: English, Arabic, French, Spanish, German, Turkish)
- Full RTL support for Arabic

## Project Structure
```
.
├── index.html              # Homepage
├── menu.html              # Menu page with ordering functionality
├── reservation.html       # Table reservation form
├── contact.html           # Contact information and form
├── css/
│   └── style.css          # All styling
├── js/
│   ├── script.js          # Main JavaScript (carousel, forms)
│   ├── lang.js            # Language switching functionality
│   ├── menu.js            # Menu page functionality
│   └── menu_data.js       # Menu items data
├── images/                # Restaurant images and dishes
├── server.py              # Python HTTP server
└── README.md              # Original project readme
```

## Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Server**: Python 3.11 HTTP server
- **Hosting**: Replit (serves on port 5000)

## Features
- **Multilingual Support**: Beautiful dropdown selector with 6 languages:
  - English 🇬🇧
  - Arabic 🇸🇦 (with full RTL support)
  - French 🇫🇷
  - Spanish 🇪🇸
  - German 🇩🇪
  - Turkish 🇹🇷
- **Responsive Design**: Works on mobile and desktop devices with adaptive language selector
- **Interactive Elements**: 
  - Smooth rotating offers carousel with CSS transitions
  - Menu ordering modal
  - Form submissions (demo mode)
  - Mobile hamburger menu
- **Forms**: Reservation booking, menu ordering, and contact forms with enhanced styling
- **Enhanced UI**: 
  - Gradient backgrounds and buttons
  - Smooth animations and hover effects
  - Sticky header with shadow
  - Card lift effects

## Development
The website is served using a Python HTTP server on port 5000 with cache control headers to ensure fresh content delivery.

### Running Locally
The server automatically starts via the workflow. It serves static files from the root directory.

### Language System
- 6 languages supported with complete translations
- Elegant dropdown selector with country flags
- Language preference saved in localStorage
- Translations defined in `js/lang.js`
- Dynamic content updates without page reload
- RTL layout automatically applied for Arabic
- Mobile responsive (hides language name on small screens)

## Recent Changes
- 2025-10-04: Enhanced multilingual support with fully functional dropdown selector
  - Completed translations for all 6 languages (English, Arabic, French, Spanish, German, Turkish)
  - Implemented elegant dropdown selector with smooth animations and hover effects
  - Added complete CSS styling for dropdown with RTL support
  - Interactive language switcher with flag icons and language names
  - Persistent language preference saved in localStorage
  - Smooth transitions and visual feedback on language changes
- 2025-10-03: Major UI enhancements
  - Enhanced CSS with gradients, animations, and smooth transitions
  - Added mobile hamburger menu
  - Improved carousel with CSS-based smooth transitions
  - Enhanced forms with better styling and feedback
  - Added sticky header and card hover effects
- 2025-10-03: Imported from GitHub and configured for Replit environment
  - Added Python HTTP server with proper cache control
  - Configured workflow to serve on port 5000
  - Added .gitignore for Python files

## User Preferences
None specified yet.

## Notes
- All forms are in demo mode (no backend processing)
- Images are stored locally in the images/ directory
- No external dependencies or build process required
