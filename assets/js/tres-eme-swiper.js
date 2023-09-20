
//*******  Swipper Custom *******//

var swiper = new Swiper('.swiper-container', {
    // Cuando la pantalla mide < 576px
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        // Cuando la pantalla mide >= 576px
        576: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },

        // Cuando la pantalla mide >= 769px
        769: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },

        // Cuando la pantalla mide >= 992px
        992: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        },

        // Cuando la pantalla mide >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetweenSlides: 50
        }
    }
});


//*******  Modal Custom  *******//

const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openModal) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeModal) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible [data-close]").click();
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible [data-close]").click();
  }
});