document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNavLink() {
    sections.forEach((section, index) => {
      const top = section.offsetTop - 50;
      const bottom = top + section.clientHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        navLinks[index].classList.add("active");
      } else {
        navLinks[index].classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavLink);
});