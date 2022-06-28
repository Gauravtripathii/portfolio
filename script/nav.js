var home = document.querySelector(".home");
var homeBtn = document.querySelector(".home-btn");
var about = document.querySelector(".about");
var aboutBtn = document.querySelector(".about-btn");
var experience = document.querySelector(".experience");
var experienceBtn = document.querySelector(".experience-btn");
var portfolio = document.querySelector(".portfolio");
var portfolioBtn = document.querySelector(".portfolio-btn");

function addTab(tabName) {
  tabName.style.display = "flex";
}

function destroyTab(tabName) {
  tabName.style.display = "none";
}

homeBtn.addEventListener("click", () => {
  addTab(home);
  destroyTab(about);
  destroyTab(experience);
  destroyTab(portfolio);
});

aboutBtn.addEventListener("click", () => {
  addTab(about);
  destroyTab(home);
  destroyTab(experience);
  destroyTab(portfolio);
});

experienceBtn.addEventListener("click", () => {
  addTab(experience);
  destroyTab(home);
  destroyTab(about);
  destroyTab(portfolio);
});

portfolioBtn.addEventListener("click", () => {
    addTab(portfolio);
    destroyTab(home);
    destroyTab(experience);
    destroyTab(about);
  });
