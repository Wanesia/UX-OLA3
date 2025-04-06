function showConfirmation() {
    const popup = document.getElementById('newsletter-confirmation');
    
    // Show the popup
    popup.removeAttribute('hidden');
    
    // Hide after 2 seconds
    setTimeout(() => {
      popup.setAttribute('hidden', 'true');
    }, 2000);
  }
  
  document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showConfirmation();
  });