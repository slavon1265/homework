/*
Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.
*/
while(true){
    let conf = confirm('Останови этот порочный круг нажав окей');
   if (conf == true){
       break;
   }
}
