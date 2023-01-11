const parentElement1 = document.getElementById("menu-1");
const div1 = document.getElementById("toDropDown-1");
const parentElement2 = document.getElementById("menu-2");
const div2 = document.getElementById("toDropDown-2");
const img1 = document.getElementById("icon-down1");
const img2 = document.getElementById("icon-down2");

parentElement1.addEventListener("mouseover", function () {
  div1.classList.add("height-100");
  img1.src = "images/icon-arrow-up.svg";
});

parentElement2.addEventListener("mouseover", function () {
  div2.classList.add("height-100");
  img2.src = "images/icon-arrow-up.svg";
});

parentElement1.addEventListener("mouseout", function () {
  div1.classList.remove("height-100");
  img1.src = "images/icon-arrow-down.svg";
});
parentElement2.addEventListener("mouseout", function () {
  div2.classList.remove("height-100");
  img2.src = "images/icon-arrow-down.svg";
});
