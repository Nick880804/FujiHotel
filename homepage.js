//TITLE
$("h1").delay(1000).fadeTo(1000, 1);
$(".letgo").delay(1800).fadeTo(1000, 1);

// ROOM INTRO

$("#KUKI").css("display", "none");
$("#TOMOE-btn").css("background-color", "#112e47");

$("#TOMOE-btn").on("click", function () {
  if ($("#TOMOE").css("display") == "none") {
    $(".Room-btn button").css("background-color", "rgba(18, 20, 20, 0.5)");
    $(".Room-btn button:hover").css("background-color", "#112e47");
    $(this).css("background-color", "#112e47");
    $(".tabcontent").css("display", "none");
    $("#TOMOE").fadeIn(500);
  }
});

$("#KUKI-btn").on("click", function () {
  if ($("#KUKI").css("display") == "none") {
    $(".Room-btn button").css("background-color", "rgba(18, 20, 20, 0.5)");
    $(this).css("background-color", "#112e47");
    $(".tabcontent").css("display", "none");
    $("#KUKI").fadeIn(500);
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > $(".mySlides").length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  for (let j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > $(".mySlides2").length) {
    slideIndex2 = 1;
  }
  for (let j = 0; j < dots2.length; j++) {
    dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active";
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}
