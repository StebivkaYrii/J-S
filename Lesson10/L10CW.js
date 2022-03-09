//1- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let div_one = document.createElement('div');
div_one.innerText = 'перший';
div_one.style.margin = '20px';
document.body.appendChild(div_one)
let div_two = document.createElement('div');
div_two.innerText = 'другий';
div_two.style.margin = '20px';
document.body.appendChild(div_two);

let form_one = document.createElement('form');
form_one.setAttribute('name','form_one');
div_one.appendChild(form_one);

let form_two = document.createElement('form');
form_two.setAttribute('name', 'form_two');
div_two.appendChild(form_two);


let input_one = document.createElement('input');
input_one.setAttribute('name','input_one');

let input_two = document.createElement('input');
input_two.setAttribute('name','input_two');

let input_three = document.createElement('input');
input_three.setAttribute('name','input_three');

let input_four = document.createElement('input');
input_four.setAttribute('name','input_four');


let button = document.createElement('button');
button.innerText = 'Батько наш Бандера';
document.body.appendChild(button);

form_one.append(input_one,input_two);
form_two.append(input_three,input_four);

button.addEventListener('click', function (){
    console.log(document.forms.form_one.input_one.value);
    console.log(document.forms.form_one.input_two.value);
    console.log(document.forms.form_two.input_three.value);
    console.log(document.forms.form_two.input_four.value);
})



//2- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let aaa = document.createElement('input');
let sss = document.createElement('input');
let ddd = document.createElement('input');
let fff = document.createElement('button');
fff.innerText = 'Сформувати таблицю';
document.body.append(aaa,sss,ddd,fff);
fff.addEventListener('click', function (){
    let qqq = aaa.value;
    let www = sss.value;
    let eee = ddd.value;
    function add(qqq,www,eee) {
        let table = document.createElement('table');
        let div_table = document.createElement('div');

        table.style.border = '1px solid red';
        div_table.appendChild(table);
        document.body.appendChild(div_table);

        for (let i=0; i < qqq; i++){
            let qqq = document.createElement('qqq');
            qqq.style.border = '1px solid blue';
            for(let q=0; q < www; q++){
                let www = document.createElement('www');
                www.style.border = '1px solid green';
                www.innerText = `${eee}`;
                table.appendChild(qqq);
                qqq.appendChild(www);
            }
        }
    }
    add(qqq,www,eee);
})



//- Сворити масив не цензурних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let mats = ['дурак','падлюка','москаль'];
let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'перевірка';
document.body.append(inp,btn);

btn.addEventListener('click', function () {
    let  val = inp.value;

    for (let mat of mats){
        if (mat === val) {
            alert('nonono');
            inp.value = '';
            return
        }
    }
    if (val) {
        alert('Yes');
        inp.value = '';
    }
})