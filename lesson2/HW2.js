//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time= +prompt("введіть хвилдину від 0 до 59");
if (time>= 0 && time <=14){
    console.log('перша чверть')
} else if (time>= 15 && time <=29){
    console.log('друга чверть')
}else if (time>= 30 && time <=44){
    console.log('третя чверть')
}else if (time>= 45 && time <=59){
    console.log('четверта чверть')
} else {
    console.log('число не відповіда жодному з параметрів спробуйте ще раз')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day= +prompt("введіть день місяця від 1 до 31");
if (day>= 1 && day <=10){
    console.log('перша декада')
}else if (day>= 11 && day <=20){
    console.log('друга декада')
}else if (day>= 21 && day <=31){
    console.log('третя декада')
}else {
    console.log('число не відповіда жодному з параметрів спробуйте ще раз')
}
//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test='tests';
if (test !== true) {
    console.log('ВІРНО')
} else {
    console.log('НЕВІРНО')
}
let test1='tests';
if (test1 === true) {
    console.log('ВІРНО')
} else {
    console.log('НЕВІРНО')
}
//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('Введіть число'); {
    (a !== 0) ? console.log('ВІРНО') : console.log('НЕВІРНО')
}
let a1 = +prompt('Введіть число'); {
    (a1 === 1) ? console.log('ВІРНО') : console.log('НЕВІРНО')
}
let a2= +prompt('Введіть число'); {
    (a2 === 0) ? console.log('ВІРНО') : console.log('НЕВІРНО')
}
let a3 = +prompt('Введіть число'); {
    (a3 === -3) ? console.log('ВІРНО') : console.log('НЕВІРНО')
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let dayOfWeeks = +prompt('Введіть день тижня від 1 до 7')
 switch (dayOfWeeks) {
     case 1:
         console.log('Понеділок, купити продуктів')
         break;
     case 2:
         console.log('Вівторок, почистити подвіря від снігу')
         break;
     case 3:
         console.log('Середа, перевірити чи все гаразд з машиною')
         break;
     case 4:
         console.log('Четвер, замовити снігоочисну магину на роботі')
         break;
     case 5:
         console.log('Пятниця, готуватись до вихідних')
         break;
     case 6:
         console.log('Субота, АНГЛІЙСЬКА')
         break;
     case 7:
         console.log('Неділя, знову АНГЛІЙСЬКА')
         break;
     default:
         console.log("Ти щось не то ввів");
 }
 //- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt('Введіть кількість днів в цьому році');
if(year % 2 === 0){
    console.log('Рік ВИСОКОСНИЙ');
}else {
    console.log('УРА! Наш рік нормальний');
}
//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let js = prompt('Яка «офіційна» назва JavaScript?')
if(js === 'ECMAScript'){
    alert('Правильно!')
}else {
    alert('Неправильно, офіційна назва - ECMAScript!')
}






















