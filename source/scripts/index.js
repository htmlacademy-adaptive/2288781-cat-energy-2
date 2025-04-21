/* в этот файл добавляет скрипты*/

document.addEventListener('DOMContentLoaded', () => {

  // Меню сайта
  const navMain = document.querySelector('.main-header__navigation');
  const navNojs = document.querySelector('.main-header__navigation');
  const navToggle = document.querySelector('.main-header__toggle');
  const toggleNojs = document.querySelector('.main-header__toggle');

  // Карта
  const locationNojs = document.querySelector('.map__location-iframe');

  if (navNojs) {
    navNojs.classList.remove('main-header__navigation--nojs');
  }

  if (toggleNojs) {
    toggleNojs.classList.remove('main-header__toggle--nojs');
  }

  if (locationNojs) {
    locationNojs.classList.remove('map__location-iframe--nojs');
  }

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-header__navigation--closed')) {
      navMain.classList.remove('main-header__navigation--closed');
      navMain.classList.add('main-header__navigation--opened');
      navToggle.classList.add('main-header__toggle--opened');
      navToggle.setAttribute('aria-label', 'открыть меню');
    } else {
      navMain.classList.add('main-header__navigation--closed');
      navMain.classList.remove('main-header__navigation--opened');
      navToggle.classList.add('main-header__toggle--closed');
      navToggle.setAttribute('aria-label', 'закрыть меню');
    }
  });

  // Ползунок
  const slider = document.querySelector('.slider');
  const before = slider.querySelector('.slider__item--before');
  const changeBtn = document.querySelector('.slider__thumb');

  if (slider) {

    let isActive = false;
    const width = slider.offsetWidth / 2;
    before.style.width = `${width}px`;

    const beforeSlider = (cursorPosition) => {
      const shift = Math.max(0, Math.min(cursorPosition, slider.offsetWidth));
      before.style.width = `${shift}px`;
      changeBtn.style.left = `${shift}px`;
    };

    const pauseEvents = (evt) => {
      if (evt.stopPropagation) {
        evt.stopPropagation();
      }
      if (evt.preventDefault) {
        evt.preventDefault();
      }
      evt.cancelBubble = true;
      evt.returnValue = false;
      return false;
    };

    slider.addEventListener('mousedown', () => {
      isActive = true;
    });

    slider.addEventListener('mouseup', () => {
      isActive = false;
    });

    slider.addEventListener('mouseleave', () => {
      isActive = false;
    });

    slider.addEventListener('mousemove', (evt) => {
      if (!isActive) {
        return;
      }

      let cursorPosition = evt.pageX;
      cursorPosition -= slider.getBoundingClientRect().left;
      beforeSlider(cursorPosition);
      pauseEvents(evt);
    });

    slider.addEventListener('touchstart', (evt) => {
      evt.preventDefault();
      isActive = true;
    });

    slider.addEventListener('touchend', (evt) => {
      evt.preventDefault();
      isActive = false;
    });

    slider.addEventListener('touchcancel', (evt) => {
      evt.preventDefault();
      isActive = false;
    });


    slider.addEventListener('touchmove', (evt) => {
      evt.preventDefault();
      if (!isActive) {
        return;
      }

      let touchPosition;
      let i;

      for (i = 0; i < evt.changedTouches.length; i++) {
        touchPosition = evt.changedTouches[i].pageX;
        touchPosition -= slider.getBoundingClientRect().left;
        beforeSlider(touchPosition);
        pauseEvents(evt);
      }
    });
  }
});


/// Как вставить пин(кастомный знак)
// ymaps.ready(function () {
//   var myMap = new ymaps.Map('map', {
//           center: [55.751574, 37.573856],
//           zoom: 9
//       }, {
//           searchControlProvider: 'yandex#search'
//       }),

//       // Создаём макет содержимого.
//       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//       ),

//       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//           hintContent: 'Собственный значок метки',
//           balloonContent: 'Это красивая метка'
//       }, {
//           // Опции.
//           // Необходимо указать данный тип макета.
//           iconLayout: 'default#image',
//           // Своё изображение иконки метки.
//           iconImageHref: 'images/myIcon.gif',
//           // Размеры метки.
//           iconImageSize: [30, 42],
//           // Смещение левого верхнего угла иконки относительно
//           // её "ножки" (точки привязки).
//           iconImageOffset: [-5, -38]
//       }),

//       myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
//           hintContent: 'Собственный значок метки с контентом',
//           balloonContent: 'А эта — новогодняя',
//           iconContent: '12'
//       }, {
//           // Опции.
//           // Необходимо указать данный тип макета.
//           iconLayout: 'default#imageWithContent',
//           // Своё изображение иконки метки.
//           iconImageHref: 'images/ball.png',
//           // Размеры метки.
//           iconImageSize: [48, 48],
//           // Смещение левого верхнего угла иконки относительно
//           // её "ножки" (точки привязки).
//           iconImageOffset: [-24, -24],
//           // Смещение слоя с содержимым относительно слоя с картинкой.
//           iconContentOffset: [15, 15],
//           // Макет содержимого.
//           iconContentLayout: MyIconContentLayout
//       });

//   myMap.geoObjects
//       .add(myPlacemark)
//       .add(myPlacemarkWithContent);
// });
