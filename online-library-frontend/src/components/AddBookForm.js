import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cost, setCost] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [availability, setAvailability] = useState("Available");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      cost,
      rating,
      image,
      year,
      publisher,
      availability,
    };

    try {
      await addBook(newBook); // direct backend call
      alert(`Book "${title}" added successfully!`);
      navigate("/books"); // go to books list after adding
    } catch (err) {
      console.error(err);
      alert("Failed to add book. Please check backend connection.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <input type="number" placeholder="Cost ($)" value={cost} onChange={(e) => setCost(e.target.value)} />
        <input type="number" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" />
        <input type="text" placeholder="Year of Publication" value={year} onChange={(e) => setYear(e.target.value)} />
        <input type="text" placeholder="Publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
        <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
          <option value="Available">Available</option>
          <option value="Checked Out">Checked Out</option>
        </select>
        <input type="text" placeholder="Image file name (e.g., book1.jpg)" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit" style={styles.submitButton}>Submit Book</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "450px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    marginTop: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "15px",
  },
  submitButton: {
    padding: "10px",
    background: "#003366",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default AddBookForm;
