const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const navWrapper = document.querySelector(".nav-wrapper");

const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
  navWrapper.classList.toggle("bg-primary-400");
  iconHamburger.classList.toggle("display-none");
  iconClose.classList.toggle("display-none");
});

// const imgOne = document.getElementById("img-1");
// const imgTwo = document.getElementById("img-2");
// const imgThree = document.getElementById("img-3");
// const imgFour = document.getElementById("img-4");
// const imgFive = document.getElementById("img-5");
// const imgSix = document.getElementById("img-6");
// const imgSeven = document.getElementById("img-7");
// const imgEight = document.getElementById("img-8");
