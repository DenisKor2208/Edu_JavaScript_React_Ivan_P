//Урок 55. Promise (ES6). Имитация синхронного кода

'use strict';

/*---------------------
console.log('Запрос данных...');

//resolve - что-то выполнилось правильно
//reject - что-то пошло не так
//then(успех) -> catch(ошибка) -> finally(действия которые будут производиться всегда независимо от результата)
const req = new Promise(function(resolve, reject) {    //callback функция(можно использовать обычную стрелочную функцию) в промисах всегда принимает 2 аргумента resolve и reject
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 20000
        };

        resolve(product); //срабатывает ниже req.then((product)).......
    }, 2000);
}); 

//them - это resolve; them - это метод который выполняется на Promise в случае положительного исхода / обрабатываем положительный результат
req.then((product) => {
    return new Promise((resolve, reject) => { //return для того чтобы можно было вызывать по цепочке

        setTimeout(() => {
            console.log('Данные получены');
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then((data) => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {        //catch - это тоже самое что и reject
    console.error('Произошла ошибка');
}).finally(() => {      //finally - выполнится при любом исходе
    console.log('finally');
});
---------------------*/

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

//test(1000).then(() => console.log('1000 ms'));
//test(2000).then(() => console.log('2000 ms'));

/*
Promise.all([test(1000), test(2000)]).then(() => {     //Promise.all - нужно для того, чтобы убедиться что все наши промисы успешно выполнились
    console.log('all');
});
*/

/*
Promise.race([test(1000), test(2000)]).then(() => {     //Promise.race - выполняет дальше свои действия после того, как самый первый промис выполнился
    console.log('all');
});
*/