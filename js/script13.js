/*13 урок. Условия.*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); //Тернарный оператор

const numb = 47;
switch (numb) { /* конструкция switch всегда идет на строгое соответствие(сравнение); со строками все работает точно также*/
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}