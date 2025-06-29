# Project Structure Documentation

## Overview
This project has been reorganized into a clear frontend/backend separation for better maintainability and scalability.

## Directory Structure

```
project-root/
├── frontend/                    # Frontend application
│   ├── index.html              # Main HTML file
│   ├── css/                    # Stylesheets
│   │   ├── styles.css          # Main CSS file (imports all others)
│   │   ├── base/               # Base styles
│   │   │   └── base.css        # Global styles, variables, resets
│   │   ├── layout/             # Layout components
│   │   │   ├── header.css      # Header styles
│   │   │   ├── footer.css      # Footer styles
│   │   │   └── sections.css    # Section layouts
│   │   └── components/         # UI components
│   │       └── components.css  # Buttons, cards, modals, etc.
│   ├── js/                     # JavaScript files
│   │   ├── script.js           # Main application logic
│   │   ├── components/         # Reusable components
│   │   │   ├── testimonials-carousel-new.js
│   │   │   ├── contact-modal.js
│   │   │   ├── projects-modal.js
│   │   │   ├── theme-switcher.js
│   │   │   ├── back-to-top.js
│   │   │   └── particles.js
│   │   └── utils/              # Utility functions
│   │       └── translations.js # Internationalization
│   └── assets/                 # Static assets
│       ├── images/             # Image files
│       └── icons/              # Icon files
├── backend/                    # Backend application (future)
│   ├── api/                    # API endpoints
│   ├── config/                 # Configuration files
│   └── utils/                  # Backend utilities
├── docs/                       # Documentation
│   ├── README.md              # Original README
│   └── PROJECT_STRUCTURE.md   # This file
└── package.json               # Project configuration
```

## Frontend Organization

### CSS Structure
- **Base**: Global styles, CSS variables, resets, typography
- **Layout**: Header, footer, section layouts, grid systems
- **Components**: Reusable UI components (buttons, cards, modals)

### JavaScript Structure
- **Components**: Self-contained, reusable JavaScript modules
- **Utils**: Helper functions, utilities, and shared logic
- **Main**: Core application logic and initialization

## Backend Organization (Future)
- **API**: REST endpoints, controllers, routes
- **Config**: Database config, environment variables, settings
- **Utils**: Backend utilities, helpers, middleware

## Benefits of This Structure

1. **Separation of Concerns**: Clear distinction between frontend and backend
2. **Modularity**: Each component is self-contained and reusable
3. **Scalability**: Easy to add new features without affecting existing code
4. **Maintainability**: Organized files make debugging and updates easier
5. **Team Collaboration**: Multiple developers can work on different parts simultaneously

## Development Workflow

1. **Frontend Development**: Work in the `frontend/` directory
2. **Backend Development**: Work in the `backend/` directory
3. **Documentation**: Keep docs updated in the `docs/` directory
4. **Assets**: Store images and icons in `frontend/assets/`

## File Naming Conventions

- **CSS**: kebab-case (e.g., `header-styles.css`)
- **JavaScript**: camelCase (e.g., `contactModal.js`)
- **Components**: descriptive names (e.g., `testimonials-carousel.js`)
- **Directories**: lowercase with hyphens (e.g., `js-components/`)

## Getting Started

1. Navigate to the project root
2. Open `frontend/index.html` in your browser
3. For development server: `npm run dev` or `python -m http.server 8000`
4. Start editing files in the appropriate directories 