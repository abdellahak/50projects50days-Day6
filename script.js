let contentDiv = document.querySelectorAll(".content");

contentDiv.forEach((element) => {
  if (window.innerHeight >= element.offsetTop) {
    element.classList.add("resetPlace");
  }
});

window.onscroll = function () {
  contentDiv.forEach((element) => {
    target = element.offsetTop - window.innerHeight + 150;
    targetExit = element.offsetTop + window.innerHeight - 150;
    if (window.scrollY >= target) {
      element.classList.add("resetPlace");
    }
    if (window.scrollY <= target){
        element.classList.remove("resetPlace")
    }
  });
};
