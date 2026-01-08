import { useParams, Link } from "react-router-dom";
import { booksByCategory, categories } from "../utils/books.js";
import { useState } from "react";
import "./BrowseBooks.css";

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const books = category
    ? booksByCategory[category] || []
    : Object.values(booksByCategory).flat();

  const searchedBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse">
      <section className="welcome">
        Categories
        <ul className="category-list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                to={`/books/${cat.category}`}
                className={`category-item ${
                  category === cat.category ? "active-category" : ""
                }`}
              >
                {cat.category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="Search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {search && <button onClick={() => setSearch("")}>❌</button>}
      </div>

      <div className="books-cat">
        {searchedBooks.length === 0 ? (
          <p id="error">No books found</p>
        ) : (
          searchedBooks.map((book) => (
            <div key={book.id} className="book">
              <img src={book.image} alt={book.title} className="img" />
              <p className="popular-text">{book.title}</p>
              <p className="popular-text">Author:{book.author}</p>
              <p className="popular-text">Pages: {book.pages}</p>
              <p className="popular-text">Year : {book.publishedYear}</p>
              <Link to={`/book/${book.id}`} id="view-details">
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
