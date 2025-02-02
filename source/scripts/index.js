/* в этот файл добавляет скрипты*/

// Меню сайта
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

// Ползунок
// const slider = document.querySelector('.slider');
// const range = document.querySelector('.slider__range-js');
// range.addEventListener('input', () => {
//   slider.style.setProperty('--value', `${range.value }%`);
// });


// Карта
// const map = document.querySelector('.map');
// const mapImage = document.querySelector('.map__image');

// map.classList.remove('map--nojs');
// mapImage.classList.remove('map__image--nojs');
