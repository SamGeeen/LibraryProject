//Data Layer
const booksList = []

function Book(title,author,pagesCount){
    this.title = title
    this.author = author
    this.pagesCount = pagesCount
    this.isRead = false;
}
Book.prototype.readTheBook = function () {
    this.isRead = true
}



let book1 = new Book("Atomic habits","Richard Faynman",241)
book1.readTheBook();
booksList.push(book1)
console.dir(booksList)

//Presentation Layer