window.addEventListener("load", () => {
  function scrollToLinks() {
    document.querySelector("#links").scrollIntoView({ behavior: "smooth" });
  }

  function hideScrollIndicator() {
    document.querySelector("#can-scroll-indicator").style.display = "none";
  }

  function showScrollIndicator() {
    document.querySelector("#can-scroll-indicator").style.display = "flex";
  }

  function manageScrollIndicator() {
    console.log("scrolled!" + window.scroll);
    if (window.scrollY > 20) {
      hideScrollIndicator();
    } else {
      showScrollIndicator();
    }
  }

  const app = document.querySelector("#app");
  app.addEventListener("scroll", manageScrollIndicator);
  document
    .querySelector("#can-scroll-indicator")
    .addEventListener("click", scrollToLinks);
});
