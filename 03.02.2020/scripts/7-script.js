 /*
 С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

 */
    
    let a = 0, b = 1, result = b;

    for(let i=0;i<20;console.log(result), a = b, b = result, result = a + b, i++){
    };
    