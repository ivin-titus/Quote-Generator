const fetch = require("node-fetch");

module.exports = async (req, res) => {
    try {
        const targetUrl = req.query.url;

        if (!targetUrl) {
            return res.status(400).json({ error: 'URL parameter is missing.' });
        }

        // Log incoming request URL
        console.log("Fetching data from URL:", targetUrl);

        // Fetch data from the target URL
        const response = await fetch(targetUrl);
        
        // Check if the response status is okay (200 OK)
        if (!response.ok) {
            console.log('Failed to fetch, status:', response.status);
            return res.status(response.status).json({ error: 'Failed to fetch data from the target API.' });
        }

        const data = await response.json();

        // Log the data being returned from the target API
        console.log('Fetched data:', data);

        // Send the data back to the client
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong while fetching the data.' });
    }
};
