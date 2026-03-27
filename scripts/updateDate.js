// author: Simon Norris
// author: https://github.com/simonNorris0
//   date: March 24, 2026
//
// Script purpose: targets an element in the site footer of the html 
//                 pages across the website and replaces the text 
//                 content of that element with the html pages last 
//                 modified date. Automates the process of keeping 
//                 the 'last updated' date current.
//
// function to find the target element and inject the last modified 
// date from the webpage document
const updateLastUpdated = (elementId) => {
  const targetElement = document.getElementById(elementId);

  if (targetElement) {
    // document.lastModified returns a string
    const lastUpdated = new Date(document.lastModified);
    // formatting:
    const formattedDate = lastUpdated.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    targetElement.textContent = formattedDate;
  }
};

// run the function once HTML is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateLastUpdated('updateId'); // target element: "updateId"
});
