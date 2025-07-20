// Fade-in sections on scroll using IntersectionObserver

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section .content');

  const observerOptions = {
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
});


// Collapsible semester toggle
function toggleSemester(button) {
  const semesterContent = button.nextElementSibling;
  semesterContent.classList.toggle('open');
}
