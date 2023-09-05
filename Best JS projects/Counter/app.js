//set initial value
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList; //every time we click the button we save in a variable class of the button
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else if (styles.contains("increase")) {
      count++;
    }
    if (count > 0) {
      value.style.color = "rgb(38, 194, 87)";
    }
    if (count < 0) {
      value.style.color = "rgb(227, 95, 83)";
    }
    if (count === 0) {
      value.style.color = "black";
    }

    value.innerHTML = count;
  });
});
