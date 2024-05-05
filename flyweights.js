class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

let books = new Map();
const bookList = [];

let createBook = (title, author, isbn) => {
  const existingBook = books.has(isbn);

  if (existingBook) {
    // console.log(books.get(isbn));
    return books.get(isbn);
  }

  const book = new Book(title, author, isbn);

  books.set(isbn, book);
  return book;
};

let addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    availability,
    sales,
    // isbn,
  };
  bookList.push(book);
  return book;
};

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log(bookList);
console.log(books);
