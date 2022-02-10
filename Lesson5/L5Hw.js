//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
let A = (a,b) => {
    return a * b
}
console.log('Площа прямокутника: ' +A(10,20))
document.write('Площа прямокутника: ' +A(10,20))
//- створити функцію яка обчислює та повертає площу кола
let B = (r) => {
    let radius = r **2
    return 3.14 * radius
}
console.log('Площа круга: ' +B(2))
document.write('Площа круга: ' +B(2))
//- створити функцію яка обчислює та повертає площу циліндру
let C =(h,r) => {
    return(2 * 3.14 * r * h);
}
console.log('Площа циліндра: ' +C(5,5));
document.write('Площа циліндра: ' +C(5,5));
//- створити функцію яка приймає масив та виводить кожен його елемент
let DD = [1 ,2 ,3 ,4 ,5 ,'hello ','hello world ','okten'];
let D =(DD) => {
    for (let i=0; i<DD.length; i++){
        document.write(DD[i])
    }
}
D('функція яка приймає масив '+DD)
//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let EE = (text) => {
    for (let i = 0; i <= 10; i++) {
        document.write(`<p>${i} - ${text}</p>`)
    }
}
EE('text')
//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let F = (FF) => {
    document.write(`<li>${FF}</li>`)
    document.write(`<li>${FF}</li>`)
    document.write(`<li>${FF}</li>`)
    document.write(`</ul>`)
}
F('text');
//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let G = (GG,GGg) => {
    document.write(`<ul>`)
    for (let i = 0; i <= GGg; i++) {
        document.write(`<p>${i} - ${GG}</p>`)
    }
    document.write(`</ul>`)
}
G('empty li',3)
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let H =[1,'fdhdfghdfghj',false];
let HH = (HHH) => {
    document.write(`<ol>`)
    for (let i=0;i<HHH.length; i++){
        document.write(`<li>${HHH[i]}</li>`)
    }
    document.write(`</ol>`)
}
HH(H)
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let I=[{id: 1,name: 'Yrii',age: 24},{id: 2, name: 'Ivan',age: 23},{id: 3, name: 'Dima',age: 28}];
let II =(III) =>{
    for (const arrayElement of III) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name}.${arrayElement.age}</div>`)
    }
}
II(I)