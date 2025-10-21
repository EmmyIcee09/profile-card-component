# Profile Card Component HNG STAGE 0


## 🚀 Live Demo

Live Site: https://emmysprofilecard.netlify.app 

A responsive, accessible profile card component built with semantic HTML, modern CSS, and vanilla JavaScript.

## Features

- ✅ Semantic HTML structure
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Accessibility compliant (keyboard navigation, ARIA labels)
- ✅ Live updating time in milliseconds
- ✅ All required data-testid attributes for testing
- ✅ Social links with proper security attributes
- ✅ Bonus: Avatar upload functionality
- ✅ Bonus: Light and Dark theme Toogle


## Project Structure
profile-card/
├── index.html
├── script.js
├── style.css
└── README.md

## Requirements Met

### Required Elements with data-testid Attributes
- [x] `test-profile-card` - Root container
- [x] `test-user-name` - User name
- [x] `test-user-bio` - Short biography
- [x] `test-user-time` - Current time in milliseconds
- [x] `test-user-avatar` - Profile picture
- [x] `test-user-social-links` - Social links container
- [x] `test-user-social-*` - Individual social links (twitter, github, linkedin)
- [x] `test-user-hobbies` - Hobbies list
- [x] `test-user-dislikes` - Dislikes list

### Semantic HTML
- [x] `<article>` for main card
- [x] `<header>` for profile header
- [x] `<figure>` and `<img>` for avatar
- [x] `<nav>` for social links
- [x] `<section>` for hobbies and dislikes
- [x] `<ul>` for all lists

### Accessibility
- [x] Keyboard navigation support
- [x] Focus indicators
- [x] ARIA labels where needed
- [x] Semantic heading structure
- [x] Proper alt text for images

### Responsive Design
- [x] Mobile-first approach
- [x] Grid layout that adapts to screen size
- [x] Flexible sizing and spacing
- [x] Readable typography at all screen sizes

## How to Run Locally
# Quick start commands
git clone https://github.com/EmmyIcee09/profile-card-component
cd profile-card-component

# Run with Python (if installed)
python -m http.server 8000

# Or open directly
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux

