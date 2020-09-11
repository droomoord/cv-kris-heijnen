const toggelTextButtons = document.querySelectorAll(
  ".fa-minus-square, .fa-plus-square"
);
const printButton = document.querySelector(".fa-print");

toggelTextButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    toggleRespeciveText(button);
  });
});

printButton.addEventListener("click", function () {
  window.print();
});

function toggleRespeciveText(element) {
  const respectiveText = element.parentElement.parentElement.children[1];
  if (element.classList.contains("fa-minus-square")) {
    respectiveText.classList.remove("show-text");
    respectiveText.classList.add("hide-text");
    element.classList.remove("fa-minus-square");
    element.classList.add("fa-plus-square");
  } else {
    respectiveText.classList.remove("hide-text");
    respectiveText.classList.add("show-text");
    element.classList.remove("fa-plus-square");
    element.classList.add("fa-minus-square");
  }
}
