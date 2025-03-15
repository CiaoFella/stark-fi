import { gsap, ScrollTrigger } from "../../vendor";

(function () {
  function init() {
    console.log("Home page animations initialized");
  }

  function animateText() {}

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
