import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { categories } from "../utils/books";
import { addBook } from "../utils/bookSlice";
import "./AddBook.css";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    publishedYear: "",
    pages: "",
    language: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.rating ||
      !formData.publishedYear ||
      !formData.pages ||
      !formData.description
    ) {
      alert("Please fill the required feilds");
      return;
    }

    const newBook = {
      id: Date.now().toString(),
      title: formData.title,
      author: formData.author,
      category: formData.category,
      pages: Number(formData.pages),
      publishedYear: Number(formData.publishedYear),
      rating: Number(formData.rating),
      language: formData.language || "English",
      description: formData.description,
      image: formData.image || "/images/default.jpg",
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <div className="addbook-wrapper">
      <form className="addbook-form" onSubmit={handleSubmit}>
        <h1>Add New Book</h1>

        <input
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.category}>
              {cat.category}
            </option>
          ))}
        </select>

        <input
          name="pages"
          type="number"
          placeholder="Pages"
          value={formData.pages}
          onChange={handleChange}
        />

        <input
          name="publishedYear"
          type="number"
          placeholder="Published Year"
          value={formData.publishedYear}
          onChange={handleChange}
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating (0 - 5)"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          name="language"
          placeholder="Language"
          value={formData.language}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Book Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
