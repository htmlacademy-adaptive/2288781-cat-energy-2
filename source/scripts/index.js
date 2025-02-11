/* в этот файл добавляет скрипты*/

document.addEventListener('DOMContentLoaded', () => {

  const navMain = document.querySelector('.navigation');
  const navToggle = document.querySelector('.navigation__toggle');

  // const slider = document.querySelector('.slider');

  const map = document.querySelector('.map__location-static');


  // Меню сайта
  if (navMain) {
    navMain.classList.remove('navigation--nojs');
  }

  // Карта
  if (map) {
    map.classList.remove('map__location-static--nojs');
  }

  // Ползунок
  // range = document.querySelector('.slider__range-js');
  // range.addEventListener('input', () => {
  //   slider.style.setProperty('--value', `${range.value }%`);
  // }

  navToggle.addEventListener('click', () => {

    if (navMain.classList.contains('navigation--closed')) {
      navMain.classList.remove('navigation--closed');
      navMain.classList.add('navigation--opened');
      navToggle.setAttribute('aria-label', 'закрыть меню');
    } else {
      navMain.classList.add('navigation--closed');
      navMain.classList.remove('navigation--opened');
      navToggle.setAttribute('aria-label', 'открыть меню');
    }
  }
  );
});
