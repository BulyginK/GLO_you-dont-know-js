const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const title = document.querySelectorAll('[target="_blank"]')

// 1.Восстановить порядок книг
book[0].before(book[1])
book[3].before(book[4])
book[5].after(book[2])

// 2.Заменить картинку заднего фона на другую из папки image
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 3.Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
title[4].innerHTML = 'Книга 3. this и Прототипы Объектов';


console.log(title);

