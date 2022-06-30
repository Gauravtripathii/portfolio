var project1 = document.querySelector(".p1");
var transCover1 = document.querySelector(".tc1");
var projectDes1 = document.querySelector(".pd1");
var closeDes1 = document.querySelector(".cd1");
var projectDes1Profile = document.querySelector(".pd1-profile");
var projectDes1Tech = document.querySelector(".pd1-tech");
var detailsTitle1 = document.querySelector(".dt1");
var detailsAbilityTitle1 = document.querySelector(".dat1");
var detailsAbilityTitleDes1 = document.querySelector(".datd1");
var deatilsLink1 = document.querySelector(".dl1");

project1.addEventListener("mouseover", () => {
  transCover1.style.width = "100%";
  transCover1.style.fontSize = "32px";
});
project1.addEventListener("mouseout", () => {
  transCover1.style.width = "0";
  transCover1.style.fontSize = "0";
});
project1.addEventListener("click", () => {
  projectDes1.style.width = "100%";
  projectDes1Profile.style.width = "30%";
  projectDes1Tech.style.fontSize = "28px";
  projectDes1Tech.style.border = "4px solid var(--blue)";
  detailsTitle1.style.fontSize = "40px";
  detailsAbilityTitle1.style.fontSize = "25px";
  detailsAbilityTitleDes1.style.fontSize = "20px";
  deatilsLink1.style.fontSize = "28px";
});
closeDes1.addEventListener("click", () => {
  projectDes1.style.width = "0";
  projectDes1Profile.style.width = "0";
  projectDes1Tech.style.fontSize = "0";
  projectDes1Tech.style.border = "none";
  detailsTitle1.style.fontSize = "0";
  detailsAbilityTitle1.style.fontSize = "0";
  detailsAbilityTitleDes1.style.fontSize = "0";
  deatilsLink1.style.fontSize = "0";
});
