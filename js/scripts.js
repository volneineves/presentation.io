// BUTTON TO BACK

const button = document.querySelector(".back-to-top");

window.onscroll = function () {
  scrollFunction();
};

const buttonStart = [
  { transform: "rotate(360deg) scale(0)" },
  { transform: "rotate(0) scale(1)" },
];

const buttonTime = {
  duration: 500,
  iterations: 1,
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
    button.animate(buttonStart, buttonTime);
  }
}

button.addEventListener("click", function (word) {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});