import { Link } from "react-router-dom";
import { booksByCategory, categories } from "../utils/books.js";
import "./home.css";

function Home() {
  const allBooks = Object.values(booksByCategory).flat();
  const popularBooks = allBooks.filter((book) => book.isPopular);

  return (
    <div className="container">
      <div className="welcome-msg">
        <h1>Welcome to Online Library System</h1>
        <p className="welcome">
          find your favorite books in different categories....📚📚
        </p>
      </div>
      <section className="welcome">
        Categories
        <ul className="category-list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link to={`/books/${cat.category}`} className="category-item">
                {cat.category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <h1 id="Popular">Popular Books</h1>
      <section className="book-card">
        {popularBooks.map((book) => (
          <div key={book.id} className="book">
            <img
              src={book.image}
              alt={book.title}
              width="200px"
              height="200px"
              className="img"
            />
            <p className="popular-text">{book.title}</p>
            <p className="popular-text">{book.author}</p>
            <p className="popular-text">Pages: {book.pages}</p>
            <p className="popular-text">
              Year of Publishment: {book.publishedYear}
            </p>
            <Link to={`/book/${book.id}`} id="view-details">
              View Details
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
