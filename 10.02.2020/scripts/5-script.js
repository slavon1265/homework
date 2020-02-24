/*
Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение 
добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
*/

let arr =[];
let sum =0;
while (true){

    let value = prompt ('Enter the any value');
    
    if (value==null || value==undefined){
        break;
    } if (value-0 == value){ //проверяю что введено число
        value -= 0;          //привожу к числу
    } 
    
    arr.push(value);
    console.log(arr);
    
}

let n = arr.length;

for (i=0; i<n; i++){
    if (arr[i]+0 != arr[i]) arr[i] = 0;
    sum += arr[i];
};
alert(sum);