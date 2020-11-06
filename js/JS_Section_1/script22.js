/*22 урок. Передача по ссылке или по значению, Spread оператор (ES6-ES9).*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

let a = 5,
    b = a;
b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};
const copy = obj; //передача ссылки объекта obj в copy
copy.a = 10; //здесь мы работаем не с копией obj, а с оригиналом
console.log(copy);
console.log(obj);

/*------------------------------------------------------------------------*/

//функция копирования объекта через его перебор циклом
function copyC(mainObj) {
    let objCopy = {},
        key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

//объект для тестирования нашей функции копирования
const numbers = {
    a: 2,
    b: 5,
    c:{
        x: 7,
        y: 4      
    }
};

const newNumbers = copyC(numbers); //создаем именно копию объекта
newNumbers.a = 10; //меняем свойство копии объекта numbers
newNumbers.c.x = 10; //а вот свойство вложенного объекта меняется как в копии так и в оригинале
console.log(newNumbers);
console.log(numbers); //оригинал остается нетронутым

/*------------------------------------------------------------------------*/
//Вставка объекта в объект
const add = {
    d: 17,
    e: 20
};
let arrAdd = Object.assign(numbers, add); //создание независимой поверхностной копии объектов numbers и add
console.log(arrAdd);                      //так же можно слить пустой объект с непустым

/*------------------------------------------------------------------------*/
//Клонирование массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();//копируем старый массив в новый массив
newArray[1] = 'two element';
console.log(oldArray);
console.log(newArray);

/*------------------------------------------------------------------------*/
//Создание поверхностной копии - Работает как для объектов, так и для массивов
//Оператор разворота - Спред оператор

//сливаем два массива в новый массив с уже имеющимися данными
const video = ['youTube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

//Передаем весь массив с тремя значениями через спред-оператор в функцию
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num); 

//поверхностное клонирование массива через спред-оператор
const array = ['a', 'b'],
      newAarray = [...array];
console.log(newAarray);

//поверхностное клонирование объекта через спред-оператор
const q = {
    one: 1,
    two: 2
},
      newObj = {...q};
console.log(newObj);