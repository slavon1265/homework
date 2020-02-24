/*
Создайте массив из минимум 100 случайных целых чисел. Переберите массив и сгенерируйте на его основе новый, 
который содержит только уникальные (неповторяющиеся) значения исходного массива. Решите, используя только цикл for.

*/

let arr =[];
let uniqArr = [];


for (i=0; i<100; i++){
    arr.push(Math.round(Math.random()*10)*Math.round(Math.random()*10));
  
}
//Решил выполнить задание не используя оператор rest.
for (let i=0; i<arr.length;i++){
    var count = false;
    
    for (let j=arr.length-1;j<arr.length && j > 0;){
        if (j == i){
            j--;
        }
        if (arr[i] == arr[j]){
            count = true;
            break;
        }else{
            j--;
        }
    }

    if (count == false){
        uniqArr.push(arr[i]);
        
    }
    
}



console.log(arr);
console.log(uniqArr);