let slideIndex = 1;
showSlides(slideIndex, "mySlides_ARUAV");
showSlides(slideIndex, "mySlides_WEB");
showSlides(slideIndex, "mySlides_DIMENSIONS");
showSlides(slideIndex, "mySlides_NUTRITION");
showSlides(slideIndex, "mySlides_DEFENDYOURCASTLEAR");
showSlides(slideIndex, "mySlides_SIMPLELAND");

function plusSlides(n, name) {
  slideIndex += n;
  showSlides(slideIndex, "mySlides_" + name);
}

function currentSlide(n, name) {
  slideIndex = n;
  showSlides(slideIndex, "mySlides_" + name);
}

function showSlides(n, slideClass) {
  let slides = document.getElementsByClassName(slideClass);
  let dots = document.getElementsByClassName("dot-" + slideClass);
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  Array.from(slides).forEach(slide => slide.style.display = "none");
  Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
