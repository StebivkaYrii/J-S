//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let num1 =(num[0]+num[1]+num[2]+num[3]+num[4]+num[5]+num[6]+num[7]+num[8]+num[9]);
console.log(num);
console.log(num1);
//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book ={
    title: 'Janichar',
    page: 320,
    Fantasy: 'Fantasy'
}
console.log(book)
//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book1 ={
    title: 'Three Act Tragedy',
    page: 288,
    Fantasy: 'Tragedy',
    author: 'Agatha Christie'
}
console.log(book1)

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books =[book,book1]
console.log(books)

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
let height=(24);
let width=(10);
let s = (height*width);
console.log(s);

//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
let heightC=(10);
let dC=(4);
let PI = (3.14);
let v = (PI*dC*heightC);
console.log(v);
//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n=(3);
let m=(4);
let k=(n**2+m**2);
Math.sqrt(k)
console.log(Math.sqrt(k));
