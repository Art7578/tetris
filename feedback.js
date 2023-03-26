// получаем элементы формы
const form = document.querySelector('form');
const input = document.querySelector('input[name="username"]');

// отслеживаем изменение значения поля ввода
input.addEventListener('input', () => {
  // записываем текущее значение поля ввода в локальное хранилище
  const state = {
    text: input.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
});

// проверяем состояние хранилища при загрузке страницы
window.addEventListener('load', () => {
  const state = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (state && state.text) {
    input.value = state.text;
  }
});

// обрабатываем отправку формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); // отменяем стандартное поведение формы
  const state = {
    text: input.value
  };
  if (!state.text) {
    // если поле не заполнено, выводим сообщение об ошибке
    alert('Please enter name');
  } else {
    // отправляем данные на страницу game.html
    window.location.href = 'game.html';
    // очищаем локальное хранилище и поля формы
    localStorage.removeItem('feedback-form-state');
    input.value = '';
    // выводим объект с полями text и текущими значениями в консоль
    console.log(state);
  }
});