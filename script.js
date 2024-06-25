document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".page-link");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      const pageDiv = document.querySelector(".page");
      pageDiv.classList.add("turn");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
});
