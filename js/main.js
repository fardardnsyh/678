// Navigation bar collapsible
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible-expanded");
  })
);

// Auto type animation
var options = {
    strings: ["Websites", "Apps", "Mockups", "Logos"],
    typeSpeed: 150,
    backspeed: 150,
    loop: true
};
    
var typed = new Typed('.auto-type', options);

// Swiper carousel


const swiper = new Swiper ('.design-swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
   delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // Default parameters
  slidesPerView: 3,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  },
});

const swiper2 = new Swiper('.testimonial-swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
   delay: 9000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});

const swiper3 = new Swiper('.modal-swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});