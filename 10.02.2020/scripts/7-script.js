/*
Создайте структуру(ы) для хранения данных, из которых можно составить таблицу соответствия значениям переменной (value) в 
логическом контексте (истина, ложь). Изобразите на странице.

*/


let arrOfValues= [ '', true, false, 1, 0, "", '1', '0', null, undefined, {}, [], NaN];
let arrInTable = ['if(condition)'];
let table = document.createElement('table');
document.body.appendChild(table);

for(let i=1; i<arrOfValues.length; i++){
    arrInTable.push(arrOfValues[i]);
}

//debugger;
for(let rows=1; rows<=2; rows++){

    let tableTR = document.createElement('tr');
    table.appendChild(tableTR);
    
    if(rows==1){
    
        for(let i=0; i<arrOfValues.length; i++){

            let tableTD = document.createElement('td');
            tableTR.appendChild(tableTD);        
            if(i!=0)tableTD.innerText = JSON.stringify(arrOfValues[i]);

        }

    }
    if(rows==2){

        
        for(let i=0; i<arrOfValues.length; i++){
            
            let tableTD = document.createElement('td');
            tableTR.appendChild(tableTD);        
            if(i===0) tableTD.innerText = arrInTable[i];
           
            if(i!==0 && Boolean(arrOfValues[i])) tableTD.style.background = '#9affa7';
            if(i!==0 && Boolean(!arrOfValues[i])) tableTD.style.background = '#ff8080';
         }

    }
    

        

}

