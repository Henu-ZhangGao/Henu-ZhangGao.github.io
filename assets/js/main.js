$(document).ready(function () {
  for (let i = 0; i < slides.length; i++) {
    $(".mySlides > img")[i].src = "../../assets/img/img" + i + ".jpg";
  }
}
)
let slideIndex = 0;
let slides = $(".mySlides");
let slidePreviousIndex;
showSlides(slideIndex + 1);
// Next/previous controls
function plusSlides(n) {
  slidePreviousIndex = slideIndex;
  slideIndex = (slides.length + slideIndex + n) % slides.length;
  showSlides(slidePreviousIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slidePreviousIndex = slideIndex;
  slideIndex = n - 1;
  showSlides(slidePreviousIndex);
}

function showSlides(n) {
  let dots = $(".dot");
  slides.eq(n).fadeOut("fast", function () {
    slides.eq(slideIndex).fadeIn("fast");
  });
  dots[n].className = dots[n].className.replace(" active", " ");
  dots[slideIndex].className += " active";
}