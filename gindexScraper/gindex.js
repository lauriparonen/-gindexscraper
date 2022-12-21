const request = require('request-promise');
const cheerio = require('cheerio');

// Url to the product
const url = 'https://www.alko.fi/tuotteet/319027/Gambina-muovipullo/';

// Get the current date
const date = new Date();

// Function to get the price
request(url, (error, response, html) => {
    if(!error && response.statusCode == 200) {
        // Load the html to cheerio
        const $ = cheerio.load(html);
        
        // Variable to get the price element
        const priceElement = $('.js-price-container.price-wrapper.price.module-price');

        // Variable to get the price in the correct format
        const price = priceElement.text().slice(0, -2) + ',' + priceElement.text().slice(-2);
        
        // Log the date, time and price to the console
        console.log(`Date: ${date.toDateString()}`);
        console.log(`Time: ${date.toTimeString()}`);
        console.log("The current price of a bottle of Gambina is", price, "€");
    }
});