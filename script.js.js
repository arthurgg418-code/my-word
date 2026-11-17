// Efeitos leves de entrada; o player do Spotify controla a reprodução.
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.panel, .social-card');
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
});
