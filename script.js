const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const title = document.querySelectorAll('[target="_blank"]');
const banner = document.querySelector('.adv');
const liBook2 = book[0].querySelectorAll('li');
const liBook5 = book[5].querySelectorAll('li');
const liBook6 = book[2].querySelectorAll('li');
const newСhapterBook6 = liBook6[8].cloneNode();

book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

title[4].innerHTML = 'Книга 3. this и Прототипы Объектов';

banner.style.display = 'none';

liBook2[4].before(liBook2[6]);
liBook2[4].before(liBook2[8]);
liBook2[10].before(liBook2[2]);
liBook5[3].before(liBook5[9]);
liBook5[6].before(liBook5[2]);
liBook5[8].before(liBook5[5]);

newСhapterBook6.innerHTML = 'Глава 8: За пределами ES6';
liBook6[8].after(newСhapterBook6);