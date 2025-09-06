// Get the current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = `Last Modified: ${lastModified}`;