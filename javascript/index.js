const backToTopEl = document.querySelector(".back_to_top_box");
window.addEventListener("scroll", () => {
  backToTopEl.style.opacity = "1111";
});
// mobile navigation
const btnNavEl = document.querySelector(".mobile_nav");
const headerEl = document.querySelector("header");
console.log(btnNavEl, headerEl);
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobal navigation
    if (link.classList.contains("nav_link"))
      headerEl.classList.toggle("nav-open");
  });
});
