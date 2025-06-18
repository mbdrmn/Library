Основы синтаксиса
// Переменные
let variable = 'value';    // Действие: объявляет изменяемую переменную
const PI = 3.14;           // Действие: объявляет константу (неизменяемую)
var oldVar = 'deprecated'; // Действие: устаревший способ (не рекомендуется)

// Типы данных
const str = 'Строка';      // Действие: строковый тип (String)
const num = 42;            // Действие: числовой тип (Number)
const bool = true;         // Действие: булев тип (Boolean)
const obj = {key: 'value'};// Действие: объект (Object)
const arr = [1, 2, 3];     // Действие: массив (Array)
const n = null;            // Действие: специальное значение "ничего"
let u;                     // Действие: undefined (значение не присвоено)

// Вывод в консоль
console.log('Сообщение');  // Действие: вывод в консоль браузера
console.warn('Предупреждение'); // Действие: вывод предупреждения
console.error('Ошибка');   // Действие: вывод ошибки
console.table(data);       // Действие: вывод данных в виде таблицы

Операторы.  
// Арифметические операторы
let sum = 5 + 3;           // Действие: сложение (8)
let diff = 5 - 3;          // Действие: вычитание (2)
let product = 5 * 3;       // Действие: умножение (15)
let quotient = 5 / 3;      // Действие: деление (~1.666)
let remainder = 5 % 3;     // Действие: остаток от деления (2)
let exponent = 5 ** 3;     // Действие: возведение в степень (125)

// Операторы сравнения
5 == '5'                   // Действие: нестрогое равенство (true)
5 === '5'                  // Действие: строгое равенство (false)
10 > 5                     // Действие: больше (true)
10 <= 10                   // Действие: меньше или равно (true)

// Логические операторы
true && false              // Действие: И (false)
true || false              // Действие: ИЛИ (true)
!true                      // Действие: НЕ (false)

// Тернарный оператор
const access = age >= 18 ? 'Доступ разрешён' : 'Доступ запрещён';
// Действие: компактная замена if-else


Управляющие конструкции
// Условные операторы
if (condition) {
  // Действие: выполняется, если condition истинно
} else if (anotherCondition) {
  // Действие: выполняется, если anotherCondition истинно
} else {
  // Действие: выполняется, если все условия ложны
}

// Циклы
for (let i = 0; i < 5; i++) {
  // Действие: выполняется 5 раз (i от 0 до 4)
}

while (condition) {
  // Действие: выполняется, пока condition истинно
}

do {
  // Действие: выполняется хотя бы один раз, затем пока condition истинно
} while (condition);

// Перебор массивов
for (const item of array) {
  // Действие: перебирает элементы массива
}

for (const index in array) {
  // Действие: перебирает индексы массива (не рекомендуется для массивов)
}

Функции.. 
// Объявление функции
function greet(name) {
  return `Привет, ${name}!`;
}
// Действие: классическое объявление функции

// Функциональное выражение
const greet = function(name) {
  return `Привет, ${name}!`;
};
// Действие: функция как значение переменной

// Стрелочные функции
const greet = (name) => `Привет, ${name}!`;
// Действие: компактный синтаксис, сохраняет контекст this

// Параметры по умолчанию
function greet(name = 'Гость') {
  return `Привет, ${name}!`;
}
// Действие: значение по умолчанию, если параметр не передан

// Rest-параметры
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
// Действие: собирает все аргументы в массив

Работа с массивами
const numbers = [1, 2, 3, 4, 5];

// Основные методы
numbers.push(6);           // Действие: добавляет элемент в конец [1,2,3,4,5,6]
numbers.pop();             // Действие: удаляет последний элемент [1,2,3,4,5]
numbers.unshift(0);        // Действие: добавляет элемент в начало [0,1,2,3,4,5]
numbers.shift();           // Действие: удаляет первый элемент [1,2,3,4,5]

// Функциональные методы
numbers.map(num => num * 2); // Действие: создаёт новый массив [2,4,6,8,10]
numbers.filter(num => num > 2); // Действие: фильтрует [3,4,5]
numbers.reduce((acc, num) => acc + num, 0); // Действие: сводит к одному значению (15)
numbers.find(num => num > 3); // Действие: находит первый подходящий элемент (4)
numbers.some(num => num > 3); // Действие: проверяет, есть ли хотя бы один (true)
numbers.every(num => num > 0); // Действие: проверяет все элементы (true)

// Другие полезные методы
numbers.slice(1, 3);       // Действие: возвращает подмассив [2,3]
numbers.splice(1, 2);      // Действие: удаляет 2 элемента начиная с индекса 1 [1,4,5]
numbers.concat([6,7]);     // Действие: объединяет массивы [1,2,3,4,5,6,7]
numbers.includes(3);       // Действие: проверяет наличие элемента (true)
numbers.sort((a,b) => a - b); // Действие: сортирует массив

Работа с объектами
// Создание объекта
const person = {
  name: 'Анна',
  age: 30,
  greet() {
    return `Привет, я ${this.name}`;
  }
};

// Доступ к свойствам
person.name;               // Действие: доступ через точку ('Анна')
person['age'];             // Действие: доступ через квадратные скобки (30)

// Добавление/изменение свойств
person.job = 'Developer';  // Действие: добавляет новое свойство
person.age = 31;           // Действие: изменяет существующее свойство

// Удаление свойств
delete person.job;         // Действие: удаляет свойство

// Копирование объектов
const clone = {...person}; // Действие: поверхностное копирование (spread оператор)
const deepClone = JSON.parse(JSON.stringify(person)); // Действие: глубокое копирование

// Деструктуризация
const {name, age} = person; // Действие: извлекает свойства в переменные

Работа с DOM
// Поиск элементов
document.getElementById('id');        // Действие: находит элемент по id
document.querySelector('.class');     // Действие: находит первый элемент по CSS-селектору
document.querySelectorAll('div');     // Действие: находит все элементы по селектору

// Изменение элементов
element.textContent = 'Новый текст';  // Действие: изменяет текстовое содержимое
element.innerHTML = '<b>Жирный</b>'; // Действие: изменяет HTML-содержимое
element.style.color = 'red';          // Действие: изменяет стиль
element.classList.add('active');      // Действие: добавляет класс
element.setAttribute('data-id', 1);   // Действие: устанавливает атрибут

// Создание элементов
const div = document.createElement('div'); // Действие: создаёт новый элемент
document.body.appendChild(div);      // Действие: добавляет элемент в DOM

// События
element.addEventListener('click', (e) => {
  console.log('Клик!', e.target);    // Действие: обработчик клика
});

// Формы
form.addEventListener('submit', (e) => {
  e.preventDefault();               // Действие: отменяет стандартное поведение
  const formData = new FormData(form); // Действие: собирает данные формы
});

Асинхронный JavaScript
// Callbacks
function fetchData(callback) {
  setTimeout(() => callback('Данные'), 1000);
}
// Действие: традиционный подход с функциями обратного вызова

// Promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
// Действие: современный подход с цепочкой then/catch

// Async/await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
// Действие: синтаксический сахар для Promises (более читаемый код)

// setTimeout/setInterval
setTimeout(() => console.log('Через 1 сек'), 1000);
// Действие: выполнение кода с задержкой

const timer = setInterval(() => console.log('Каждую 1 сек'), 1000);
clearInterval(timer);
// Действие: периодическое выполнение с возможностью отмены

ООП в JavaScript
// Конструктор функции
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Привет, я ${this.name}`;
};
const person = new Person('Анна');

// Классы (ES6)
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return `Привет, я ${this.name}`;
  }
  
  static staticMethod() {
    return 'Статический метод';
  }
}
// Действие: современный синтаксис ООП

// Наследование
class Employee extends Person {
  constructor(name, job) {
    super(name);
    this.job = job;
  }
  
  work() {
    return `${this.name} работает как ${this.job}`;
  }
}
// Действие: создание дочернего класса

Полезные трюки и советы
// Проверка на массив
Array.isArray(arr);        // Действие: возвращает true, если arr - массив

// Проверка на число
typeof num === 'number' && !isNaN(num); // Действие: точная проверка на число

// Уникальные значения массива
const unique = [...new Set(array)]; // Действие: удаляет дубликаты

// Объединение объектов
const merged = {...obj1, ...obj2}; // Действие: создаёт новый объединённый объект

// Глубокая заморозка объекта
const deepFreeze = obj => {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null && typeof obj[prop] === 'object') {
      deepFreeze(obj[prop]);
    }
  });
};
// Действие: делает объект полностью неизменяемым

// Форматирование даты
const date = new Date();
date.toLocaleDateString('ru-RU'); // Действие: "дд.мм.гггг"
date.toLocaleTimeString('ru-RU'); // Действие: "чч:мм:сс"

// Генерация случайного числа
Math.floor(Math.random() * (max - min + 1)) + min; // Действие: случайное число в диапазоне [min, max]
