import toggleHamburgerMenu from "./navbar";
import { displayScrollButton, scrollToTop } from "./scrollToTop";

// Select elements
const contactSection = document.querySelector("#contact");
const contactButton = document.querySelector("#contact-button");
const navigationMenu = document.querySelector(".header__nav-list");

// Form elements
const form = document.querySelector(".contact__form");

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  displayScrollButton();
  scrollToTop();
  toggleHamburgerMenu(navigationMenu);
});
