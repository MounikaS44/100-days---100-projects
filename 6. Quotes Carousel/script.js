// theme: earth / sky / universe / cloud / stars / moon / sun — each with its own accent colour
const quotes = [
  {
    quote: "We are made of star-stuff.",
    name: "Carl Sagan",
    role: "astronomer",
    theme: "universe"
  },
  {
    quote: "The sky is not the limit. Your mind is.",
    name: "Toba Beta",
    role: "author",
    theme: "sky"
  },
  {
    quote: "The earth does not belong to us; we belong to the earth.",
    name: "Chief Seattle",
    role: "attributed",
    theme: "earth"
  },
  {
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    name: "Oscar Wilde",
    role: "writer",
    theme: "stars"
  },
  {
    quote: "Every cloud has a silver lining.",
    name: "English proverb",
    role: "folk wisdom",
    theme: "cloud"
  },
  {
    quote: "The moon is a friend for the lonesome to talk to.",
    name: "Carl Sandburg",
    role: "poet",
    theme: "moon"
  },
  {
    quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    name: "Walt Whitman",
    role: "poet",
    theme: "sun"
  }
];

const themeColors = {
  earth: 'var(--earth)',
  sky: 'var(--sky)',
  universe: 'var(--universe)',
  cloud: 'var(--cloud)',
  stars: 'var(--stars)',
  moon: 'var(--moon)',
  sun: 'var(--sun)'
};

const stage = document.getElementById('stage');
const dotsWrap = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;
let autoplayTimer = null;
const AUTOPLAY_MS = 6500;

function buildCards(){
  stage.innerHTML = '';
  quotes.forEach((q) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="badge" style="color:${themeColors[q.theme]}">
        <span class="dot" style="background:${themeColors[q.theme]}"></span>
        ${q.theme}
      </div>
      <p class="quote">&ldquo;${q.quote}&rdquo;</p>
      <div class="attribution"><span class="name">${q.name}</span> · ${q.role}</div>
    `;
    stage.appendChild(card);
  });
}

function buildDots(){
  dotsWrap.innerHTML = '';
  quotes.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot-btn';
    dot.setAttribute('aria-label', `Go to quote ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
}

function render(){
  const cards = stage.querySelectorAll('.card');
  const dots = dotsWrap.querySelectorAll('.dot-btn');
  const total = cards.length;

  cards.forEach((card, i) => {
    card.classList.remove('active', 'prev', 'next');
    if (i === current) {
      card.classList.add('active');
    } else if (i === (current - 1 + total) % total) {
      card.classList.add('prev');
    } else if (i === (current + 1) % total) {
      card.classList.add('next');
    }
  });

  dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}

function goTo(index){
  current = (index + quotes.length) % quotes.length;
  render();
  restartAutoplay();
}

function next(){ goTo(current + 1); }
function prev(){ goTo(current - 1); }

function restartAutoplay(){
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(next, AUTOPLAY_MS);
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
});

const wrap = document.querySelector('.wrap');
wrap.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
wrap.addEventListener('mouseleave', restartAutoplay);
wrap.addEventListener('focusin', () => clearInterval(autoplayTimer));
wrap.addEventListener('focusout', restartAutoplay);

let touchStartX = 0;
stage.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
stage.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
});

buildCards();
buildDots();
render();
restartAutoplay();

// --- twinkling starfield background ---
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.floor((canvas.width * canvas.height) / 9000);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.3 + 0.3,
    baseAlpha: Math.random() * 0.6 + 0.25,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.015 + 0.005
  }));
}

function drawStars(t){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#E8ECFB';
  stars.forEach((s) => {
    const twinkle = prefersReducedMotion ? s.baseAlpha : s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.25;
    ctx.globalAlpha = Math.max(0, Math.min(1, twinkle));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  if (!prefersReducedMotion) requestAnimationFrame(drawStars);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
requestAnimationFrame(drawStars);
