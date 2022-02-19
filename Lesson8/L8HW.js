//- Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
console.log(document.getElementById('content').innerText);
//-- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules').innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
console.log(document.getElementById('content').innerText ='<b>TEST TEST TEST lorem ipson beauty tooday</b>');
// -- замініть текст параграфа з id 'rules' на будь-який інший
console.log(document.getElementById('rules').innerText ='<h1>Декілька правил виконання ДЗ в OKTEN SCHOOL</h1>');
//-- змініть кожному елементу колір фону на червоний
// console.log(document.body.children.style.backgroundColor = 'red')
let background =  document.body.children;
for (const el of background) {
    el.style.backgroundColor = 'red';
}
//-- змініть кожному елементу колір тексту на синій
let textcolor =  document.body.children;
for (const el of textcolor) {
    el.style.color = 'blue';
}
//    -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);
//-- поміняти колір тексту у всіх елементів fc_rules на червоний
let textcolorfcrules  =  document.getElementsByClassName('fc_rules');
for (const el of textcolorfcrules) {
    el.style.color = 'red';
}