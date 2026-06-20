class Book{
    #title;
    #author;
    #year;
    #isAvailable

    constructor(title, author, year){
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#isAvailable = true;
    }

    get title(){
        return this.#title;
    }
    set title(value){
        if(value.trim() === ""){
            throw new Error("Title cannot be empty");
    }
        this.#title = value;
    }
    get author(){
        return this.#author;
    }
    set author(value){
        if(value.trim() === ""){
            throw new Error("Author cannot be empty");
    }
    this.#author = value;
    }
    get year(){
        return this.#year;
    }
    set year(value){
        if(typeof value !== "number" && value <= 0){
            throw new Error("Year must be a positive number");
    }
        this.#year = value;
    }
    get isAvailable(){
        return this.#isAvailable;
    }

    borrowBook(){
        if (this.#isAvailable) {
            this.#isAvailable = false;
            return "Book borrowed successfully";
        } else {
            return "Book is not available";
        }
    }

    returnBook(){
        if(!this.#isAvailable){
            this.#isAvailable = true;
            return "Book returned successfully";
        } else {
            return "Book is already available";
        }
    }

    matchesTitle(word){
        return this.#title.toLowerCase().includes(word.toLowerCase());
    }

    getInfo(){
        return `Title: ${this.#title},
        Author: ${this.#author},
        Year: ${this.year},
        Available: ${this.#isAvailable ? "Yes" : "No"}`
    }
}


class Reader{
    #name;
    #borrowedBooks;

    constructor(name){
        this.#name = name;
        this.#borrowedBooks = [];
    }

    get name(){
        return this.#name;
    }
    set name(value){
        if(value.trim() === ""){
            throw new Error("Name cannot be empty");
        }
        this.#name = value;
    }
    get borrowedBooks(){
        return this.#borrowedBooks;
    }
    get borrowedBooksCount(){
        return this.#borrowedBooks.length;
    }

    takeBook(book){
        if(book.isAvailable){
            book.borrowBook();
            this.#borrowedBooks.push(book);
        } else {
            return "Book is not available";
        }
    }

    giveBackBook(book){
        if(this.#borrowedBooks.includes(book)){
            this.#borrowedBooks = this.#borrowedBooks.filter(b => b !== book);
            book.returnBook();
        } else {
            return "Reader doesn't have this book";
        }
    }

    hasBook(book){
        return this.#borrowedBooks.includes(book);
    }

    showBorrowedBooks(){
        return this.#borrowedBooks.map(book => book.title);
    }

    getInfo(){
        return `${this.name} has ${this.#borrowedBooks.length} borrowed books`;
    }
}


class Library{
    #name;
    #books;
    #readers;

    constructor(name){
        this.#name = name;
        this.#books = [];
        this.#readers = [];
    }

    get name(){
        return this.#name;
    }
    set name(value){
        if(value.trim() === ""){
            throw new Error("Name cannot be empty");
        }
        this.#name = value;
    }
    get books(){
        return this.#books;
    }
    get readers(){
        return this.#readers;
    }

    addBook(book){
        if(!(this.#books.includes(book))){
            this.#books.push(book);
        } else {
            return "The book is already in the library";
        }
    }

    registerReader(reader){
        if(!(this.#readers.includes(reader))){
            this.#readers.push(reader);
        } else {
            return "The reader is already in the library";
        }
    }

    findBookByTitle(title){
        const book = this.#books.find(book => book.title === title);
        return book || null;
    }

    findBooksByAuthor(authorName){
        return this.#books.filter(book => book.author === authorName);
    }

    giveBookToReader(title,reader){
        const book = this.#books.find(b => b.title === title);
        if(book){
            return reader.takeBook(book);
        } else {
            return "The book is not in the library";
        }
    }

    acceptBookFromReader(title, reader){
        const book = reader.borrowedBooks.find(b => b.title === title);
        if(book){
            return reader.giveBackBook(book);
        } else {
            return "Book is missing";
        }
    }

    showAvailableBooks(){
        return this.#books.filter(book => book.isAvailable);
    }

    showAllBooks(){
        return this.#books.map(book => book.getInfo());
    }

    getLibraryInfo(){
        return `${this.name}: ${this.#books.length} books, ${this.#readers.length} readers`;
    }
}


const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);



console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());