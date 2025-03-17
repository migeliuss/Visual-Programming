import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const fetchBooks = async () => {
    const response = await fetch("https://fakeapi.extendsclass.com/books");
    return response.json();
};

const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks().then(setBooks);
    }, []);

    return (
        <div className="container">
            <h1>Каталог книг</h1>
            <div className="book-list">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default App;
