(function () {
  function init() {
    console.log("Home page animations initialized");
    console.log("test");
    animateText();
  }

  function animateText() {
    console.log("animateText");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
