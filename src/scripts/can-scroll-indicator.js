window.addEventListener("load", () => {
  const app = document.querySelector("#app");

  function scrollToEl(selector) {
    const el = document.querySelector(selector);
    const elRect = el.getBoundingClientRect();
    const appRect = app.getBoundingClientRect();
    const offsetTop = elRect.top - appRect.top;

    app.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  function getScrollIndicator() {
    return document.querySelector("#can-scroll-indicator");
  }

  function flipScrollIndicator() {
    getScrollIndicator().classList.add("flipped");
    const btn = getScrollIndicator();
    btn.removeEventListener("click", () => scrollToEl("#links"));
    btn.addEventListener("click", () => scrollToEl("#about"));
  }

  function unflipScrollIndicator() {
    getScrollIndicator().classList.remove("flipped");
    const btn = getScrollIndicator();
    btn.removeEventListener("click", () => scrollToEl("#about"));
    btn.addEventListener("click", () => scrollToEl("#links"));
  }

  function manageScrollIndicator() {
    if (app.scrollTop > 400) {
      flipScrollIndicator();
    } else {
      unflipScrollIndicator();
    }
  }

  app.addEventListener("scroll", manageScrollIndicator);
  manageScrollIndicator();
});
