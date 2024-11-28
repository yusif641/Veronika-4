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
    autoHeight: false,

    breakpoints: {
        1000: {
            slidesPerColumn: 2,
            slidesPerView: 2,
        }
    }
});









const loading = document.querySelector('.loading')
const body = document.querySelector('.body')

window.onload = function () {
    loading.classList.add('loading_hide')
    body.style.overflow = 'scroll';
}

















const cookies = document.querySelector('.home__cookies')
const buttonAccept = document.querySelector('.home__cookie-accept')

buttonAccept.addEventListener('click', function (event) {
    cookies.style.display = 'none';
})








































const accordions = document.querySelectorAll('.accordion');
const accordionsContent = document.querySelectorAll('.accordion__content');
const accordionsIcons = document.querySelectorAll('.accordion-get__icon');

accordions.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        accordionsContent.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        })

        accordions.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))







let seconds = 50;
let refreshCount = 0;
const secondsDisplay = document.querySelector('.seconds');

function updateTimer() {
  secondsDisplay.textContent = seconds;

  if (seconds <= 0) {
    if (refreshCount < 22) {
      seconds = 50;
      refreshCount++;
      setTimeout(updateTimer, 1000);
      return;
    } else {
      secondsDisplay.textContent = "0";
      return;
    }
  }

  seconds--;
  setTimeout(updateTimer, 1000);
}

updateTimer();



let minutes = 22;
let refreshCountMinutes = 0;
const minutesDisplay = document.querySelector('.minutes');

function updateTimer1() {
  minutesDisplay.textContent = minutes;

  if (minutes <= 0) {
    if (refreshCountMinutes < 2) {
      minutes = 22;
      refreshCountMinutes++;
      setTimeout(updateTimer1, 60000); // Задержка 60000 мс (60 сек)
      return;
    } else {
      minutesDisplay.textContent = "0";
      return;
    }
  }

  minutes--;
  setTimeout(updateTimer1, 60000); // Задержка 60000 мс (60 сек)
}

updateTimer1();



let hours = 2;
const hoursDisplay = document.querySelector('.hours');

function updateTimer2() {
  if (hours <= 0) {
    hoursDisplay.textContent = "0";
    return;
  }

  hoursDisplay.textContent = hours;
  hours--;
  setTimeout(updateTimer2, 3600000); // Задержка 3600000 мс (1 час)
}

updateTimer2();


// cookies

const COOKIE_NAME = "visit";
const cookieAlert = document.querySelector(".home__cookies");
const cookieBtn = document.querySelector(".home__cookie-accept");

if (!Cookies.get(COOKIE_NAME)) {
  setTimeout(() => {
    cookieAlert.classList.add("is-show"); 
  }, 1000);

  cookieBtn.addEventListener("click", (e) => {
    cookieAlert.classList.remove("is-show");

    Cookies.set(COOKIE_NAME, true, { expires: 2 });
  });
}