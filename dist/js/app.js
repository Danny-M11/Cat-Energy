const toggle = document.querySelector('.main-nav__toggle')
const nav = document.querySelector('.main-nav__list')
const mediaQuery = window.matchMedia('(min-width: 768px)')

onToggleClick = () => {
    nav.classList.toggle('visually-hidden');
}

showNav = () => {
    if (mediaQuery.matches) {
        nav.classList.remove('visually-hidden')
    } else {nav.classList.add('visually-hidden')}
}

document.addEventListener('DOMContentLoaded', showNav);//этот обработчик нужен для того, чтобы при переходе между страницами выполнялась проверка медиа-запроса
toggle.addEventListener('click', onToggleClick);
window.addEventListener('resize', showNav);


//slider

const slider = document.querySelector('.slider-wrapper')
const sliderResize = document.querySelector('.slider-wrapper__resize')

slider.addEventListener('mousemove', (event) => {
    let x = event.offsetX //координаты по оси x
    sliderResize.style.width = x + 'px';
    sliderResize.classList.remove('transition')
})

slider.addEventListener('mouseleave', (event) => {
    sliderResize.style.width = 50 + '%';
    sliderResize.classList.add('transition')
})
