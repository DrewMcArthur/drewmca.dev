function scrollToLinks() {
  document.querySelector("#links").scrollIntoView({ behavior: "smooth" });
}

function hideScrollIndicator() {
  document.querySelector("#can-scroll-indicator").style.display = "none";
}

document.on("load", () => {
  window.addEventListener("scroll", hideScrollIndicator);
  document
    .querySelector("#can-scroll-indicator")
    .addEventListener("click", scrollToLinks);
});
