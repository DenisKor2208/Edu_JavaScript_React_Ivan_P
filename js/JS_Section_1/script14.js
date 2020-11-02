/*14 урок. Циклы.*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}

let nums = 50;
do {
    console.log(nums);
    nums++;
}
while (nums < 55);

let numsf = 50;
for (let i = 1; i < 8; i++) {
    console.log(numsf);
    numsf++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) { //прервать выполнение цикла по условию
        //break;
        continue;
    }
    console.log(i);
}