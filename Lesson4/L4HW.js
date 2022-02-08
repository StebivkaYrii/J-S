//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function A(a,b){
    let AA=a * b;
    return (AA);
}
console.log(A(10,20));
document.write('Площа Прямокутника: ' +A(10,20));
//- створити функцію яка обчислює та повертає площу кола з радіусом r
function B(r){
    let BBr = r ** 2;
    let BB=3.14 * BBr;
    return(BB);
}
console.log(B(10));
document.write('Площа круга: ' +B(10))
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function C(h,r) {
    let CC = 2 * 3.14 * r * h;
    return(CC);
}
console.log(C(5,5));
document.write('Площа циліндра: ' +C(5,5));
//- створити функцію яка приймає масив та виводить кожен його елемент
let DD = [1 ,2 ,3 ,4 ,5 ,'hello ','hello world ','okten'];
function D(DD){
    for (let i=0; i<DD.length; i++){
       document.write(DD[i])
    }
}
D(DD)
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function EE (text){
    document.write('<p>${text}</p>')
    document.write('<p>${text}</p>')
    document.write(`<hr>`)
    for (let i = 0; i <= 10; i++) {
        document.write(`<p>${i} - ${text}</p>`)
    }
}
EE('text')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function FF(FFF) {
    document.write(`<ul>`)
    document.write(`<li>${FFF}</li>`)
    document.write(`<li>${FFF}</li>`)
    document.write(`<li>${FFF}</li>`)
    document.write(`</ul>`)
}
FF('text');
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function GG(GGG,GGg){
    document.write(`<ul>`)
    for (let i = 0; i <= GGg; i++) {
        document.write(`<p>${i} - ${GGG}</p>`)
    }
    document.write(`</ul>`)
}
GG('empty li',3)
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let H =[1,'2',false];
function HH(HHH){
    document.write(`<ol>`)
    for (let i=0;i<HHH.length; i++){
        document.write(`<li>${HHH[i]}</li>`)
    }
    document.write(`</ol>`)
}
HH(H)
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let I=[{id: 1,name: 'Yrii',age: 24},{id: 2, name: 'Ivan',age: 23},{id: 3, name: 'Dima',age: 28}];
function II(III) {
    for (const arrayElement of III) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name}.${arrayElement.age}</div>`)
    }
}
II(I)









