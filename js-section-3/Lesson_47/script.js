//Урок 47. Классы(ES6)

'use strict';

//использование классов /**********/
/* Концепция */
class Rectangle{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// Класс ColoredRectangleWithText наследуется от класса Rectangle
class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor) {
        super(height, width); //вызывает в конструкторе наследника тоже самое что было в конструкторе у родителя чтобы не повторяться
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

/* Экземпляры */
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);
const div = new ColoredRectangleWithText(25, 10, "Hello World", "red");

//console.log(square.calcArea());
//console.log(long.calcArea());

div.showMyProps();
console.log(div.calcArea());
/********/

