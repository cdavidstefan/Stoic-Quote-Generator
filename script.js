const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const instaBtn = document.getElementById('instagram');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes = [];

// Show Loading
function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // CHeck if Author field is blanck and replace it with 'Unknown';
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    
    // Check the Quote length to determine styling
    if (quote.text.length > 90) {
        quoteText.classList.add('long-quote');
    }   else {
        quoteText.classList.remove('long-quote');
    }
    
    // Set quote, hide loader
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

// Get quotes from API

// async function getQuotes () {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch(error) {
//         // Catch Error Here
//     }
// }

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

function instaShare() {
    // const instaUrl = ` instagram intent? api? here! `;
    window.open(facebookUrl, '_blank');
}

function facebookShare() {
    // const facebookUrl = ` facebook intent? api? here! `;
    window.open(facebookUrl, '_blank');
}

// Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
instaBtn.addEventListener('click', instaShare);
facebookBtn.addEventListener('click', facebookShare);



// On Load
// getQuotes();

newQuote();