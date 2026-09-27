// Mobile nav toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('header.top nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Scroll-spy: highlight the nav link for the section in view
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header.top nav a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px' }
);

sections.forEach(section => observer.observe(section));
