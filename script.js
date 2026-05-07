// Menu items
const menuItems = [
  {
    name: "Big Pop Double Decker",
    price: "₦3,500",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    name: "Chicken Shawarma",
    price: "₦3,200",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086"
  },
  {
    name: "Loaded Fries",
    price: "₦2,500",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
  }
];

// Render menu dynamically
const menuGrid = document.getElementById("menu-grid");
menuItems.forEach(item => {
  menuGrid.innerHTML += `
    <div class="food-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <a href="https://wa.me/2348000000000?text=I'd like to order ${encodeURIComponent(item.name)}" class="btn">Order</a>
    </div>
  `;
});

// Smooth scroll for nav links
document.querySelectorAll('#nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
