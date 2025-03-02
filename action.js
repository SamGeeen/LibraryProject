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
addBook("War and Peace","Leo Tolstoy",1225)
addBook("The Lord of the Rings","J.R.R. Tolkien",1178)



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
    function addBookCard(book){
        addBook(book.title,book.author,book.pagesCount)
        displayBookCard(book)
    }
    function newBook(event){
        const title = document.querySelector("#title-text").value
        const author = document.querySelector("#author-text").value
        const pagesCount = document.querySelector("#pages-counter").value
        
        const tmpBook = new Book(title,author,pagesCount)
        addBookCard(tmpBook)
        event.preventDefault()
        console.log(booksList) 

    }
    const newBookButton = document.querySelector("#new-book-button")
    newBookButton.addEventListener("click",newBook)

   function  displayAllBooks(){
        booksList.forEach(function (book){
            displayBookCard(book)
        })
    }
    displayAllBooks()

 
