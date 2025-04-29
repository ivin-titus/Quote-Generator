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

        // First try to fetch the quote directly (no proxy)
        const response = await fetch("https://api.quotable.io/random");

        // Check if the response is valid (status 200)
        if (!response.ok) {
            throw new Error("Failed to fetch quote from API.");
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the DOM with the quote content and author
        document.getElementById("quote").innerText = `"${data.content}"`;
        document.getElementById("author").innerText = `- ${data.author}`;

        // Hide loading state
        displayLoadingState(false);
    }
    catch (error) {
        console.error("Error fetching quote directly:", error);

        // If direct fetch fails, use the proxy as a fallback   
        try {
            const proxyResponse = await fetch(`/api/corserrorfix?url=https://api.quotable.io/random`);

            if (!proxyResponse.ok) {
                throw new Error("Failed to fetch quote from proxy.");
            }

            // Parse the JSON response from the proxy
            const proxyData = await proxyResponse.json();

            // Update the DOM with the quote content and author
            document.getElementById("quote").innerText = `"${proxyData.content}"`;
            document.getElementById("author").innerText = `- ${proxyData.author}`;

            // Hide loading state
            displayLoadingState(false);
        }
        catch (proxyError) {
            console.error("Error fetching quote from proxy:", proxyError);
            document.getElementById("quote").innerText = "Failed to load quote. Please try again.";
            document.getElementById("author").innerText = "";
            displayLoadingState(false);
        }
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
