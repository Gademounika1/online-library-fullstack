import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../api";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const apiBooks = await getBooks(); // always call backend
        setBooks(apiBooks);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    fetchBooks();
  }, []);

  const viewDetails = (book) => {
    navigate("/book-details", { state: { book } });
  };

  return (
    <div style={styles.container}>
      <h2>Books Collection</h2>
      <div style={styles.grid}>
        {books.map((book) => (
          <div key={book.id} style={styles.card} onClick={() => viewDetails(book)}>
            <img
              src={book.image ? process.env.PUBLIC_URL + "/" + book.image : "https://via.placeholder.com/150x220"}
              alt={book.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{book.title}</h3>
            <p style={styles.author}>by {book.author}</p>
            <p style={styles.details}>
              <strong>Price:</strong> {book.cost ? `$${book.cost}` : "Free"}<br />
              <strong>Rating:</strong> {book.rating || "N/A"} / 5<br />
              <strong>Year:</strong> {book.year || "N/A"}<br />
              <strong>Publisher:</strong> {book.publisher || "N/A"}<br />
              <strong>Availability:</strong> {book.availability || "Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "30px", fontFamily: "Arial, sans-serif", minHeight: "100vh", backgroundColor: "#f0f4f8" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" },
  card: { background: "#fff", borderRadius: "10px", boxShadow: "0 6px 18px rgba(0,0,0,0.1)", padding: "15px", cursor: "pointer", transition: "transform 0.2s" },
  image: { width: "100%", height: "220px", objectFit: "cover", borderRadius: "8px" },
  title: { fontSize: "18px", color: "#003366", margin: "10px 0 5px" },
  author: { fontSize: "14px", color: "#555", marginBottom: "8px" },
  details: { fontSize: "13px", color: "#333" }
};

export default BooksList;
