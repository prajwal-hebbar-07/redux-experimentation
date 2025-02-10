// Immutability exercise

import { produce } from "immer";

// Change the price and rating using immutable object
const book = {
  author: "Robert Kiyosaki",
  book: {
    name: "Rich Dad Poor Dad",
    price: "$7",
    rating: 4.7,
  },
};

const updatedBook = produce(book, (prevBook) => {
  (prevBook.book.price = "$10"), (prevBook.book.rating = 4.8);
});

console.log("Book: ", book);
console.log("Updated Book: ", updatedBook);

// Change Book2 to Book4 using immutable arrays
const books = ["Book1", "Book2", "Book3"];

const updatedBooks = books.map((book) => (book === "Book2" ? "Book4" : book));

console.log("Books: ", books);
console.log("Updated Books: ", updatedBooks);
