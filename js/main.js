const hotelSlider = new Swiper(".slider-container", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  // Keyboard Control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

// Мобильное меню
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("CLICK");
  document.querySelector(".navbar-button").classList.toggle("navbar-button__visible");
});
