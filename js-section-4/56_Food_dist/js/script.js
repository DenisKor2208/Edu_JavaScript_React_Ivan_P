// Урок 56 - Fetch API
'use strict';

document.addEventListener('DOMContentLoaded', () => {


    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'), //все пункци в блоке "Выберите стиль питания"
          tabsContent = document.querySelectorAll('.tabcontent'), //картинка с описанием слева от блока "Выберите стиль питания"
          tabsParent = document.querySelector('.tabheader__items'); //весь блок "Выберите стиль питания"

    function hideTabContent() { //для каждого элемента блока картинки с описанием слева и блока "Выберите стиль питания" скрыть все элементы
        tabsContent.forEach(item => {
            item.classList.add('hide'); //для каждого элемента назначаем класс hide, которому в css назначен display: none
            item.classList.remove('show', 'fade'); //для каждого элемента назначаем класс show, которому в css назначен display:block
        });
        
        tabs.forEach(item =>{ //у каждого пункта в блоке "Выберите стиль питания" удаляем класс активного пункта tabheader__item_active
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade'); //элементу под номером i назначаем видимость и анимацию
        tabsContent[i].classList.remove('hide'); //у элемента под номером i удаляем класс невидимости
        tabs[i].classList.add('tabheader__item_active');
    }

    //вызываем функции обозначенные выше
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => { //делегируем на все элементы блока "Выберите стиль питания" действия по событию click
        const target = event.target; //ссылка на объект/элемент, который был инициатором события/на котором произошло событие
        
        if (target && target.classList.contains('tabheader__item')) { //contains - возвращает логическое значение, указывающее, имеет ли элемент указанный класс или нет
            tabs.forEach((item, i) => {
                if (target == item) { //при этой проверке все элементы в tabs перебираются и если кликнутый элемент(target) тот же самый который сейчас перебирается в tabs.forEach, то числовой индекс из tabs.forEach подставляется в функцию
                    hideTabContent();
                    showTabContent(i);
                }
            });

        }

});


//Timer
const deadline = '2021-08-22';

//получаем разницу между дедлайном и текушей датой
function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()), //получаем разницу между текущей и необходимой датой в кол-ве миллисекунд
          days = Math.floor(t / (1000 * 60 * 60 * 24)), // получаем из миллисекунд дни и округляем до ближайшего целого
          hours = Math.floor((t / (1000 * 60 * 60)) % 24), //получаем кол-во часов из остатка от деления
          minutes = Math.floor((t / 1000 / 60) % 60), //получаем кол-во минут из остатка от деления
          seconds = Math.floor((t / 1000) % 60); // получаем кол-во секунд из остатка от деления
    
    return { // возвращаем объект с результатами
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

//подставляем к однозначным числам ноль в начало
function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) { //1. серектор для работы, дэдлайн
    
    //получаем элементы со html страницы для изменения
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000); //устанавливаем таймер на запуск функции через каждую секунду

    updateClock(); //вызываем функцию для инициализации и удаления "мигания в верстке"

    function updateClock() {
        const t = getTimeRemaining(endtime); //получаем разницу между датами

        days.innerHTML = getZero(t.days);//можно и textContent - разницы не будет
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.t <= 0) { //если время вышло, то останавливаем таймер
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);


//modal
const modalTrigger = document.querySelectorAll('[data-modal]'), //получаем все data атрибуты
      modal = document.querySelector('.modal'), //модальное окно
      modalCloseBtn = document.querySelector('[data-close]'); //кнопка закрытия модального окна; получаем по data атрибуту

modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show'); //добавляем классс show к элементу modal
        modal.classList.remove('hide'); //удаляем класс hide у элемента modal
        document.body.style.overflow = 'hidden'; //убираем возможность скролить основную страницу при открытом модальном окне
        /*
         * так же есть вариант использования открытия/закрытия модального окна modal.classList.toggle('show');
         */
    });
}); 

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

modal.addEventListener('click', (event) => { //закрытие модального окна при клике на серую область
    if (event.target === modal || event.target.getAttribute('data-close') == '') { //если "куда кликнул пользователь" является modal - строгое соответствие или на какой-то элемент с атрибутом data-close
        closeModal();
    }
});

/*Закрытие модального окна при нажатии на клавишу Escape*/
document.addEventListener('keydown', (event) => {
    if (event.code === "Escape" && modal.classList.contains('show')) { //если нажата клавиша Escape и модальное окно действительно открыто, то только тогда закрываем его
        closeModal();
    }
});


//modal
/* Таймер для открытия модального окна */
function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

const modalTimerId = setTimeout(() => {
    openModal();
}, 50000);

/*Модальное окно при долистывании пользователем страницы до конца*/
function showModalByScroll() {
    //window.pageYOffset - возвращает количество пикселей, на которое прокручен документ по вертикали
    //document.documentElement.clientHeight - видимая часть которую мы видим на данный момент на сайте без прокрутки
    //document.documentElement.scrollHeight - высота контента в элементе, включая содержимое, невидимое из-за прокрутки(полная прокрутка/полный сайт который сейчас открыт)
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}
window.addEventListener('scroll', showModalByScroll);


/* Card menu
 * Используем классы для карточек
 */

class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes; //добавляем нужное нам кол-во классов через rest оператор
        this.parent = document.querySelector(parentSelector); //получаем родителя который передаем при создании экземпляра класса для того чтобы в этого родителя добавить созданный нами элемент
        this.transfer = 75;
        this.changeToRUB();
    }

    changeToRUB() {
        this.price = this.price * this.transfer;
    }

    render() {
        const element = document.createElement('div'); //созданный элемент div

        if (this.classes.length === 0) { //проверка - если мы не передавали классы и classes пустой, то устанавливается default класс "menu__item"
            this.classes = "menu__item";
            element.classList.add(this.classes);
        } else {
            this.classes.forEach(className => {   //переданные классы
                element.classList.add(className); //добавляем как классы в созданный элемент
            });
        }

        /* вставляем верстку из HTML документа и подставляем туда переданные при создании экземпляра класса атрибуты */
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
    `;
    this.parent.append(element); //добавляем созданный нами элемент в родителя
    }
}

/* Вариант создания классов */
new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    90,
    ".menu .container",
    'menu__item'
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    140,
    ".menu .container", // точно указываем в какого родителя добавлять. Есть блок menu, а в нем container 
    'menu__item'        // устанавливаем класс menu__item оператором rest
).render();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    210,
    ".menu .container",
    'menu__item'
).render();


// Forms  

    const forms = document.querySelectorAll('form'); //получаем все формы по тегу form
    const message = { //для информирования пользователя о результатах запроса
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => { //привязываем к каждой форме на странице функцию postData
        postData(item);
    });

    function postData(form) { //аргументом принимает какую-то форму
        form.addEventListener('submit', (e) => { //submit срабатывает каждый раз когда мы пытаемся отправить какую-то форму
            e.preventDefault(); //отменяем стандартное поведение браузера

            let statusMessage = document.createElement('img'); //создаем элемент для вывода спинера загрузки
            statusMessage.src = message.loading; //добавляем атрибут src с путем к картинке в элемент img
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `; //добавляем стили к созданному нами элементу напрямую
            
            form.insertAdjacentElement('afterend', statusMessage); //добавляем спинер загрузки в форму

            const formData = new FormData(form); //создаем объект для обработки данных с формы и аргументом помещаем туда форму

            const object = {}; //создаем объект для помещения в него данных с формы из объекта formData
            formData.forEach(function(value, key){
                object[key] = value;
            });

            fetch('server.php', {
                method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                body: JSON.stringify(object)    
            }).then(data => data.text())
            .then(data => {
                console.log(data);                //выводим в консоль, то что мы получаем с сервера
                showThanksModal(message.success); //помещаем в блок с информационными сообщениями текст об успешном запросе
                statusMessage.remove();
            }).catch(() => {                      //выводим ошибку
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();                     //очищаем форму после отправки
            });

        });
    }

    // window thanks
    function showThanksModal(message) { 
        const prevModalDialog = document.querySelector('.modal__dialog'); //получаем подложку под модальным окном

        prevModalDialog.classList.add('hide'); //скрываем подложку с модальным окном
        openModal();

        const thanksModal = document.createElement('div'); //создаем новый div
        thanksModal.classList.add('modal__dialog'); //добавляем div-у класс подложки - мы заменили одну подложку на другую
        
        /*Добавляем верстку в новую нами созданную подложку*/
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal); //устанавливаем созданный нами div в элемент modal
        setTimeout(() => { //
            thanksModal.remove(); //удаляем созданный нами div с элемента modal
            prevModalDialog.classList.add('show'); //показываем модальное окно
            prevModalDialog.classList.remove('hide'); //удаляем класс hide
            closeModal(); 
        }, 4000);
    }
























});