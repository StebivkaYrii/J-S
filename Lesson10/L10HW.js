//1- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
document.getElementById('button').onclick = function (){
    document.getElementById('text').hidden = true;
}



//2- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
document.getElementById('but').onclick = function (){
    document.getElementById('but').hidden = true;
}



//3- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('button1').onclick=function (){
    let age = document.getElementById('age').value;
    if (!age) {
        alert('Введіть вік');
    } else  if (+age <18){
        alert ('Вибачте вам мало років')
    } else {
        alert('Вітаємо на сайті')
    }
}



//4- Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.querySelector('.menu');
let title = menu.querySelector('.title');

title.onclick = function () {
    menu.classList.toggle('hidden');
};



//5- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];
let div_father = document.createElement('div');
for (const item of comments){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('btn');
    let hr = document.createElement('hr');
    h3.innerHTML= item.name;
    p.innerHTML = item.body;
    btn.innerHTML = 'Закрий мене'
    btn.onclick = () =>{
        p.classList.add('pHidden');
    }
    div.append(h3,p,btn);
    div_father.append(div,hr);
}
document.body.appendChild(div_father)