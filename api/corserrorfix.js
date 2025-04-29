// Vercel serverless function to proxy the Quotable API and handle CORS
const fetch = require("node-fetch");

module.exports = async (req, res) => {
    try {
        // Extract the target URL from the query string (after '?')
        const targetUrl = req.query.url;

        if (!targetUrl) {
            return res.status(400).json({ error: 'URL parameter is missing.' });
        }

        // Fetch data from the target URL
        const response = await fetch(targetUrl);
        const data = await response.json();

        // Send the data back to the client
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong while fetching the data.' });
    }
};
