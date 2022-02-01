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