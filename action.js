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



//Presentation Layer
const container = document.querySelector(".books-cards-wrapper")
 
function displayBookCard(book){
   
    //addBook(book.title,book.author,book.pagesCount)
    
    const template = document.querySelector(".card-template")
    
    const node = document.importNode(template,true)

    node.classList.remove("card-template")
    
   // node.querySelector(".book-title").textContent =book.title
   // node.querySelector(".book-author").textContent= book.author
   // node.querySelector(".book-pages-count").textContent = book.pagesCount
    
    node.getElementsByClassName("book-title")[0].textContent = book.title
    node.getElementsByClassName("book-author")[0].textContent = book.author
    node.getElementsByClassName("book-pages-count")[0].textContent = book.pagesCount
    

    console.log(node.getElementsByClassName("book-title")[0])
    container.appendChild(node)

    }
const tmpBook = new Book("War and Peace", "Leo Tolestoy",1225)

displayBookCard(tmpBook)

 
