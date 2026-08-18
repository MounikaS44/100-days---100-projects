 const faqItems = document.querySelectorAll('.faq-item');
 
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
 
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
 
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      
      if (!isOpen) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });