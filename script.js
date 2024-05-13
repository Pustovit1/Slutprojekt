const navbar = document.getElementById("navbar");
const navbarToggle = document.getElementById("navbar-toggle");
const bookList = document.getElementById("book-list");
const bookItem = document.createElement("div");
const bookImage = document.createElement("img");
const bookTitle = document.createElement("h3");
const bookAuthor = document.createElement("p");
const books = [
  {
    title: "Sommar boken",
    author: "Tove Jansson",
    image: "Sommar_boken.jpeg",
    Link: "https://www.goodreads.com/book/show/1865256.Sommarboken?from_search=true&from_srp=true&qid=gA4qiWavvB&rank=1",
  },
  {
    title: "Farenheit451",
    author: "Jane Austen",
    image: "Farenheit_451.jpg",
    Link: "https://www.goodreads.com/book/show/56302573-farenheit-451?ref=nav_sb_noss_l_5",
  },
  {
    title: "Jorden runt på 80 dagar",
    author: "Jane Austen",
    image: "Jorde_runt_på_80_dagar.jpg",
    Link: "https://www.goodreads.com/book/show/34846214-jorden-runt-p-80-dagar?ref=nav_sb_noss_l_8",
  },
  {
    title: "Lesbiska Ligan",
    author: "Mian Lodalen",
    image: "Lesbiska_ligan.jpg",
    Link: "https://www.goodreads.com/book/show/57977988-lesbiska-ligan-en-sann-kriminalhistoria?ref=nav_sb_ss_1_8",
  },
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
  bookList.innerHTML = "";
  books.forEach((book) => {
    bookItem.classList.add("book");
    bookImage.src = `images/${book.image}`;
    bookImage.alt = book.title;
    bookItem.appendChild(bookImage);
    bookImage.addEventListener("click", function () {
      window.open(book.Link, "_blank");
    });
    bookTitle.textContent = book.title;
    bookItem.appendChild(bookTitle);
    bookAuthor.textContent = `Av ${book.author}`;
    bookItem.appendChild(bookAuthor);
    bookList.appendChild(bookItem);
  });
}

window.onload = displayBooks;
