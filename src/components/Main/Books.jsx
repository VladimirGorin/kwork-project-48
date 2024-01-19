import React from "react";
import Title from "./Title";
import "./main.css";

export default function Books({ books }) {
  const renderBooks = books.map((category, index) => (
    <div key={index}>
      <Title title={category.title} />
      <div className="books">
        <div className="books__body">
          {category.books.map((book, bookIndex) => (
            <img
              key={bookIndex}
              src={require(`./../../assets/images/books/${book}`)}
              alt={book}
            />
          ))}
        </div>
      </div>
    </div>
  ));

  return renderBooks;
}
