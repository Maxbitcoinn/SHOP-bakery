const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open'); // Выбираем все элементы с классом .modal-btn-open
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

// Добавляем обработчик для каждого элемента с классом .modal-btn-open
modalBtnOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

modalBtnClose.addEventListener('click', toggleModal);