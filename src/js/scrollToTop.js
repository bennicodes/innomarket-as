const backToTopButton = document.querySelector(".to-top-button");

const displayScrollButton = () => {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.classList.add("display-scroll-button");
    } else {
      backToTopButton.classList.remove("display-scroll-button");
    }
  });
};

const scrollToTop = () => {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document
      .querySelector(".to-top-button")
      .classList.remove("display-scroll-button");
  });
};

export { displayScrollButton, scrollToTop };
