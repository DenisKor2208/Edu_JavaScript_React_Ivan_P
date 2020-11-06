/*21 урок. Массивы и Псевдомассивы.*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

const arr = [1, 2, 3, 6, 8];
arr.pop(); //удаляем последний элемент из нашего массива
console.log(arr);

arr.push(10); //добавляем указанный элемент в конец массива
console.log(arr);

arr.shift(22); //удаляем первый элемент в начале массива
console.log(arr);

arr.unshift(345); //добавляем элемент в начало массива
console.log(arr);

//классический пример перебора массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//пример перебора массива методом for of
for (let value of arr) {
    console.log(value);
}

arr[99] = 0;
console.log(arr.length); //результат будет будто бы 100 элементов в массиве
/*свойство length состоит из последнего индекса +1*/

//пример перебора массива методом forEach
arr.forEach(function(item, i, arr) { //эта анонимная функция будет выполняться каждый раз для каждого элемента массива
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


//метод split - трансформация строки в массив
const str = "Телефон, телевизор, приставка, компьютер",
      products = str.split(", ");
console.log(products);

//метод join - трансформация массива в строку
const str1 = ["Телефон", "телевизор", "приставка", "компьютер"],
      products1 = str1.join('; ');
console.log(products1);

//метод sort - сортировка массива
const str2 = ["гайка", "белизна", "алфавит", "компьютер"],
      products2 = str2.sort();
console.log(products2);

//метод sort с callback функцией
const arr1 = [2, 13, 26, 8, 10];
arr1.sort(compareNum); //удаляем последний элемент из нашего массива
console.log(arr1);
function compareNum(a, b) {
    return a - b;
}