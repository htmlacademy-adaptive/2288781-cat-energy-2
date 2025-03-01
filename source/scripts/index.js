/* в этот файл добавляет скрипты*/

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
  });
});
