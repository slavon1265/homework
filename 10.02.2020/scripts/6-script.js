/*
Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

*/
let column = [];

for (let i=1; i<=10; i++){

    let row = [];

    for (let j=1; j<=10; j++){
        
        row.push(i + 'x' + j + '=' + i*j);

    }
    column.push(row);
}

console.log(column);