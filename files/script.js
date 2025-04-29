/**
 * Random Quote Generator - Main Script
 * Handles fetching random quotes from the Quotable API
 * and updating the DOM with the retrieved data.
 */

/**
 * Fetches a random quote from the Quotable API and updates the DOM
 */
async function getQuote() {
    try {
        // Show loading state
        displayLoadingState(true);

        // Clear any previous error
        clearError();

        // Fetch data from the API
        const response = await fetch("https://api.quotable.io/random");

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the DOM with the quote content and author
        document.getElementById("quote").innerText = `"${data.content}"`;
        document.getElementById("author").innerText = `- ${data.author}`;

        // Hide loading state
        displayLoadingState(false);
    } catch (error) {
        // Handle any errors that occur during fetch
        console.error("Error fetching quote:", error);
        showError("Failed to load quote. Please try again.", error);
        displayLoadingState(false);
    }
}

/**
 * Displays or hides loading state on the button
 * @param {boolean} isLoading - Whether data is being loaded
 */
function displayLoadingState(isLoading) {
    const button = document.getElementById("generate-btn");
    if (isLoading) {
        button.innerText = "Loading...";
        button.disabled = true;
    } else {
        button.innerText = "Generate Quote";
        button.disabled = false;
    }
}

/**
 * Shows a user-friendly error message and a "Show More" button for detailed error
 * @param {string} message - Friendly message to display
 * @param {Error} error - The error object caught
 */
function showError(message, error) {
    const errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML = `
        <div class="error-message">${message}</div>
        <button id="show-more-btn" class="show-more-btn">Show Details</button>
        <div id="error-details" class="error-details hidden">${error.message}</div>
    `;

    document.getElementById("show-more-btn").addEventListener("click", () => {
        document.getElementById("error-details").classList.toggle("hidden");
    });
}

/**
 * Clears any existing error messages
 */
function clearError() {
    const errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML = "";
}

/**
 * Initialize the application when the DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to the generate button
    document.getElementById("generate-btn").addEventListener("click", () => {
        getQuote();
    });

    // Fetch an initial quote when the page loads
    getQuote();
});
