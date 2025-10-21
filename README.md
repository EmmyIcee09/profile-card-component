Profile Card Component HNG STAGE 1


Live Demo

Live Site: https://emmysprofilecard.netlify.app


A responsive, accessible multi-page portfolio website built for the HNG Frontend program, featuring a profile card, contact form with validation, and an about me page.

Features
Stage 1 Additions
Multi-page Navigation: Smooth navigation between Home, About Me, and Contact pages
Contact Form: Fully validated contact form with real-time error handling
About Me Page: Reflective sections showcasing goals, background, and thoughts
Enhanced Accessibility: Improved keyboard navigation and ARIA labels
All required data-testid attributes for testing

## Project Structure
profile-card/
├── index.html
├── script.js
├── style.css
└── README.md
Stage 0 Foundation
Responsive Profile Card: Works seamlessly across mobile, tablet, and desktop
Dark/Light Theme Toggle: Persistent theme selection with system preference detection
Real-time Clock: Live updating timestamp in milliseconds
Social Links: External links with secure rel attributes
Semantic HTML: Properly structured and accessible markup

Technologies Used
HTML5: Semantic, accessible markup
CSS3: Custom properties, Flexbox, Grid, responsive design
JavaScript: Vanilla JS for interactions and form validation

Requirements Met

Stage 1 Requirements Met
Contact Us Page ✅
Form Fields: Name, email, subject, message with proper data-testid attributes
Validation: Required fields, email format, message length (10+ characters)
Accessibility: Labels, ARIA attributes, keyboard navigation
Success Message: Displayed after valid submission
About Me Page ✅
Required Sections: Bio, goals, confidence areas, future note, extra thoughts
Semantic Structure: <main>, <section>, proper headings
Reflective Content: Personal insights and program goals
General Requirements ✅
Semantic HTML: Proper element usage throughout
Accessibility: WCAG compliant with screen reader support
Responsive Design: Mobile-first approach across all devices
Code Quality: Modular, readable, and consistent code




Required Elements with data-testid Attributes
Stage 0:
test-profile-card
test-user-avatar
test-user-name
test-user-bio
test-user-time
test-user-social-links
test-user-social-twitter
test-user-social-github
test-user-social-linkedin
test-user-hobbies
test-user-dislikes
Stage 1:
test-about-page (main element for About Me page)
test-about-bio
test-about-goals
test-about-confidence
test-about-future-note
test-about-extra
test-contact-page (main element for Contact Us page)
test-contact-name
test-contact-email
test-contact-subject
test-contact-message
test-contact-submit
test-contact-error-name
test-contact-error-email
test-contact-error-subject
test-contact-error-message
test-contact-success

Quick Start
Clone or Download the project files
Open index.html in your web browser
Navigate between pages using the top navigation
Test the contact form validation and theme toggle

Pages Overview
Home (#home)
Profile card with personal information
Social media links
Hobbies and dislikes lists
Real-time clock display

About Me (#about)
Personal background and journey
Program goals and aspirations
Areas of improvement
Reflections and future notes

Contact Us (#contact)
Validated contact form
Real-time error messages
Success confirmation
Accessible form controls

Accessibility Features
Keyboard Navigation: Full tab navigation support
Screen Reader: Proper ARIA labels and descriptions
Color Contrast: WCAG compliant color schemes
Focus Indicators: Clear focus states for all interactive elements
Semantic HTML: Meaningful structure for assistive technologies

Theme System
Light/Dark Modes: Toggle between themes
Persistent Storage: Remembers user preference
System Preference: Respects OS-level theme settings
Smooth Transitions: Pleasant theme switching experience

Form Validation
Real-time Validation: Immediate feedback on blur
Required Fields: All fields must be completed
Email Format: Valid email address verification
Message Length: Minimum 10 character requirement
Error Messages: Clear, accessible error descriptions

Contact
Twitter: @iamthebluebo
GitHub: EmmyIcee09
LinkedIn: Emmanuel Oluwaniran
License
This project is part of the HNG Frontend program. All rights reserved.

Built with ❤️ by Emmanuel Oluwaniran for HNG Frontend Stage 1

How to Run Locally
Quick start commands

git clone https://github.com/EmmyIcee09/profile-card-component

cd profile-card-component

Run with Python (if installed)
python -m http.server 8000

Or open directly
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux

