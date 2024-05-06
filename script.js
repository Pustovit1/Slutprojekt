const navbar = document.getElementById("navbar");
const navbarToggle = document.getElementById("navbar-toggle");

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
