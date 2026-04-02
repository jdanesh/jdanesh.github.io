(function () {
  "use strict";

  var toggle = document.querySelector(".site-navigation-toggle");
  var dropdown = document.querySelector(".site-navigation-dropdown");

  if (!toggle || !dropdown) return;

  function setOpen(open) {
    dropdown.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!dropdown.classList.contains("is-open"));
  });

  toggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(!dropdown.classList.contains("is-open"));
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1025) setOpen(false);
  });
})();
