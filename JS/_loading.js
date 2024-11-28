const loading = document.querySelector('.loading')
const body = document.querySelector('.body')

window.onload = function () {
    loading.classList.add('loading_hide')
    body.style.overflow = 'scroll';
}