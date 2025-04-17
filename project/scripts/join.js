document.getElementById('timestamp').value = new Date().toISOString();

    // Close modals
    document.querySelectorAll('.modal .close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.closest('.modal').style.display = 'none';
      });
    });

    // Open modals
    document.querySelectorAll('.card a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.querySelector(link.getAttribute('href'));
        modal.style.display = 'block';
      });
    });