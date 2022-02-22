//Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');
//- додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = `bly`;
div.style.color = `red`;
div.style.fontSize = `35px`;
//- додати цей блок в body.
document.body.appendChild(div);
//- клонувати його повністю, та додати клон в body.
document.body.appendChild(div.cloneNode(true));



//- Є масив
let courses = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of courses) {
    let div = document.createElement('div');
    div.innerText =`${course.title} ${course.monthDuration}`;
    document.body.appendChild(div);
}



//- Є масив
//let courses1 = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const course of courses) {
    let div = document.createElement('div');
    let h1 = document.createElement(`h1`);
    h1.innerText = course.title;
    let p = document.createElement('p');
    p.innerText = course.monthDuration;
    div.append(h1,p);

    document.body.appendChild(div);
}