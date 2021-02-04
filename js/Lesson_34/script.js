//34. События на мобильных устройствах
'use strict';

/*события на мобильных браузерах:
* touchstart - при возникновении касания к элементу
* touchmove - если палец при касании элемента начинает двигаться по нему, то будет срабатывать это событие
* touchend - как только палец оторвался от элемента
* touchenter - когда ведем пальцем по экрану и наскакиваем(наскальзываем) на элемент
* touchleave - когда палец продолжая скользить, ушел за пределы этого элемента
* touchcancel - например когда мы серфим в браузере и наш палец ушел за пределы этого браузера
*/

document.addEventListener('DOMContentLoaded', () => {
   const box = document.querySelector('.box');

   /*
   box.addEventListener('touchstart', (e) => {
       e.preventDefault();
       console.log('touchstart');
   });


    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('touchmove');
    });


    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('touchend');
    });
    */


/* Свойства объекта события
* touches - список всех пальцев которые сейчас взаимодействуют с экраном
* targetTouches - список всех пальцев которые сейчас взаимодействуют с этим конкретным элементом
* changedTouches - список пальцев которые участвуют в текущем событии.
*/
    /*
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('touchstart');
        console.log(e.targetTouches);
    });
    */

    //отслеживание координат первого пальца по Х и вывод на экран
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
});