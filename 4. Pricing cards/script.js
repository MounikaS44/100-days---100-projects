// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
const productsDropdown = document.getElementById('productsDropdown');
const productsToggle = document.getElementById('productsToggle');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
  if (!navLinks.classList.contains('open') && productsDropdown) {
    productsDropdown.classList.remove('open');
    if (productsToggle) productsToggle.setAttribute('aria-expanded', 'false');
  }
});

// Products dropdown in hamburger / nav
if (productsToggle && productsDropdown) {
  productsToggle.addEventListener('click', (e) => {
    const isMobile = window.matchMedia('(max-width: 680px)').matches;
    if (isMobile) {
      e.preventDefault();
      const isOpen = productsDropdown.classList.toggle('open');
      productsToggle.setAttribute('aria-expanded', String(isOpen));
    } else {
      window.location.hash = 'products';
    }
  });
}

// Close menu when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('open');
    navLinks.classList.remove('open');
    if (productsDropdown) productsDropdown.classList.remove('open');
    if (productsToggle) productsToggle.setAttribute('aria-expanded', 'false');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) { item.classList.add('active'); }
  });
});

// Contact form (front-end only demo)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.classList.add('show');
  contactForm.reset();
  setTimeout(() => formNote.classList.remove('show'), 5000);
});

// Add to cart mini feedback
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const original = btn.textContent;
    btn.textContent = 'Added';
    setTimeout(() => { btn.textContent = original; }, 1400);
  });
});
