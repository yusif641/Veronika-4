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