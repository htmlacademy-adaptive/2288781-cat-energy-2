/* в этот файл добавляет скрипты*/

document.addEventListener('DOMContentLoaded', () => {

  const navMain = document.querySelector('.navigation');
  const navToggle = document.querySelector('.navigation__toggle');

  const slider = document.querySelector(".slider .slider input");
  const img = document.querySelector(".slider__image .slider__image--after");
  const dragLine = document.querySelector(".slider .slider__button");

  // Меню сайта
  if (navMain) {
    navMain.classList.remove('navigation--nojs');
  }

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


  // Ползунок
  slider.oninput = ()=>{
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
  }


// Карта
// if (map) {
//   map.classList.remove('map__location-static--nojs');
// }

// Пин
// objectManager.objects.options.set({
//   iconLayout: 'default#image',
//   iconImageHref: '../images/maps',
//   iconImageSize: [95, 37], // размеры картинки
//   iconImageOffset: [-11, -30] // смещение картинки
// });
