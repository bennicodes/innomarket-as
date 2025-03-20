const menuButton = document.querySelector(".hamburger-button");

const toggleHamburgerMenu = (navigationMenu) => {
  menuButton.addEventListener("click", () => {
    navigationMenu.classList.toggle("nav__list--visible");
  });
};
export default toggleHamburgerMenu;
