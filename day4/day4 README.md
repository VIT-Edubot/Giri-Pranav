# LaunchDarkly Feedback Form - Responsive Design Assignment

## Overview
This project focuses on improving the **LaunchDarkly Employee Portal's Feedback Form** by implementing **CSS Flexbox** and **responsive design** techniques. The goal is to ensure the form layout is optimized for both desktop and mobile devices.

## Features
- **Responsive Form Layout**: Uses Flexbox to align and structure form elements.
- **Navigation Bar at the Top**: Styled navigation positioned above the header.
- **Mobile-Friendly Adjustments**: Includes media queries for better usability on smaller screens.
- **Improved UI/UX**: Modern design with well-spaced elements and consistent styling.
- **Centered Media Elements**: Video and audio sections are aligned properly.

## Technologies Used
- **HTML5**: Structuring the feedback form.
- **CSS3 (Flexbox & Media Queries)**: Styling and making the form responsive.

## Implementation Details
- **Flexbox Layout**:
  - Used `display: flex` for form structure.
  - Applied `flex-direction: column;` for better alignment.
  - `gap: 15px;` for proper spacing between fields.
- **Navigation Bar Styling**:
  - Positioned at the top of the page.
  - New background color: `#1E2A38` (dark navy blue for a professional look).
- **Responsive Adjustments**:
  - Input fields take **full width** on smaller screens.
  - Navigation and heading switch places for better visual hierarchy.
  - Radio buttons are aligned properly next to their labels.

## Challenges & Solutions
- **Issue**: Radio buttons were misaligned.
  - **Solution**: Used `display: flex; align-items: center; gap: 10px;` to fix positioning.
- **Issue**: Form fields overflowing on smaller screens.
  - **Solution**: Applied `width: 100%` and adjusted padding for responsiveness.
- **Issue**: Heading and navbar needed to be swapped.
  - **Solution**: Adjusted HTML structure and CSS positioning.

## How to Run
1. Open `feedback_form.html` in any modern web browser.
2. Ensure `styles.css` is in the same directory for proper styling.


