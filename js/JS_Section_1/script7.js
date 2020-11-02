/*7 урок. Простое общение с пользователем.*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

/*const answer = +prompt("Сколько тебе лет?", ""); // + это динамическая типизация и сразу преобразует string в nubmer
console.log(answer + 5);
console.log(typeof(answer)); // проверка какого типа данная переменная */

const answers = [];
answers[0] = prompt('Как ваше имя?', "");
answers[1] = prompt('Как ваша фамилия?', "");
answers[2] = prompt('Сколько вам лет?', "");
document.write(answers);
console.log(typeof(answers));