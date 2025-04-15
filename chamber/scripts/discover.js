document.addEventListener('DOMContentLoaded', () => {
    fetch('data/items.json')
      .then(response => response.json())
      .then(data => displayCards(data));
  
    showVisitMessage();
  });
  
  function displayCards(items) {
    const container = document.querySelector('.cards-container');
    items.forEach(item => {
      const card = document.createElement('section');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure><img src="${item.image}" alt="${item.name}" width="300" height="200" /></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      container.appendChild(card);
    });
  }
  
  function showVisitMessage() {
    const messageEl = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
  
    if (!lastVisit) {
      messageEl.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const diff = now - Number(lastVisit);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      if (days < 1) {
        messageEl.textContent = "Back so soon! Awesome!";
      } else {
        messageEl.textContent = `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
      }
    }
  
    localStorage.setItem('lastVisit', now);
  }