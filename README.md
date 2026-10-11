# NovaShop — Modern E-Commerce Web Application

NovaShop is a modern, responsive, single-page e-commerce web application built with vanilla HTML, CSS, and JavaScript. It provides a clean and seamless shopping experience with real-time product filtering, search, interactive product detail modals, and a functional slide-out shopping cart drawer.

## Features

- **Product Catalog**: Browse curated products across various categories (Electronics, Fashion, Home).
- **Instant Search**: Live search filtering by product title, category, or description.
- **Category & Price Filtering**: Filter products by category and adjustable maximum price slider.
- **Sorting Options**: Sort products by price (low to high, high to low), name (A–Z, Z–A), top rated, or featured.
- **Product Detail Modal**: Interactive modal displaying detailed product information, stock availability, star ratings, and custom quantity selection.
- **Shopping Cart Drawer**: Slide-out cart drawer supporting quantity updates, item removal, live total calculations, and checkout simulation.
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices.

## Tech Stack

- **HTML5**: Semantic markup and structure.
- **CSS3**: Custom styling using CSS variables, Flexbox, Grid, backdrop filters, and responsive media queries.
- **JavaScript (ES6+)**: Dynamic DOM manipulation, state management, and event handling without external libraries or frameworks.
- **Typography**: Inter font via Google Fonts.

## Project Structure

```text
.
├── index.html   # Main HTML structure and layout
├── style.css    # Global styling, layout grid, theme variables, and responsive design
└── script.js   # Application logic, data model, state management, and UI rendering
```

## Getting Started

Because NovaShop is built using vanilla web technologies, no build steps, bundlers, or server dependencies are required.

### Running Locally

1. Clone or download the repository to your local machine.
2. Open `index.html` directly in any modern web browser (e.g. Chrome, Firefox, Safari, Edge).

Alternatively, you can serve the project using a simple local development server, such as Python's HTTP server or Live Server in VS Code:

```bash
# Using Python 3
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your web browser.
