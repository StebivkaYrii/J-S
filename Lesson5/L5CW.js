//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let A = (num1, num2, num3) =>{
    if (num1<num2 && num1<num3){
        document.write(num1);
        console.log(num1);
    }else if(num2<num1 && num2<num3){
        document.write(num2);
        console.log(num2);
    }else {
        document.write(num3);
        console.log(num3);
    }
}
A(100,50,101)
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let B = (num1, num2, num3) => {
    if (num1>num2 && num1>num3){
        document.write(num1);
        console.log(num1);
    }else if(num2>num1 && num2>num3){
        document.write(num2);
        console.log(num2);
    }else {
        document.write(num3);
        console.log(num3);
    }
}
B(100,50,101)
//- створити функцію яка повертає найбільше число з масиву
let C=[1,555,666,2,777,165,223,100]
let CC = (CCC) => {
    let max=CCC[0];
    for(const element of CCC){
        if(element >max){
            max=element
        }
    }
    return max;
}
document.write(`<h2>Найбільший елемент масиву: ${CC(C)}</h2>`)
//- створити функцію яка повертає найменше число з масиву
let D=[1,555,666,2,777,165,223,100]
let DD = (DDD) => {
    let min=DDD[0];
    for(const element of DDD){
        if(element < min){
            min=element
        }
    }
    return min;
}
document.write(`<h2>Найменший елемент масиву: ${DD(D)}</h2>`)
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let E=[100,2,10];
let EE = (EEE) =>{
    let sum =0;
    for (const Eeee of EEE){
        sum += Eeee;
    }
    return sum
}
document.write(EE(E))
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let F=[1,2,3];
let f = (ff) => {
    let sum=0;
    for (const fff of ff){
        sum+=fff;
    }
    return sum/ff.length
}
document.write('середнє арифметичне' +f(F))
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let z = (...arg) => {
     let min = arg[0];
     let max = arg[0];
     for (const element of arg) {
         if (element > max) {
             max = element;
         }
         if (element < min) {
             min = element;
         }
     }
     console.log("max ", max);
     return min;
 }
 document.write('Мінімальне число з введених: ' + z(100, 20, 3, 100, 2021))
// - створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.- створити функцію яка заповнює масив рандомними числами
let funRandom = (length) => {
    let frun = [];
    for(let i=0;i<length;i++){
        frun.push(Math.floor(Math.random() * 100));
    }
    return frun ;
}
document.write(funRandom(10))
//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomNumber =(length,limit) => {
    let  qqq=[];
    for (let i=0;i<length; i++){
        qqq.push(Math.round(Math.random() * limit));
    }
    return qqq;
}
document.write(randomNumber(10,100));
//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let templateBack =[2,17,13,6,22,31,45,66,100,-18];
let reverse = (arr) => {
    let newArr = [];
    for (let i =arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri]=arr[i];
    }

    return newArr;
}

document.write(reverse(templateBack));














