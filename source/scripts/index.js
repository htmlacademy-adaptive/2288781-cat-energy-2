/* в этот файл добавляет скрипты*/

document.addEventListener('DOMContentLoaded', () => {

  // Меню сайта
  const navNojs = document.querySelector('.navigation');
  const navMain = document.querySelector('.navigation');
  const navToggle = document.querySelector('.navigation__toggle');

  if (navNojs) {
    navNojs.classList.remove('navigation--nojs');
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
