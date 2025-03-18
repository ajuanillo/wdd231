// select the DOM elements for output

const year = document.querySelector("#year");
const lastmod = document.querySelector("#lastmodified");

// use the date object
const today = new Date();

//Updating
year.innerHTML = `${today.getFullYear()}`;
lastmod.innerHTML = `Last modification <span class="highlight">${document.lastModified}</span>`;