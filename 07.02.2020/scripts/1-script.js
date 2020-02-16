/*Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте 
наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, 
которое также запрашивается из prompt.
*/

let person = {
    firstName: 'John',
    secondName: 'Doe',
    phone: '012-34-56-789',
    country: 'Ukraine',
    city: 'Kharkiv',
    birthDate: '01-01-2000',
};
while(true){
    let checkVar = prompt('Проверьте наличие свойства в обьекте, например \'firstName\', покажет \'true\' - что означает что такое свойство есть.', '');
    if (checkVar in person){
        alert(true + ' -Это означает, что свойство ' + checkVar + ' присутсвует в обьекте, попробуйте ввести другое чтобы ввести его в обьект.');

    }if (checkVar === '' || checkVar === null){
        alert('Хорошо, может в другой раз')
        break;

    }if (checkVar !== '' && (checkVar in person) == false){ //Check that variable check not empty and do not exist in 'person' object.

        let newKey = prompt('Такого свойства нету, чтобы добавить его, присвойте ему значение:');
            
            if (newKey === '' || newKey == null){
                alert('Ну и не надо!');
                break;
            }else{
                person[checkVar] = newKey;
                console.log(person);
                break;
            }

    }

}
