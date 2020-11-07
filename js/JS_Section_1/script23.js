/*23 урок. Основы ООП, прототипно-ориентированное наследование.*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

let str = "some", //примитивный тип данных
    strObj = new String(str); //превращаем str в объект (new String - старый формат записи)
console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);



const soldier = {
    health: 400,
    armor: 100,
    sayHello: () => {
        console.log("Hello");
    }
};

const john = {
    health: 100
};
//john.__proto__ = soldier; /*устаревший формат встречающийся в коде, но в реальных проектах почти не используется*/
Object.setPrototypeOf(john, soldier); //новый метод идентичный john.__proto__ = soldier;
console.log(john.armor); //john унаследовал armor: 100 от soldier через __proto__
john.sayHello(); //john унаследовал sayHello() от soldier через __proto__

/*-----------------------------------*/
/*изначально не создают сначала какой-то объект, а потом устанавливают на него наследование как
например выше:

const john = {
    health: 100
};
Object.setPrototypeOf(john, soldier);

а делают следующее:
*/
let jack = Object.create(soldier);
console.log(jack.health);
jack.sayHello();
