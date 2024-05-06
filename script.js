const navbar = document.getElementById("navbar");
const navbarToggle = document.getElementById("navbar-toggle");
const books = [
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

window.addEventListener("resize", function () {
  if (window.innerWidth <= 760) {
    navbar.style.display = "none";
    navbarToggle.style.display = "block";
  } else {
    navbar.style.display = "block";
    navbarToggle.style.display = "none";
  }
});

navbarToggle.addEventListener("click", function () {
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});

function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  books.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book");
    bookItem.innerHTML = `<h3>${book.title}</h3><p>Av ${book.author}</p>`;
    bookList.appendChild(bookItem);
  });
}
window.onload = displayBooks;
