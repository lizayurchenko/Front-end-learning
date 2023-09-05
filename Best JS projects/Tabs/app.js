const btns = document.querySelectorAll(".tab-btn"); //btns
const about = document.querySelector(".about"); //container for btns + articles
const articles = document.querySelectorAll(".content"); //informayion that we should change

about.addEventListener("click", function (e) {
  //console.log(e.target); //shows on which element of container we are clicking on
  //console.log(e.target.dataset.id); //shows which id has clicked element
  const id = e.target.dataset.id;
  //if element has an id = if we are clicking on buttons:
  if (id) {
    //remove active from buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id); //getting the whole element, that we need to display
    element.classList.add("active");
  }
});
