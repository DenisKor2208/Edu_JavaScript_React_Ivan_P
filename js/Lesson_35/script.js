//35. Async, defer, динамические скрипты
'use strict';

const p = document.querySelectorAll('p');
console.log(p);

const script = document.createElement('script'); // создаем новый элемент
script.src = 'js/test.js'; //устанавливаем путь к скриптовому файлу
script.async = false;
document.body.append(script); //добавляем в конец блока body