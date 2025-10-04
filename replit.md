# Nova Restaurant Website

## Overview
Nova Restaurant is a bilingual (English/Arabic) static website for a restaurant featuring:
- Homepage with hero section, chef's specials, offers, about section, reviews, and location
- Interactive menu page with order modal
- Reservation booking form
- Contact page with contact form
- Language toggle between English and Arabic with RTL support

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
- **Bilingual Support**: Toggle between English and Arabic with full RTL support
- **Responsive Design**: Works on mobile and desktop devices
- **Interactive Elements**: 
  - Rotating offers carousel
  - Menu ordering modal
  - Form submissions (demo mode)
- **Forms**: Reservation booking, menu ordering, and contact forms

## Development
The website is served using a Python HTTP server on port 5000 with cache control headers to ensure fresh content delivery.

### Running Locally
The server automatically starts via the workflow. It serves static files from the root directory.

### Language System
- Language preference is saved in localStorage
- Translations defined in `js/lang.js`
- Dynamic content updates without page reload
- RTL layout automatically applied for Arabic

## Recent Changes
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
