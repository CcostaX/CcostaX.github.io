let slideIndices = {
  ARUAV: 1,
  WEB: 1,
  DIMENSIONS: 1,
  NUTRITION: 1,
  DEFENDYOURCASTLEAR: 1,
  SIMPLELAND: 1,
  SHADOW: 1,
  MOOCS: 1,
  CHATBOT: 1,
  TRAINING: 1,
  VIRTUALIZATION: 1
};

// Mostrar todos os slides inicialmente
for (let key in slideIndices) {
  showSlides(slideIndices[key], "mySlides_" + key);
}

function plusSlides(n, name) {
  slideIndices[name] += n;
  showSlides(slideIndices[name], "mySlides_" + name);
}

function currentSlide(n, name) {
  slideIndices[name] = n;
  showSlides(slideIndices[name], "mySlides_" + name);
}

function showSlides(n, slideClass) {
  let slides = document.getElementsByClassName(slideClass);
  let dots = document.getElementsByClassName("dot-" + slideClass);

  console.log(n, slideClass)

  if (slides.length === 0) return;

  if (n > slides.length) slideIndices[slideClass.replace("mySlides_", "")] = 1;
  if (n < 1) slideIndices[slideClass.replace("mySlides_", "")] = slides.length;

  Array.from(slides).forEach(slide => slide.style.display = "none");
  Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));

  slides[slideIndices[slideClass.replace("mySlides_", "")] - 1].style.display = "block";
  dots[slideIndices[slideClass.replace("mySlides_", "")] - 1].className += " active";
}
