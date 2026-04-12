'use strict';

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');

  if (slides.length === 0) {

    return;
  }

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

const element1 = document.getElementById('prev-img');

element1.addEventListener('click', (e) => {
  e.preventDefault();
  plusSlides(-1);
});

const element2 = document.getElementById('next-img');

element2.addEventListener('click', (e) => {
  e.preventDefault();
  plusSlides(1);
});
