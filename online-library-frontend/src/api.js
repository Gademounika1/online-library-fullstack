const BASE_URL = "http://localhost:8080/api"; // your backend URL

// Fetch all books from backend
export const getBooks = async () => {
  const res = await fetch(`${BASE_URL}/books`);
  if (!res.ok) {
    throw new Error(`Failed to fetch books: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

// Add a new book to backend
export const addBook = async (book) => {
  const res = await fetch(`${BASE_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!res.ok) {
    throw new Error(`Failed to add book: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export { BASE_URL };
