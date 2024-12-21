// custom scripts 
const responsive_bar = document.querySelector("#responsive_bar");
const open_slide_bar = document.querySelector("#open_slide_bar");
const close_slide_bar = document.querySelector("#close_slide_bar");
const cart_section = document.querySelector("#cart_section");

// open the slide bar 
open_slide_bar.addEventListener('click', () => {
  responsive_bar.classList.remove('hidden');
  responsive_bar.classList.add('block');

  // make blur the section when slide bar open
  cart_section.classList.add("blur-[5px]");
})

// close the silde bar
close_slide_bar.addEventListener('click', () => {
  responsive_bar.classList.remove('block');
  responsive_bar.classList.add('hidden');

  // remove blur effect from the cart section
  cart_section.classList.remove("blur-[5px]");
})


// swipper slider related scripts 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // For mobile screens (up to 480px)
    375: {
      slidesPerView: 1,
      centeredSlides: false
    },
    // For tablets and smaller screens (up to 768px)
    768: {
      slidesPerView: 3,
      centeredSlides: false
    },
    // For larger screens (up to 1080px)
    1080: {
      slidesPerView: 5,
      centeredSlides: false
    },
  }
});
