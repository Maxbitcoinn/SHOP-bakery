document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuCloseBtn = document.querySelector('.menu-btn-close');
  const menuLinks = document.querySelectorAll('.mobile-menu__link');
  const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
  const modalBtnClose = document.querySelector('.modal-btn-close');
  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');
  const menuBtnOpen = document.querySelector('.menu-btn-open'); // Вибираємо кнопку для відкриття меню
  const menuBtnClose = document.querySelector('.menu-btn-close'); // Вибираємо кнопку для закриття меню

  // Відкриття мобільного меню при кліку на кнопку з класом menu-btn-open
  menuBtnOpen.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
    disableScroll();
  });

  // Закриття мобільного меню при кліку на кнопку з класом menu-btn-close
  menuBtnClose.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    disableScroll();
  });

  // Закриття мобільного меню при кліку на лінки
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
      disableScroll();
    });
  });

  // Плавна прокрутка до розділів при кліку на лінки в меню
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Закриття модального вікна або бургер меню
  const toggleModal = () => {
    modal.classList.toggle('is-hidden');
    mobileMenu.classList.remove('is-open');
    backdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('is-scroll-disabled');
  };

  modalBtnOpen.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  modalBtnClose.addEventListener('click', toggleModal);

  // Показати кнопку "Back" після закриття модального вікна
  const modalBackBtns = document.querySelectorAll('.modal__back-btn');

  modalBackBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      backdrop.classList.add('is-hidden');
    });
  });

  // Функція для включення/виключення прокрутки
  const disableScroll = () => {
    document.body.classList.toggle('is-scroll-disabled');
  };
});
