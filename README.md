# Random Quote Generator

A simple web application that fetches and displays random quotes using the Quotable API. This project demonstrates basic API fetching using JavaScript's Fetch API and showcases a modern UI with a glassmorphism effect.

![Random Quote Generator Screenshot](/files/demo.avif)

## Features

- Fetches random quotes from an external API
- Sleek UI with glassmorphism effect
- Responsive design for various screen sizes
- Loading state handling
- Error handling for failed API requests 

## Live Demo

[View Demo](https://quote-generator-ivin.vercel.app/)

> **Note:** The live demo may experience CORS errors on some devices. For the best experience, we recommend running the project locally. We welcome contributions to help resolve this issue!

## Technologies Used

- HTML5
- CSS3 (with glassmorphism effects)
- JavaScript (ES6+)
- Fetch API
- [Quotable API](https://quotable.io/)

## Project Structure

```
Quote-Generator/
├── api/
│   └── corserrorfix.js      # Server middleware to handle CORS errors
├── files/
│   ├── script.js            # JavaScript code: Logic behind page working
│   └── style.css            # CSS code: Page styles 
├── index.html               # HTML file: Page structure
├── README.md                # Project documentation
└── LICENSE                  # MIT License
```

## How It Works

1. **API Integration**: The application uses the Fetch API to make an asynchronous GET request to the Quotable API endpoint (`https://api.quotable.io/random`).

2. **Promise Handling**: Promises returned by the Fetch API are handled using async/await syntax for cleaner code.

3. **DOM Manipulation**: The fetched quote and author information are dynamically inserted into the page.

4. **Event Listeners**: The application listens for the DOM content loaded event and button click events to trigger quote fetching.

5. **Error Handling**: Try/catch blocks are used to handle potential errors during the API fetch process.

## Code Breakdown

### HTML (index.html)

The HTML provides the basic structure of the application:
- Container for the quote and author text
- Button to generate new quotes
- Links to external CSS and JavaScript files

### CSS (style.css)

The CSS file defines the visual appearance of the application:
- Implements a glassmorphism effect (translucent, blurred background)
- Creates a responsive layout
- Applies hover and active state animations
- Sets up the background image

### JavaScript (script.js)

The JavaScript file handles the functionality:
- `getQuote()`: Asynchronous function to fetch and display a random quote
- `displayLoadingState()`: Updates the UI during loading
- Event listeners to handle user interactions

### CORS Error Fix (api/corserrorfix.js)

This middleware helps resolve Cross-Origin Resource Sharing (CORS) errors that may occur when fetching quotes from the external API.

## Learning Points

This project demonstrates several important web development concepts:

1. **API Fetching**: How to use the Fetch API to retrieve data from external sources
2. **Asynchronous JavaScript**: Using async/await for cleaner promise handling
3. **Error Handling**: Implementing try/catch blocks for robust error management
4. **DOM Manipulation**: Dynamically updating page content
5. **Modern CSS Effects**: Implementing glassmorphism and responsive design
6. **Event Handling**: Setting up event listeners for user interaction

## Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/ivin-titus/Quote-Generator
   ```

2. Navigate to the project directory:
   ```
   cd quote-generator
   ```

3. Open `index.html` in your web browser.

## Customization

You can customize this project by:

1. **Changing the background**: Modify the background image URL in the CSS file
2. **Styling adjustments**: Update colors, fonts, and sizing in the CSS file
3. **Additional features**: Add quote categories, favorites functionality, or social sharing options

## Contributing

We welcome contributions to this project! Here are some ways you can help:

1. **Fix CORS issues**: Help improve the CORS error handling to make the demo work across all devices
2. **Add new features**: Implement quote categories, social sharing, or favorites
3. **Improve accessibility**: Make the application more accessible to all users
4. **Fix bugs**: Address any issues you find while using the application

To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Quotable API](https://quotable.io/) for providing the quotes data
- [Unsplash](https://unsplash.com/) for the background image
- [Google Fonts](https://fonts.google.com/) for the Poppins font family