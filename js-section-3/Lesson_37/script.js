//37. ClassList и делегирование событий
'use strict';

//Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
//console.log(btns[0].classList.length); //получаем кол-во классов у элемента
//console.log(btns[0].classList.item(0)); //получаем класс который располагается под определенным индексом
//console.log(btns[0].classList.add('red', 'eche-odin-class')); //добавляем классы к элементу; можно добавить несколько элементов через запятую
//console.log(btns[0].classList.remove('blue')); //удаляем классы у элемента
//console.log(btns[0].classList.toggle('blue')); //если указанный класс есть на элементе, то он будет убран, если нету, то добавлен 


/*
//проверяем есть ли класс у элемента
console.log(btns[1].classList.add('red'));
if(btns[1].classList.contains('red')) {
    console.log('red');
}
*/


//Действие на первую кнопку => если у второй кнопки нет класса 'red', то мы его добавляем ко второй кнопке
/*первый вариант
btns[0].addEventListener('click', () => {
    if(!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});
*/
/*второй вариант
btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});
*/


/**********Делегирование событий**********/
//привязываем действие на все элементы в расположенные в родителе по родителю
wrapper.addEventListener('click', (event) => { //event - объект события, содержит всю информацию о том элементе на котором происходит событие
    if(event.target && event.target.matches("button.red")) { //Метод matches() вернёт true или false, в зависимости от того, соответствует ли элемент указанному css-селектору.
    //if(event.target && event.target.classList.contains('blue')) { //действие сработает только на той кнопке в родителе у которой есть класс 'blue'
    //if(event.target && event.target.tagName == "BUTTON") { //event.target - это гугловская рекомендация которую они советуют соблюдать
        console.log('Hello');
    }
    //console.dir(event.target.tagName); //dir - отображение в качестве объекта
});
//создаем новую кнопку в блоке с кнопками wrapper
const btn = document.createElement('button'); //создаем элемент
btn.classList.add('red'); //присваеваем ему класс 'red'
wrapper.append(btn); //добавляем элемент в конец блока с кнопками wrapper


