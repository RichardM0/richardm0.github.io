const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

const onScroll = () => {
  if (!hero) {
    return;
  }
  const heroBottom = hero.getBoundingClientRect().bottom;
  if (heroBottom < 80) {
    nav.classList.add("nav-sticky");
  } else {
    nav.classList.remove("nav-sticky");
  }
};

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("load", onScroll);
