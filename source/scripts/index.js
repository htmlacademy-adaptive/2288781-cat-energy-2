/* в этот файл добавляет скрипты*/

document.documentElement.lang = 'ru';
document.documentElement.classList.add('page');
document.body.classList.add('page__body');

document.addEventListener('DOMContentLoaded', () => {

  const navMain = document.querySelector('.navigation');
  const navToggle = document.querySelector('.navigation__toggle');

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
});

// Ползунок
//   const slider = document.querySelector('.slider');
//   const curtain = slider.querySelector('.slider__curtain');
//   const sliderStyles = getComputedStyle(slider);
//   let curtainPlaceStart;
//   let clientX;

//   window.addEventListener('pointerup', stopTheCurtainShifting);
//   curtain.addEventListener('pointerdown', startTheCurtainShifting);

//   function startTheCurtainShifting (event) {
//     curtainPlaceStart = Number(sliderStyles.getPropertyValue('--curtain-place'));
//     clientX = event.clientX;
//     window.addEventListener('pointermove', shiftТheСurtain);
//   }

//   function shiftТheСurtain (event) {
//     const deltaX = event.clientX - clientX;
//     const cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
//     const curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
//     slider.style.setProperty('--curtain-place', `${curtainPlace}`);
//   }

//   function stopTheCurtainShifting () {
//     window.removeEventListener('pointermove', shiftТheСurtain);
//   }
// }
// );

