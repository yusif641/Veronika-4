const cookies = document.querySelector('.home__cookies')
const buttonAccept = document.querySelector('.home__cookie-accept')

buttonAccept.addEventListener('click', function (event) {
    cookies.style.display = 'none';
})