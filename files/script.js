async function getQuote() {
    try {
        // Try fetching directly from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`Failed to fetch from Quotable API: ${response.status}`);
        }

        const data = await response.json();

        // Update the DOM with the quote content and author
        document.getElementById("quote").innerText = `"${data.content}"`;
        document.getElementById("author").innerText = `- ${data.author}`;
    } catch (error) {
        console.error("Direct fetch failed, using proxy:", error);

        // Fallback to proxy server if direct fetch fails
        const proxyUrl = `/api/corserrorfix?url=https://api.quotable.io/random`;
        try {
            const proxyResponse = await fetch(proxyUrl);
            
            if (!proxyResponse.ok) {
                throw new Error(`Failed to fetch from proxy: ${proxyResponse.status}`);
            }

            const proxyData = await proxyResponse.json();
            // Update the DOM with the quote content and author from proxy
            document.getElementById("quote").innerText = `"${proxyData.content}"`;
            document.getElementById("author").innerText = `- ${proxyData.author}`;
        } catch (error) {
            console.error("Proxy fetch failed:", error);
            document.getElementById("quote").innerText = "Failed to load quote. Please try again.";
            document.getElementById("author").innerText = "";
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate-btn").addEventListener("click", () => {
        getQuote();
    });

    // Fetch an initial quote when the page loads
    getQuote();
});
