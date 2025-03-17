import React, { useEffect, useState } from "react";

const fetchBookCover = async (isbn) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
  );
  const data = await response.json();
  return data.items?.[0]?.volumeInfo?.imageLinks?.thumbnail || "";
};

const BookCard = ({ book }) => {
  const [cover, setCover] = useState("");

  useEffect(() => {
    fetchBookCover(book.isbn).then(setCover);
  }, [book.isbn]);

  return (
    <div className="border rounded-2xl p-4 shadow-lg w-64">
      <img
        src={cover}
        alt={book.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{book.title}</h2>
      <p className="text-sm text-gray-700">{book.authors.join(", ")}</p>
    </div>
  );
};

export default BookCard;
