window.addEventListener("DOMContentLoaded", () => {
  let count = localStorage.getItem("reviewCount");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("reviewCount", count);

  document.getElementById("reviewCount").textContent = count;
});
