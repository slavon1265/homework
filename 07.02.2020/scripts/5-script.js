/*
Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью методов браузера добавьте ее на страницу 
со всеми атрибутами, читая значения свойств из созданного объекта.

*/

let img = {
    src: "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
    alt: "",
    style: "border: 1px solid #ccc",
    width:"200",
};

let imgElement = document.createElement('img');
document.body.appendChild(imgElement);

for (let key in img){
    if (img[key] === "" || img[key] === null || img[key] === undefined) img[key] = "unset";

    imgElement.setAttribute(key, img[key]);
}
