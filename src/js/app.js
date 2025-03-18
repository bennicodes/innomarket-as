import { displayScrollButton, scrollToTop } from "./scrollToTop";

// Select elements
const contactSection = document.querySelector("#contact");
const contactButton = document.querySelector("#contact-button");

// Form elements
const form = document.querySelector(".contact__form");

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  displayScrollButton();
  scrollToTop();
});

// contactButton.addEventListener("click", () => {
//   if (contactSection) {
//     contactSection.scrollIntoView({ behavior: "smooth" });
//   }
// });
