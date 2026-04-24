import React, { useState } from "react";
import { data } from "../data/BooksData";
import { BookItem } from "../components/BookItem";

export const HomePage = () => {
  const [booksData] = useState(data);

  return (
    <div className="my-12 grid grid-cols-4 w-11/12 mx-auto gap-4">
      {booksData.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
};
