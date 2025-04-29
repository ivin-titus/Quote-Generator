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
        // Try fetching directly from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        // Update the DOM with the quote content and author
        document.getElementById("quote").innerText = `"${data.content}"`;
        document.getElementById("author").innerText = `- ${data.author}`;
    } catch (error) {
        console.error("Direct fetch failed, using proxy:", error);

        // Fallback to proxy server if direct fetch fails
        const proxyUrl = `/api/corserrorfix?url=https://api.quotable.io/random`;
        const proxyResponse = await fetch(proxyUrl);
        const proxyData = await proxyResponse.json();

        // Update the DOM with the quote content and author from proxy
        document.getElementById("quote").innerText = `"${proxyData.content}"`;
        document.getElementById("author").innerText = `- ${proxyData.author}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate-btn").addEventListener("click", () => {
        getQuote();
    });

    // Fetch an initial quote when the page loads
    getQuote();
});


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