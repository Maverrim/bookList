// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const SoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '45545'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '3434343'
            }
        ];

        const books = SoredBooks;

        books.forEach(book => UI.addBookToList(book));
    }

     static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
     }
}
// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // instantiate book
    const book = new Book(title, author, isbn);
    console.log(book);

    if ((title && author) === "") {
        alert('Please fullfill inputs :)')
    } else {
        UI.addBookToList(book);
    }
    
})
// Event: Remove a Book

