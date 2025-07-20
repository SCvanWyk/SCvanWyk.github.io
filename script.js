// Fade-in sections on scroll using IntersectionObserver

document.addEventListener('DOMContentLoaded', () => {
    // === Fade-in on scroll ===
    const fadeInElements = document.querySelectorAll('.fade-in, .section .content');
    const fadeObserverOptions = {
      threshold: 0.15,
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, fadeObserverOptions);

    fadeInElements.forEach(el => fadeObserver.observe(el));

    // === Collapsible semester toggles ===
    const toggleButtons = document.querySelectorAll('.semester-toggle');

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('open');
      });
    });
  });
