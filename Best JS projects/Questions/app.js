const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //question as a atribute serves us to access every particular article in list of 3 articles
  //console.log(question);
  const btn = question.querySelector(".question-btn");
  //console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      } //if the article does not march the article where I`m clicking the button, than just close the actual article
    });

    question.classList.toggle("show-text");
  });
});

/*const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
*/
