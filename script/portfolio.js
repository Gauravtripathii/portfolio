var project1 = document.querySelector(".project1");
var project1Title = project1.childNodes[3];

project1.addEventListener("mouseover", () => {
  project1Title.style.fontSize = "37px";
  project1Title.style.width = "100%";
  project1Title.style.height = "100%";
});
project1.addEventListener("mouseout", () => {
  project1Title.style.fontSize = "0";
  project1Title.style.width = "0";
  project1Title.style.height = "0";
});

// project description part

var project1Close = document.querySelector(".cd1");
var project1Desc = document.querySelector(".project1-desc");
var project1Image = project1Desc.childNodes[1].childNodes[1];
var project1Techs = project1Desc.childNodes[1].childNodes[3];
var project1Details = project1Desc.childNodes[3];

project1Close.addEventListener("click", () => {
  project1Image.style.width = "0";
  project1Image.style.height = "0";
  project1Techs.style.fontSize = "0";
  project1Techs.style.width = "0";
  project1Techs.style.height = "0";
  project1Techs.style.border = "none";
  project1Details.style.display = "none";
  project1Close.style.fontSize = "0";
  project1Desc.style.width = "0";
  project1Desc.style.height = "0";
});

project1.addEventListener("click", () => {
  project1Image.style.width = "90%";
  project1Image.style.height = "45%";
  project1Techs.style.fontSize = "30px";
  project1Techs.style.width = "90%";
  project1Techs.style.height = "45%";
  project1Techs.style.border = "2px solid var(--main-bg)";
  project1Details.style.display = "flex";
  project1Close.style.fontSize = "50px";
  project1Desc.style.width = "100vw";
  project1Desc.style.height = "100vh";
});
