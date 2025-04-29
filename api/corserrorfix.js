module.exports = async (req, res) => {
    try {
        // Extract the target URL from the query string (after '?')
        const targetUrl = req.query.url;

        if (!targetUrl) {
            return res.status(400).json({ error: 'URL parameter is missing.' });
        }

        // Fetch data from the target URL using native fetch (no need for node-fetch)
        const response = await fetch(targetUrl);

        // Check if the response is successful (status 200)
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch data from target API.' });
        }

        // Parse the JSON response
        const data = await response.json();

        // Send the data back to the client
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ error: 'Something went wrong while fetching the data.' });
    }
};
