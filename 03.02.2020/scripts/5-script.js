/*
Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.99. 
Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

*/
for (let i=0; ;i++) {
    let randy = Math.random();
if (randy > 0.99){
    alert(randy + ' -число прервавшее цикл; \n' + i + ' -количество итераций');
    break;
}
}
