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

// Sticky navigation
const stickyIntersectionEl = document.querySelector("#index_section");
const stickyObs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "1px",
  }
);
stickyObs.observe(stickyIntersectionEl);

function updateCopyRightYear() {
  const yearEl = document.querySelector(".current_year");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  console.log(currentDate, currentYear);
  yearEl.textContent = currentYear;
}
updateCopyRightYear();
