let currentSlide = 0;
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = dots.length;

function showSlide(index) {
  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;

  slides.style.transform = `translateX(-${index * 100}%)`;
  slides.style.transition = "transform 0.4s ease";

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

let startX = 0;
let isDragging = false;

slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slides.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const moveX = e.touches[0].clientX;
  const diff = startX - moveX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      showSlide(currentSlide + 1);
    } else {
      showSlide(currentSlide - 1);
    }
    isDragging = false;
  }
});

slides.addEventListener("touchend", () => {
  isDragging = false;
});

// === ANIMAÇÃO DE NÚMEROS ===
function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");
  numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100) || 1;
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      if (start >= total) {
        numero.innerText = total;
        clearInterval(timer);
      } else {
        numero.innerText = start;
      }
    }, 25 + 25 * Math.random());
  });
}
initAnimaNumeros();
