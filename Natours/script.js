// <-- Smooth scrolling animation -->
const linkElems = document.querySelectorAll("a:link");

linkElems.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkHref = link.getAttribute("href");

    if (linkHref === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (linkHref.startsWith("#") && linkHref !== "#") {
      const sectionEl = document.querySelector(linkHref);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  })
);

// <-- Mobile navigation -->
const navListEl = document.querySelector(".navigation__list");

navListEl.addEventListener("click", (e) => {
  const clickedElemClasses = [...e.target.classList],
    checkboxEl = document.querySelector(".navigation__checkbox");

  if (clickedElemClasses.includes("navigation__link")) {
    checkboxEl.checked = false;
  }
});

// <-- Popup -->
const cardBtnElems = document.querySelectorAll(".card-btn-popup"),
  popupEl = document.querySelector(".popup"),
  popupContentEl = document.querySelector(".popup__content");

[...cardBtnElems].forEach((btn) => {
  btn.addEventListener("click", () => {
    popupEl.style.opacity = 1;
    popupEl.style.visibility = "visible";
    popupContentEl.style.transform = "translate(-50%, -50%) scale(1)";
    popupContentEl.style.opacity = 1;
  });
});

popupEl.addEventListener("click", (e) => {
  const clickedElemClasses = [...e.target.classList];

  if (e.target === popupEl || clickedElemClasses.includes("popup__close")) {
    popupEl.style.opacity = 0;
    popupEl.style.visibility = "hidden";
    popupContentEl.style.transform = "translate(-50%, -50%) scale(0.25)";
    popupContentEl.style.opacity = 0;
  }
});
