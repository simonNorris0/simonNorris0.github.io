function sortBlogArchive() {
  const table = document.querySelector("table");
  if (!table) return;

  const tbody = table.querySelector("tbody") || table;
  // get all rows except the first header row
  const rows = Array.from(tbody.querySelectorAll("tr")).slice(1);

  rows.sort((a, b) => {
    // column index 2 is 'Date Published'
    const dateA = new Date(a.cells[2].textContent.trim());
    const dateB = new Date(b.cells[2].textContent.trim());
    
    // sort newest to oldest
    return dateB - dateA;
  });

  // re-append sorted rows to the table
  rows.forEach(row => tbody.appendChild(row));
}

// trigger the function automatically once the HTML is parsed
document.addEventListener("DOMContentLoaded", sortBlogArchive);
