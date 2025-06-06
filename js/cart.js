document.addEventListener('DOMContentLoaded', () => {
  // Toggle accordion
  document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const parent = button.closest('.accordion-item');
      if (parent) {
        parent.classList.toggle('active');
      }
    });
  });

  // Confirm button click
  const confirmBtn = document.querySelector('.confirm-btn');
  const overlay = document.getElementById('confirmation-overlay');
  const closeBtn = document.getElementById('close-overlay');

  if (confirmBtn && overlay && closeBtn) {
    confirmBtn.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  }
});
