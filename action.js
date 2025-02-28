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

function addBook(title,author,pagesCount){
    const newBook = new Book(title,author,pagesCount)
    booksList.push(newBook)
}

addBook("Pride and Prejudice","Jane Austen",242)
addBook("One hundered years of solitude","Gabriel Garcia Marquez",233)

console.dir(booksList)

//Presentation Layer