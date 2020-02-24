/*
Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
*/

let arr = ['AngularJS', 'jQuery'];
arr.unshift('BackboneJS');
arr.push('ReactJS', 'Vue.js');
arr.splice(1, 0, 'CommonJS');

for (let i =0; i < arr.length; i++){

    if (arr[i] == 'jQuery'){

        alert(arr[i] + ' - Это здесь лишнее');
        arr.splice(i, 1);
        break;

    };
    
}