'use strict';

/**
 * add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header & back top btn active
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Video Play functionality
 */
const videoCard = document.querySelector(".video-card");
const playButton = document.querySelector(".play-btn");
const video = document.getElementById("fitnessVideo");

const playVideo = function () {
  // Hide the background image and play button, then show and play the video
  videoCard.style.backgroundImage = "none";
  playButton.style.display = "none";
  video.style.display = "block";  // Show the video element
  video.play();  // Play the video
}

// Add event listener to the video card and play button
addEventOnElem([videoCard, playButton], "click", playVideo);
