//Урок 52. AJAX и общение с сервером

'use strict';

//получаем поля
const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => { //события change и input отличаются тем, что change срабатывает только тогда, когда элемент пропадает с фокуса
    const request = new XMLHttpRequest(); //устаревший в использовании вариант

    /* Аргументы метода open()
     * method - GET или POST
     * url - по которому мы будем делать запрос
     * async - синхронный или ассинхронный / по умолчанию стоит true
     * login - логин
     * pass - пароль
     */
    request.open('GET', 'current.json'); //метод open собирает настройки которые помогут сделать запрос
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //(1. тип контекта, 2. Какой контент)
    request.send(); //запускаем запрос
    
    //чаще всего мы будем использовать событие load потому, что оно срабюатывает один раз когда запрос уже выполнен
    request.addEventListener('readystatechange', () => { // это событие отслеживает статус готовности нашего запроса в текущий момент

        /* если используется событие load, то:
           
           if (request.status === 200) {
           
        * а строчку request.readyState === 4 убираем
        */

        if (request.readyState === 4 && request.status === 200) { //если запрос был полностью завершен и запрос завершен успешно
            console.log(request.response); //выводим ответ от сервера
            const data = JSON.parse(request.response);

            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так...";
        }
    });

    // 200 ОК - 404 Not Found
    // status - статус нашего запроса (200, 404, 303 и т.д)
    // statusText - текстовое описание ответа от сервера (OK, not found и т.д.)
    // response - ответ от сервера
    // readyState - текущее состояние нашего запроса


});