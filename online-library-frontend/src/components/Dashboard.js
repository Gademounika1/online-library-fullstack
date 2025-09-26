import React, { useState, useEffect } from "react";

// 10 sample books
const sampleBooks = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Book Title ${i + 1}`,
  author: `Author ${i + 1}`,
  cost: 150 + i * 20,
  rating: (Math.random() * 2 + 3).toFixed(1),
  img: `book${i + 1}.jpg`,
}));

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(sampleBooks);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Library Dashboard</h1>
      <div style={styles.grid}>
        {books.map((book) => (
          <div key={book.id} style={styles.card}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${book.img}`}
              alt={book.title}
              style={styles.bookImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${process.env.PUBLIC_URL}/images/book1.jpg`; // fallback
              }}
            />
            <div style={styles.textContainer}>
              <h3 style={styles.title}>{book.title}</h3>
              <p style={styles.author}>Author: {book.author}</p>
              <p style={styles.cost}>Cost: ₹{book.cost}</p>
              <p style={styles.rating}>Rating: {book.rating} ⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f5",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    color: "#003366",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "200px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
  },
  bookImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },
  textContainer: {
    padding: "10px",
    textAlign: "center",
  },
  title: {
    fontSize: "16px",
    margin: "5px 0",
    color: "#003366",
  },
  author: {
    fontSize: "14px",
    margin: "2px 0",
    color: "#555",
  },
  cost: {
    fontSize: "14px",
    margin: "2px 0",
    color: "#006400",
  },
  rating: {
    fontSize: "14px",
    margin: "2px 0",
    color: "#FFA500",
  },
};

export default Dashboard;
