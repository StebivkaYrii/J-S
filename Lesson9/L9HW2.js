//- Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menus = ['Main','Products','About us','Contacts'];
let menu = document.getElementsByClassName(`menu`)[0];
for (const item of menus) {
    let li = document.createElement(`li`);
    li.innerText = item
    menu.append(li)
}








