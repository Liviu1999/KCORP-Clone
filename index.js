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

// main slider carrousel
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
  if (index == 0) {
    index = 6;
  }
  index--;
  firstImg.src = `${tabImages[index]}`;
});

nextBut.addEventListener("click", () => {
  if (index == 6) {
    index = 0;
  }
  index++;
  firstImg.src = `${tabImages[index]}`;
});

//sliderLeft show in middle
const sliderLeft = document.querySelectorAll(".ima");

sliderLeft.forEach((element) => {
  element.addEventListener("click", (e) => {
    const img = e.target.src;
    firstImg.src = img;
  });
});

const nextBu = document.querySelector("#next-but");
const prevBu = document.querySelector("#prev-but");
const sliderF = document.querySelector(".slider-description-img");

prevBu.addEventListener("click", () => {
  sliderF.scroll({
    top: -500,
    behavior: "smooth",
  });
});

nextBu.addEventListener("click", () => {
  sliderF.scroll({
    top: 500,
    behavior: "smooth",
  });
});
