(() => {
  document.addEventListener("DOMContentLoaded", () => {
    let loadingBody = document.querySelector(".loading-body");
    loadingBody.style.opacity = 0;
    setTimeout(() => {
      loadingBody.style.display = "none";
      loadingBody.style.visibility = 'hidden';
    }, 400);

  });
})();
