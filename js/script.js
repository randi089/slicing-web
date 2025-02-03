const hamburgerMenuButton = document.querySelector("#hamburger-menu");
const navbar = document.querySelector("#navbar");

hamburgerMenuButton.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
