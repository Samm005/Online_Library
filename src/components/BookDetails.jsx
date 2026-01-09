import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css";

function BookDetails() {
  const { id } = useParams();
  const allBooks = useSelector((state) => state.bookS.books);
  const book = allBooks.find((b) => b.id == id);

  if (!book) {
    return <h1>No Books Found</h1>;
  }

  return (
    <div className="bookdetails-wrapper">
      <div className="bookdetails">
        <img src={book.image} alt={book.title} className="image" />
        <p className="book-text">{book.title}</p>
        <p className="book-text">Author:{book.author}</p>
        <p className="book-text">Pages: {book.pages}</p>
        <p className="book-text">Year : {book.publishedYear}</p>
        <p className="book-text">Lang: {book.language}</p>
        <p className="book-text">Rating: {book.rating}</p>
        <p className="book-text">{book.description}</p>
      </div>
    </div>
  );
}

export default BookDetails;
