let button = document.querySelector("button");
let input = document.querySelector("input");
let p = document.querySelector("p");

button.addEventListener("click", function () {
  let now = moment(input.value);
  p.innerHTML = now.format("jYYYY/jMMMM/jDD");
  button.style.opacity = "0.2";
});

button.addEventListener("blur", function () {
  button.style.opacity = "1";
});
