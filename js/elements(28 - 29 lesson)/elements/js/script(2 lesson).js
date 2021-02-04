//29 урок
'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

/*********************//*
//метод получения элементов
const wrapper = document.querySelector('.wrapper'),
      anyElementInWrapper = wrapper.querySelector('.heart');
console.log(anyElementInWrapper);
*//*********************/

//меняем цвет и ширину элемента
box.style.backgroundColor = 'blue';
box.style.width = '1000px';

//меняем геометрическую форму кнопки
btns[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "grey";

//прописываем напрямую текст стилей в элемент на странице
oneHeart.style.cssText = 'background-color: black; width: 150px';

//меняем цвет элемента вставляя цвет через переменную
let num = 'green';
circles[2].style.backgroundColor = `${num}`;

//меняем цвета нескольких элементов в псевдомассиве циклом
for (let i = 1; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'pink';
}

//меняем цвета нескольких элементов в псевдомассиве через foreach
hearts.forEach(item => {
    item.style.backgroundColor = 'orange';
});

/**************************************************/
//создаем элемент div, элемент p и элемент text
const div = document.createElement('div');
const p = document.createElement('p');
const text = document.createTextNode('Тут был я');

div.classList.add('black'); //присваиваем элементу div класс black
p.classList.add('yellow'); //присваиваем элементу p класс yellow

//document.body.append(div); //берем тег body как родителя и добавляем во внутрь него в самый конец элемент div
document.querySelector('.wrapper').append(div); //добавляем в конец элемента с классом wrapper элемент div
document.querySelector('.black').append(p); //добавляем в конец элемента с классом black элемент p
document.querySelector('.yellow').append(text); //добавляем в конец элемента с классом yellow элемент text
/****************************************************/

//document.querySelector('.wrapper').append(div);  // append - вставляем в конец
//document.querySelector('.wrapper').appendChild(div); //помещаем элемент div в конец элемента wrapper - устаревший

//document.querySelector('.wrapper').prepend(div); // prepend - вставляем в начало

//document.querySelector('.wrapper').insertBefore(div, hearts[0]); //вставляем элемент div в блок wrapper перед элементом hearts[0]


//hearts[0].before(div); //вставляем элемент div перед первым элементом hearts
//hearts[0].after(div);  //вставляем элемент div после первого элемента hearts

//circles[0].remove(); //удаляем элемент со страницы
//document.querySelector('.wrapper').removeChild(hearts[0]); //аналог remove, но устаревший

//hearts[1].replaceWith(circles[1]); //заменяем второе сердечко вторым кружочком
//document.querySelector('.wrapper').replaceChild(circles[0], hearts[0]); //аналог replace, но устаревший

circles[2].innerHTML = "Hello"; //вставляем текст в элемент circles[2]
circles[1].innerHTML = "<h1>Hello</h1>"; //вставляем HTML структуру в элемент circles[2]
circles[0].textContent = "Hello"; //метод работает только с текстом и преобразует HTML структуру в текст

/**************************************/
//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); //добавляем конструкцию <h2>Hello</h2> перед элементом div
//div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');  //добавляем конструкцию <h2>Hello</h2> в элемент div в самое начало
//div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');   //добавляем конструкцию <h2>Hello</h2> в элемент div в самый конец
//div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');   //добавляем конструкцию <h2>Hello</h2> после элемента div
/**************************************/