// Grab elements
const galleryImgs = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');

let currentIndex = 0;

// Open lightbox on image click
galleryImgs.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  updateLightboxImage();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function updateLightboxImage() {
  const img = galleryImgs[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  counter.textContent = `${currentIndex + 1} / ${galleryImgs.length}`;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
  updateLightboxImage();
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryImgs.length;
  updateLightboxImage();
}

// Button events
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Click outside image closes lightbox
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});
