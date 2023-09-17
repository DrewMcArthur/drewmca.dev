window.addEventListener("load", () => {
  const app = document.querySelector("#app");

  function scrollToLinks() {
    document.querySelector("#links").scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAbout() {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  }

  function getScrollIndicator() {
    return document.querySelector("#can-scroll-indicator");
  }

  function flipScrollIndicator() {
    getScrollIndicator().classList.add("flipped");
    const btn = getScrollIndicator();
    btn.removeEventListener("click", scrollToLinks);
    btn.addEventListener("click", scrollToAbout);
  }

  function unflipScrollIndicator() {
    getScrollIndicator().classList.remove("flipped");
    const btn = getScrollIndicator();
    btn.removeEventListener("click", scrollToAbout);
    btn.addEventListener("click", scrollToLinks);
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
