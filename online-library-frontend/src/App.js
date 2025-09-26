import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import BooksList from "./components/BooksList";
import AddBookForm from "./components/AddBookForm";
import BookDetails from "./components/bookDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/add-book" element={<AddBookForm />} />
        <Route path="/book-details" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
