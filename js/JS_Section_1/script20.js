/*20 урок. Объекты. Деструктуризация объектов.*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

//работа с объектами
const obj = new Object(); //старый формат создания объекта
const options = { //новый формат создания объекта
    name: 'test', //формат запись - ключ: значение
    width: 1024,
    height: 1024,
    colors: {     //в объект возможно записывать еще один объект
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //Метод который будет работать внутри объекта options
        console.log("Тест");
    }
};
options.makeTest();


//деструктуризация объекта options
const {border, bg} = options.colors; //мы деструктурировали объект(разбили на более мелкие удобные кусочки)
console.log(border);
console.log(bg);


//добраться до свойств объекта можно двумя вариантами:
console.log(options['colors']['border']);
console.log(options.colors.bg);

console.log(options); //свойство name есть

//удалить свойство из объекта:
delete options.name;
console.log(options); //свойство name удалено


let counter = 0;
//Перебор объекта методом for in
//каждое свойство объекта называется словом key *** option это название объекта
for (let key in options) {
    counter++; //считае кол-во свойств в объекте
    if (typeof(options[key]) === 'object') { //условие если тип options[key] является object(объектом)
        for (let i in options[key]) { //i - свойства объекта options[key] *** ${options[key][i]} - значение свойства i
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}
console.log(counter);
//метод перебора for of для объекта работать не будет


//подсчитываем кол-во свойств в объекте
console.log(Object.keys(options).length); //в процессе нахождения ключей объекта создается массив, а у массива есть свойство length


