//Урок 51. JSON формат передачи данных, глубокое клонирование объектов

'use strict';

const persone = {
    name: 'Alex',
    tel: '+79876543210',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
//console.log(JSON.stringify(persone)); //конвертируем объект js в JSON
//console.log(JSON.parse(JSON.stringify(persone))); //конвертируем JSON в обычный объект js

const clone = JSON.parse(JSON.stringify(persone)); //создаем глубокий клон/абсолютно независимый объект объекта persone
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
//При создании поверхностной копии при изменении clone.parents.mom изменился бы и persone.parents.mom