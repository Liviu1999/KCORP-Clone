const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navbarVert = document.querySelector(".navbarVert");

menu.addEventListener("click", () => {
  const t = true;
  if (t) {
    navbar.classList.toggle("navbarVert");
    t = false;
  } else {
    const nav = navbarVert.classList.toggle("navbar");
    t = true;
  }
});
