const products = [
  { id: "p1", name: "Snowboard" },
  { id: "p2", name: "Ski Goggles" },
  { id: "p3", name: "Helmet" },
  { id: "p4", name: "Ski Boots" },
  { id: "p5", name: "Winter Jacket" }
];

window.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});
