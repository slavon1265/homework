/*
Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, 
добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS).

*/

var person = {};

while(true){
    let property = prompt('Enter the property for person', '');

    if(property === null){
        property = '';
        break;
    }

    let propertyName = prompt('Enter the value for ' + property + ' for person', '');

   person[property] = propertyName;
}

console.log(person);

let container = document.querySelector('.container');
let dl = document.createElement('dl');
container.appendChild(dl);

for (let key in person){

    let dt = document.createElement('dt');
    dt.innerText = key;

    let dd = document.createElement('dd');
    dd.innerText = person[key];

    dl.appendChild(dt);
    dl.appendChild(dd);
}
  
