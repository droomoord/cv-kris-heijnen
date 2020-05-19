const boxes = document.querySelectorAll(".box");

let options = {
    rootMargin: '0px',
    threshold: 1.0
  }

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    }
  });
}, options);

boxes.forEach((box) => {
  observer.observe(box);
});
