import { useParams } from "react-router-dom";
import { booksByCategory } from "../utils/books";
import "./BookDetails.css";

function BookDetails() {
  const { id } = useParams();
  const allBooks = Object.values(booksByCategory).flat();
  const book = allBooks.find((b) => b.id == id);

  if (!book) {
    return <h1>No Books Found</h1>;
  }

  return (
    <div className="bookdetails">
      <img src={book.image} alt={book.title} />
      <p>{book.title}</p>
      <p>Author:{book.author}</p>
      <p>Pages: {book.pages}</p>
      <p>Year : {book.publishedYear}</p>
      <p>Lang: {book.language}</p>
      <p>Rating: {book.rating}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetails;
