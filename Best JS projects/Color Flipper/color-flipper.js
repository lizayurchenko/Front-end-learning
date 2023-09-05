const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0-3
  const randomNumber = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomNumber];
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
  color.style.color = randomColor;
});
