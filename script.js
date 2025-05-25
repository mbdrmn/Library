// Функция для добавления символа в поле ввода
function appendToResult(value) {
  const result = document.getElementById('result');
  result.value += value;
}

// Очистка поля ввода (для кнопки "C")
function clearResult() {
  document.getElementById('result').value = '';
}

// Вычисление результата (для кнопки "=")
function calculateResult() {
  const result = document.getElementById('result');
  try {
    // eval() вычисляет строку как математическое выражение (осторожно!)
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

// Назначаем обработчики событий
document.addEventListener('DOMContentLoaded', () => {
  // Очистка при клике на "C"
  document.getElementById('clearButton').addEventListener('click', clearResult);

  // Вычисление при отправке формы (кнопка "=")
  document.getElementById('calculator').addEventListener('submit', (e) => {
    e.preventDefault(); // Отменяем стандартную отправку формы
    calculateResult();
  });
});