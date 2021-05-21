$(document).ready(function () {
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

  // Модальное окно
  const modalButton = $("[data-toggle=modal]");
  const closeMobalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeMobalButton.on("click", closeModal);

  $(this).keydown(function (key) {
    if (key.which === 27) closeModal(key);
  });

  function openModal() {
    // console.log($(this).attr("data-href"));
    // const modalOverlay = $(".modal__overlay");
    // const modalDialog = $(".modal__dialog");
    // modalOverlay.addClass("modal__overlay--visible");
    // modalDialog.addClass("modal__dialog--visible");
    const targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
