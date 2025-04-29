const https = require('https');

const agent = new https.Agent({  
    rejectUnauthorized: false  // Disable SSL certificate validation (use with caution!)
});

module.exports = async (req, res) => {
    try {
        const targetUrl = req.query.url;
        if (!targetUrl) {
            return res.status(400).json({ error: 'URL parameter is missing.' });
        }

        // Use the custom agent with fetch to bypass certificate validation
        const response = await fetch(targetUrl, { agent });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch data from target API.' });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ error: 'Something went wrong while fetching the data.' });
    }
};
