const parentElement1 = document.getElementById("menu-1");
const div1 = document.getElementById("toDropDown-1");
const parentElement2 = document.getElementById("menu-2");
const div2 = document.getElementById("toDropDown-2");
const img1 = document.getElementById("icon-down1");
const img2 = document.getElementById("icon-down2");

parentElement1.addEventListener("mouseover", function () {
  div1.classList.add("pop");
  img1.src = "images/icon-arrow-up.svg";
});

parentElement2.addEventListener("mouseover", function () {
  div2.classList.add("pop");
  img2.src = "images/icon-arrow-up.svg";
});

parentElement1.addEventListener("mouseout", function () {
  div1.classList.remove("pop");
  img1.src = "images/icon-arrow-down.svg";
});
parentElement2.addEventListener("mouseout", function () {
  div2.classList.remove("pop");
  img2.src = "images/icon-arrow-down.svg";
});

// logic for the dropdown menu - desktop version:

const parentElement1D = document.getElementById("menu-1D");
const div1D = document.getElementById("toDropDown-1D");
const parentElement2D = document.getElementById("menu-2D");
const div2D = document.getElementById("toDropDown-2D");
const img1D = document.getElementById("icon-down1D");
const img2D = document.getElementById("icon-down2D");

parentElement1D.addEventListener("mouseover", function () {
  div1D.classList.add("pop");
  img1D.src = "images/icon-arrow-up.svg";
});

parentElement2D.addEventListener("mouseover", function () {
  div2D.classList.add("pop");
  img2D.src = "images/icon-arrow-up.svg";
});

parentElement1D.addEventListener("mouseout", function () {
  div1D.classList.remove("pop");
  img1D.src = "images/icon-arrow-down.svg";
});
parentElement2D.addEventListener("mouseout", function () {
  div2D.classList.remove("pop");
  img2D.src = "images/icon-arrow-down.svg";
});

// logic for the sidemenu
const mobileSideMenu = document.getElementById("mobileSideMenu");
function openMenu() {
  if (mobileSideMenu.classList.contains("hidden")) {
    mobileSideMenu.classList.remove("hidden");
    mobileSideMenu.classList.add("shown");
    document.body.style.setProperty("overflow", "hidden");
  } else {
    mobileSideMenu.classList.add("hidden");
    mobileSideMenu.classList.remove("shown");
    document.body.style.removeProperty("overflow", "hidden");
  }
}
