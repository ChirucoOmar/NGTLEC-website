/* ============================
 SLIDER PRINCIPAL
============================ */
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

/* ============================
 MENU MOBILE
============================ */
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('show');
}

/* ============================
 SLIDER QUEM SOMOS
============================ */
let welcomeSlides = document.querySelectorAll('.welcome-slide');
let welcomeIndex = 0;

setInterval(() => {
  welcomeSlides[welcomeIndex].classList.remove('active');
  welcomeIndex = (welcomeIndex + 1) % welcomeSlides.length;
  welcomeSlides[welcomeIndex].classList.add('active');
}, 4000);
