//1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let el= document.getElementById("main_header");
el.classList.add("name");



//a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let main_header = document.getElementById('main_header');
main_header.innerText = 'Enter the name of your group ';
let textcolor =  document.getElementsByClassName('name');
for (const el of textcolor) {
    el.style.color = 'red';
}



// b) робить шириниу елементу ul 400px
let ui = document.getElementsByTagName("ul");
ui[0].style.width = `400px`;
ui[0].style.border =`1px solid red`;



// c) робить шириниу всіх елементів з класом linkList шириною 50%
let link = document.getElementsByClassName(`linkList`)
for (const linklist of link) {
    linklist.style.width = `50%`;
    linklist.style.border =`1px solid red`;
}



// d) отримує текст який зберігається в елементі з класом listElement2
console.log(document.getElementsByClassName(`listElement2`).innerHTML = '<a href=""><b>NEW TEXT</b></a>');



//e) отримує всі елементи li та змінює ім колір фону на сірий
let backg = document.getElementsByClassName(`linkList`)
for (const linklist of backg) {
    linklist.style.background = `silver`;
    linklist.style.margin = `2px`;
}



// f) отримує всі елементи 'a' та додає їм клас anchor
let aa = document.getElementsByTagName("a");
for (let a of aa) {
     a.classList.add("anchor");
}



// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aaa = document.getElementsByTagName("a");
for (let a of aaa) {
    if (a.innerText === 'link3'){
        a.style.fontSize = `40px`;
    }
}



// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aaaa = document.getElementsByTagName("a");
for (let a of aaaa) {
    let newClass = a.innerText
    a.classList.add(`element_${newClass}`)

}



// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub = document.getElementsByClassName("sub-header")
for (let a of sub){
    a.style.color = prompt(`Enter color: (red, green,blue...)`);
}



// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let sub1 = document.getElementsByClassName("sub-header")
for (let a of sub1){
    if (a.innerText === `content 2 segment`){
        a.style.color = prompt(`Enter color: (red, green,blue...)`);
    }
}



// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName("content_1 ")
content_1[0].innerText = prompt(`<p>nev txt</p>`);



// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName("p")
for (const pp of p){
    pp.style.padding = `20px`;
    pp.style.border = '1px solid red';
}



//  m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let t = document.getElementsByClassName("text2")
t[0].innerText = `ser-2022`;