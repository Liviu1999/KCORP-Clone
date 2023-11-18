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
let nextBis = true;
let prevBis = false;

prevBu.addEventListener("click", () => {
  if (prevBis) {
    sliderF.scroll({
      top: -500,
      behavior: "smooth",
    });
    prevBis = false;
    nextBis = true;
  } else {
    sliderF.scroll({
      top: 500,
      behavior: "smooth",
    });
    prevBis = true;
    nextBis = false;
  }
});

nextBu.addEventListener("click", () => {
  if (nextBis) {
    sliderF.scroll({
      top: 500,
      behavior: "smooth",
    });
    nextBis = false;
    prevBis = true;
  } else {
    sliderF.scroll({
      top: -500,
      behavior: "smooth",
    });
    nextBis = true;
    prevBis = false;
  }
});

//zoom on main slider

const contImg = document.querySelector(".container-images-description");

contImg.addEventListener("mousemove", (event) => {
  const clientX = event.clientX - event.target.offsetLeft;
  const clientY = event.clientY - event.target.offsetTop;

  firstImg.style.transformOrigin = `${clientX - 160}px ${clientY - 50}px`;
  firstImg.style.transform = `scale(1.5)`;
  //firstImg.style.overflow = "visible";
});

contImg.addEventListener("mouseleave", () => {
  firstImg.style.transformOrigin = `center`;
  firstImg.style.transform = `scale(1)`;
  prevBut.style.zIndex = "99";
});
