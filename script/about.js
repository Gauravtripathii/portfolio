var profile = document.querySelector(".profile");
var profileImg = profile.firstElementChild;
var profileTxt = profile.childNodes[3];

profile.addEventListener("mouseover", () => {
  profileImg.style.width = "0";
  profileImg.style.height = "0";
  profileTxt.style.fontSize = "60px";
});
profile.addEventListener("mouseout", () => {
  profileImg.style.width = "150px";
  profileImg.style.height = "150px";
  profileTxt.style.fontSize = "0";
});

var experience = document.querySelector(".experience");
var experienceImg = experience.firstElementChild;
var experienceTxt = experience.childNodes[3];

experience.addEventListener("mouseover", () => {
  experienceImg.style.width = "0";
  experienceImg.style.height = "0";
  experienceTxt.style.fontSize = "60px";
});
experience.addEventListener("mouseout", () => {
  experienceImg.style.width = "150px";
  experienceImg.style.height = "150px";
  experienceTxt.style.fontSize = "0";
});

var skills = document.querySelector(".skills");
var skillsImg = skills.firstElementChild;
var skillsTxt = skills.childNodes[3];

skills.addEventListener("mouseover", () => {
  skillsImg.style.width = "0";
  skillsImg.style.height = "0";
  skillsTxt.style.fontSize = "60px";
});
skills.addEventListener("mouseout", () => {
  skillsImg.style.width = "150px";
  skillsImg.style.height = "150px";
  skillsTxt.style.fontSize = "0";
});

var connect = document.querySelector(".connect");
var connectImg = connect.firstElementChild;
var connectTxt = connect.childNodes[3];

connect.addEventListener("mouseover", () => {
  connectImg.style.width = "0";
  connectImg.style.height = "0";
  connectTxt.style.fontSize = "60px";
});
connect.addEventListener("mouseout", () => {
  connectImg.style.width = "150px";
  connectImg.style.height = "150px";
  connectTxt.style.fontSize = "0";
});

// FOR VIEW BOXES

// profile view
var profileViewBox = document.querySelector(".view-profile");
var closeProfile = document.querySelector(".back-profile");

profile.addEventListener("click", () => {
  profileViewBox.style.display = "flex";
});
closeProfile.addEventListener("click", () => {
  profileViewBox.style.display = "none";
});

// experience view
var experienceViewBox = document.querySelector(".view-experience");
var closeExperience = experienceViewBox.childNodes[1];

experience.addEventListener("click", () => {
  experienceViewBox.style.display = "flex";
});
closeExperience.addEventListener("click", () => {
  experienceViewBox.style.display = "none";
});

// skills view
var skillsViewBox = document.querySelector(".view-skills");
var closeSkills = skillsViewBox.childNodes[1];

skills.addEventListener("click", () => {
  skillsViewBox.style.display = "flex";
});
closeSkills.addEventListener("click", () => {
  skillsViewBox.style.display = "none";
});

// connect view
var connectViewBox = document.querySelector(".view-connect");
var closeconnect = connectViewBox.childNodes[1];

connect.addEventListener("click", () => {
  connectViewBox.style.display = "flex";
});
closeconnect.addEventListener("click", () => {
  connectViewBox.style.display = "none";
});
