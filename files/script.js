/**
 * Random Quote Generator - Main Script
 * This script handles fetching random quotes from the Quotable API
 * and updating the DOM with the retrieved data.
 */

/**
 * Fetches a random quote from the Quotable API and updates the DOM
 */
async function getQuote() {
    try {
        // Show loading state
        displayLoadingState(true);
        
        // Fetch data from the API
        const response = await fetch("https://api.allorigins.win/raw?url=https://api.quotable.io/random");
        
        // Parse the JSON response
        const data = await response.json();
        
        // Update the DOM with the quote content and author
        document.getElementById("quote").innerText = `"${data.content}"`;
        document.getElementById("author").innerText = `- ${data.author}`;
        
        // Hide loading state
        displayLoadingState(false);
    }
    catch (error) {
        // Handle any errors that occur during fetch
        console.error("Error fetching quote:", error);
        document.getElementById("quote").innerText = "Failed to load quote. Please try again.";
        document.getElementById("author").innerText = "";
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