/*
Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. Разбейте ее на массив слов, и переставьте слова в 
правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в 
alert исходный и итоговый варианты.

*/

let stringy = 'как однажды Жак звонарь сломал городской фонарь';
//              0     1     2    3      4         5        6

stringy = stringy.split(/\s/g);

for (let i=0; i<stringy.length; i++){

  stringy[i] = stringy[i].charAt(0).toUpperCase() + stringy[i].substr(1).toLowerCase();

};

stringy.splice(4,0,stringy[5]);

stringy.splice(6,1);


console.log (stringy);

