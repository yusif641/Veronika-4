new Swiper('.feedback-slider', {
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },

    spaceBetween: 15,

    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    slidesPerView: 1,

    breakpoints: {
        1000: {
            slidesPerColumn: 2,
            slidesPerView: 2,
        }
    }
});