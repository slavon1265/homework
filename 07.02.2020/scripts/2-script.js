/*
Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. 
Добавьте этот гаджет персоне, созданной ранее.
*/
let phone = {};
let person = {
    name: 'John',
    secondName: 'Doe'
}

alert('Давайте создадим телефон и подарим его одной персоне!');

    phone['brand'] = prompt('Введите имя брэнда мобильного устройства (например: Apple):');
    phone['model'] = prompt('Введите модель мобильного устройства (например: Xr Max (Если это Apple)):');
    phone['color'] = prompt('Введите цвет вашего мобильного устройства (например: крассный):');
    phone['price'] = prompt('Введите стоимость мобильного устройства (например: $1000):');

    //If user did forget to enter the value of key, we will ask him again
    for (let key in phone) {
        if(phone[key] === null){
            phone[key] = prompt('Вы забыли ввести ' + key + ', пожалуйста введите его еще раз!');
            key = phone[key];
        }
    }
    

    person['phone'] = phone;
    console.log(person);
   