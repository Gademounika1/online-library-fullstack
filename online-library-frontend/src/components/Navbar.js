import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      {/* Left side - Logo / Title */}
      <div style={styles.left}>
        <h2 style={styles.title}>Library Management</h2>
      </div>

      {/* Right side - Menu */}
      {loggedInUser && (
        <div style={styles.right}>
          <Link style={styles.link} to="/dashboard">Dashboard</Link>
          <Link style={styles.link} to="/books">Books</Link>
          <Link style={styles.link} to="/add-book">Add Book</Link>
          <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#003366", // Blue background
    color: "#fff",
  },
  left: {
    fontWeight: "bold",
  },
  title: {
    margin: 0,
    color: "#fff",
    fontSize: "24px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  logoutBtn: {
    padding: "5px 10px",
    backgroundColor: "#fff",
    color: "#003366",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;
