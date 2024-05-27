const navbar = document.getElementById("navbar");
const navbarToggle = document.getElementById("navbar-toggle");
const bookList = document.getElementById("book-list");
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
    author: "Jueles Verne",
    image: "Jorden_runt_på_80_dagar.jpg",
    Link: "https://www.goodreads.com/book/show/34846214-jorden-runt-p-80-dagar?ref=nav_sb_noss_l_8",
  },
  {
    title: "Lesbiska Ligan",
    author: "Mian Lodalen",
    image: "Lesbiska_ligan.jpg",
    Link: "https://www.goodreads.com/book/show/57977988-lesbiska-ligan-en-sann-kriminalhistoria?ref=nav_sb_ss_1_8",
  },
  {
    title: "Lesbiska Ligan",
    author: "Mian Lodalen",
    image: "Lesbiska_ligan.jpg",
    Link: "https://www.goodreads.com/book/show/57977988-lesbiska-ligan-en-sann-kriminalhistoria?ref=nav_sb_ss_1_8",
  },
  {
    title: "Lesbiska Ligan",
    author: "Mian Lodalen",
    image: "Lesbiska_ligan.jpg",
    Link: "https://www.goodreads.com/book/show/57977988-lesbiska-ligan-en-sann-kriminalhistoria?ref=nav_sb_ss_1_8",
  },
  {
    title: "Lesbiska Ligan",
    author: "Mian Lodalen",
    image: "Lesbiska_ligan.jpg",
    Link: "https://www.goodreads.com/book/show/57977988-lesbiska-ligan-en-sann-kriminalhistoria?ref=nav_sb_ss_1_8",
  },
  {
    title: "Lesbiska Ligan",
    author: "Mian Lodalen",
    image: "Lesbiska_ligan.jpg",
    Link: "https://www.goodreads.com/book/show/57977988-lesbiska-ligan-en-sann-kriminalhistoria?ref=nav_sb_ss_1_8",
  },
  {
    title: "Lesbiska Ligan",
    author: "Mian Lodalen",
    image: "Lesbiska_ligan.jpg",
    Link: "https://www.goodreads.com/book/show/57977988-lesbiska-ligan-en-sann-kriminalhistoria?ref=nav_sb_ss_1_8",
  },
];

function navbarResize() {
  if (window.innerWidth <= 820) {
    navbar.style.display = "none";
    navbarToggle.style.display = "flex";
  } else {
    navbar.style.display = "flex";
    navbarToggle.style.display = "none";
    navbar.style.right = "0px";
    navbar.style.flexDirection = "row";
  }
}
// Funktion som minskar navbar till en knapp när skärm storlekt är mindre än 800px (både när sidan laddas och om man byterstorlek på sida)
window.addEventListener("resize", navbarResize);
window.addEventListener("load", navbarResize);

navbarToggle.addEventListener("click", function () {
  if (navbar.style.display === "none") {
    navbar.style.display = "flex";
    navbar.style.right = "110px";
    navbar.style.flexDirection = "column";
    navbarToggle.style.display = "flex";
  } else {
    navbar.style.display = "none";
    navbar.style.flexDirection = "row";
  }
});

function displayBooks() {
  const bookContainer = document.getElementById("book-container");
  const scrollButtons = document.getElementById("scroll-buttons");

  if (!bookContainer) return;

  bookContainer.innerHTML = "";
  books.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book");
    const bookImage = document.createElement("img");
    bookImage.src = `images/${book.image}`;
    bookImage.loading = "lazy";
    bookImage.alt = book.title;
    bookImage.addEventListener("click", function () {
      window.open(book.Link, "_blank");
    });
    bookItem.appendChild(bookImage);
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    bookItem.appendChild(bookTitle);
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Av ${book.author}`;
    bookItem.appendChild(bookAuthor);
    bookContainer.appendChild(bookItem);
  });

  if (bookContainer.scrollWidth > window.innerWidth) {
    bookContainer.classList.add("scrollable");
    scrollButtons.classList.add("scrollable");
  } else {
    bookContainer.classList.remove("scrollable");
    scrollButtons.classList.remove("scrollable");
  }
}

window.onload = displayBooks;

window.addEventListener("resize", displayBooks);

let scrollLeft = document.getElementById("scroll-left");
if (scrollLeft) {
  scrollLeft.addEventListener("click", function () {
    document
      .getElementById("book-container")
      .scrollBy({ left: -200, behavior: "smooth" });
  });
}
let scrollRight = document.getElementById("scroll-right");
if (scrollRight) {
  scrollRight.addEventListener("click", function () {
    document
      .getElementById("book-container")
      .scrollBy({ left: 200, behavior: "smooth" });
  });
}

const userForm = document.getElementById("userForm");
if (userForm) {
  userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const className = document.getElementById("class").value;
    const email = document.getElementById("email").value;

    console.log(firstName, lastName, className, email);

    const table = document
      .getElementById("userTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = firstName;
    cell2.textContent = lastName;
    cell3.textContent = className;
    cell4.textContent = email;
    cell5.textContent = "Medlem";
    document.getElementById("userForm").reset();
  });
}
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      displayMessage("Alla fält är obligatoriska", "error");
    } else {
      displayMessage("Tack för ditt meddelande!", "success");
    }
    document.getElementById("contact-form").reset();
  });

  function displayMessage(message, type) {
    const formMessage = document.getElementById("form-message");
    formMessage.textContent = message;
    formMessage.className = type;
  }
}
