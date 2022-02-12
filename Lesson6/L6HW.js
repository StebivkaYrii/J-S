// - Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let hellolength = 'hello world';
console.log(hellolength.length);
let loremlength = 'lorem ipsum';
console.log(loremlength.length);
let javascriptlength = 'javascript is cool';
console.log(javascriptlength.length);


//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let helloup = 'hello world';
let upOne = helloup.toLocaleUpperCase();
console.log(upOne);
let loremup = 'lorem ipsum';
let upTwo = loremup.toLocaleUpperCase();
console.log(upTwo);
let javascriptup = 'javascript is cool';
let upthree = javascriptup.toLocaleUpperCase();
console.log(upthree);


//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let helloLower = 'HELLO WORLD';
let LowerOne = helloLower.toLowerCase();
console.log(LowerOne);
let loremLower = 'LOREM IPSUM';
let LowerTwo = loremLower.toLowerCase();
console.log(LowerTwo);
let javascriptLower = 'JAVASCRIPT IS COOL';
let Lowerthree = javascriptLower.toLowerCase();
console.log(Lowerthree);


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   '
let trim = dirty.trim();
console.log(trim)

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let stringToarray =(str) => {
    return str.split(' ');
}
let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
console.log(arr);
document.write(arr)


//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (strr, index) => {
    return strr.substr(0,index)
}
let strr = 'Каждый охотник желает знать';
document.writeln(delete_characters(strr, 7));

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (strin) => {
    let split = strin.split(' ').join('-').toUpperCase();
    return split;
}
let string = "HTML JavaScript PHP";
console.log(insert_dash(string));
document.write(insert_dash(string));


//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstUp = (AA) => {
    if (!AA) return AA
    return AA[0].toUpperCase() + AA.slice(1)
};
document.write(firstUp('Hello okten'));
console.log(firstUp('Hello okten'));


//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (BB) => {
    return BB.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
console.log(capitalize('okten hi you are welcome'));
document.write(capitalize('okten hi you are welcome'));

