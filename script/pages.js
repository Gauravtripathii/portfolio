var homeBtn = document.querySelector(".home-btn");
var home = document.querySelector(".home");

var aboutBtn = document.querySelector(".about-btn");
var about = document.querySelector(".about");

var portfolioBtn = document.querySelector(".portfolio-btn");
var portfolio = document.querySelector (".portfolio")

homeBtn.style.borderBottom = "2px solid var(--main-color)";

homeBtn.addEventListener("click", () => {
    about.style.display = "none";
    home.style.display = "flex";
    portfolio.style.display = "none";
    homeBtn.style.borderBottom = "2px solid var(--main-color)";
    aboutBtn.style.borderBottom = "none";
    portfolioBtn.style.borderBottom = "none";
});

aboutBtn.addEventListener("click", () => {
    home.style.display = "none";
    about.style.display = "flex";
    portfolio.style.display = "none";
    aboutBtn.style.borderBottom = "2px solid var(--main-color)";
    homeBtn.style.borderBottom = "none";
    portfolioBtn.style.borderBottom = "none";
});

portfolioBtn.addEventListener("click", () => {
    about.style.display = "none";
    home.style.display = "none";
    portfolio.style.display = "flex";
    portfolioBtn.style.borderBottom = "2px solid var(--main-color)";
    aboutBtn.style.borderBottom = "none";
    homeBtn.style.borderBottom = "none";
});