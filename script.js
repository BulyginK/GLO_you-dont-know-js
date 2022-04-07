const book = document.querySelectorAll('.book');
book[0].before(book[1])
book[3].before(book[4])
book[5].after(book[2])


console.log(book);