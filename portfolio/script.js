const togglebutton = document.getElementsByClassName("toggle-button");
const navbarlinks = document.getElementsByClassName("nav-links")[0];

console.log("printing toggle button");
console.log(togglebutton);
console.log("printing nav links");
console.log(navbarlinks);

togglebutton[0].addEventListener("click", (e) => {
  e.preventDefault();
  navbarlinks.classList.toggle("active");
});

const moreInfo = document.getElementsByClassName("button-more");
const morecards = document.getElementsByClassName("card-box-after");

moreInfo[0].addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button-clicked");
  for (let i = 0; i < morecards.length; i++) {
    morecards[i].classList.toggle("card-box-afters-visible");
  }
});
