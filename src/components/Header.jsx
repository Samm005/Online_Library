import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="nav-container">
      <ul className="nav-bar">
        <Link to="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/books/:category">
          <li className="nav-item">Browse Books</li>
        </Link>
        <Link to="/addbook">
          <li className="nav-item">Add Book</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
