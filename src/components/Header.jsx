import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/books/:category">
        <li>Browse Books</li>
      </Link>
      <Link to="/addbook">
        <li>Add Book</li>
      </Link>
    </>
  );
}

export default Header;
