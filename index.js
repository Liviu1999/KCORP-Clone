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

const prevBut = document.querySelector("#prev-but-hor");
const nextBut = document.querySelector("#next-but-hor");
const tabImages = [];
tabImages[0] = "../images/produits/maillot/DSC06822.webp";
tabImages[1] = "../images/produits/maillot/DSC06836-2 (1).webp";
tabImages[2] = "../images/produits/maillot/DSC06850.webp";
tabImages[3] = "../images/produits/maillot/DSC06873.webp";
tabImages[4] = "../images/produits/maillot/DSC06885.webp";
tabImages[5] = "../images/produits/maillot/DSC06899.webp";
tabImages[6] = "../images/produits/maillot/KC_FLAT_04405.webp";
let firstImg = document.querySelector("#first-image");

let index = 6;
prevBut.addEventListener("click", () => {
  console.log("hey");
  if (index == 0) {
    index = 6;
  }
  index--;
  firstImg.src = `${tabImages[index]}`;
});

nextBut.addEventListener("click", () => {
  console.log("hey1");
  if (index == 6) {
    index = 0;
  }
  index++;
  firstImg.src = `${tabImages[index]}`;
});
