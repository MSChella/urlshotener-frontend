// src/components/URLManagement.js
import React from 'react';

// Function to generate a random short code
const generateShortCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6;
    let shortCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortCode += characters[randomIndex];
    }
    return shortCode;
};

// Component for URL Management
const URLManagement = () => {
    // State to hold the list of created URLs
    const [urls, setUrls] = useState([]);

    // Function to handle URL creation
    const createURL = (originalURL) => {
        const shortCode = generateShortCode();
        const newURL = { originalURL, shortCode };
        setUrls([...urls, newURL]);
    };

    return (
        <div>
            <h2>URL Management</h2>
            {/* Form to create new URLs */}
            <form onSubmit={(e) => {
                e.preventDefault();
                const inputURL = e.target.elements.urlInput.value;
                createURL(inputURL);
                e.target.elements.urlInput.value = ''; // Clear input field
            }}>
                <input type="text" name="urlInput" placeholder="Enter URL" />
                <button type="submit">Create Short URL</button>
            </form>
            {/* Display created URLs */}
            <ul>
                {urls.map((url, index) => (
                    <li key={index}>
                        <p>Original URL: {url.originalURL}</p>
                        <p>Short URL: {`${window.location.origin}/${url.shortCode}`}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default URLManagement;
