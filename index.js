let slideIndex = 1;
let slideInterval;

document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
  startAutoSlide();
});

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
  startAutoSlide();
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
  startAutoSlide();
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000); // 5000 мс = 5 секунд. Поставь 7000 для 7 секунд.
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

