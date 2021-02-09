//Урок 45. Функции-конструкторы

'use strict';

/*устаревшые и не совсем корректные форматы записи данных*//*
const num = new Number(3); //создается новый объект
console.log(num); 

const numOne = new Function(3); //создается новый объект
console.log(numOne); 
*//***********************/

/*создаем конструктор*/
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();

console.log(ivan.name + ' ' + ivan.id + ' ' + ivan.human);
console.log(alex.name + ' ' + alex.id + ' ' + alex.human);

/*наследование функций*/
function SuperUser(name, id, skill) {
    User.call(this, name, id); //наследуем функцию User; name и id - аргументы которые требуют значений извне

    this.skill = skill;
}
const ivanSuperUser = new SuperUser('Ivan SuperHuman', 22, 'Developer');
console.log(ivanSuperUser);
ivanSuperUser.hello();
/***********************/

/*использование классов в JavaScript*/
class UserR {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}

const igor = new UserR('Igor', 28);
igor.hello();
igor.exit();
console.log(igor.name);
/***********************************/