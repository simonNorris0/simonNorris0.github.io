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
  updateLastUpdated('updateId');
});
