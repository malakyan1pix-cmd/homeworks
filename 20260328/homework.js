class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }

    getInfo(){
        const status = this.isAvailable ? "Available" : "Not available";
        return `${this.title} by ${this.author}, ${this.year} - ${status}`;
    }

    borrowBook(){
        if(this.isAvailable){
            this.isAvailable = false;
        } else {
            return "Book is already borrowed";
        }
    }
    
    returnBook(){
        if(!this.isAvailable){
            this.isAvailable = true;
        } else {
            return "Book is already available";
        }
    }

    matchesAuthor(authorName){
        return this.author.toLowerCase() === authorName.toLowerCase();
    }

    matchesTitle(word){
        return this.title.toLowerCase().includes(word.toLowerCase());
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }

    removeBook(title){
        const index = this.books.findIndex(book => book.title === title);
        if(index !== -1){
            this.books.splice(index, 1);
        } else {
            return "Book not found";
        }
    }

    findBookByTitle(title){
        const book = this.books.find(book => book.title === title);
        return book || null;
    }

    findBooksByAuthor(authorName){
        return this.books.filter(book => book.matchesAuthor(authorName));

    }

    getAvailableBooks(){
        return this.books.filter(book => book.isAvailable);
    }

    borrowBook(title){
        const book = this.findBookByTitle(title);
        if(book){
            return book.borrowBook();
        } else {
            return "Book not found";
        }
    }

    returnBook(title){
        const book = this.findBookByTitle(title);
        if(book){
            return book.retrunBook();
        } else {
            return "Book not found";
        }
    }

    showAllBooks(){
        const res = this.books.map(book => book.getInfo());
        console.log(res);
        return res;
    }

    countBooks(){
        return this.books.length;
    }

    countAvailableBooks(){
        return this.getAvailableBooks().length;
    }

    searchBooks(word){
        return this.books.filter(book => book.matchesTitle(word));
    }

    getOldestBook(){
        if(this.books.length === 0){
            return null;
        }
        let oldest = this.books[0];
        for(let book of this.books){
            if(book.year < oldest.year){
                oldest = book;
            }
        }
        return oldest;
    }

}


const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);


console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");
