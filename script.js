const menuItems = [
  { name: "Big Pop Double Decker", desc: "Double stacked beef, extra cheese, loaded with flavor.", price: "₦3,500", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600" },
  { name: "Chicken Shawarma", desc: "Marinated chicken, fresh veggies, special sauce.", price: "₦3,200", img: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=600" },
  { name: "Loaded Fries", desc: "Crispy fries loaded with beef, cheese & signature sauce.", price: "₦2,500", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600" }
];

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;
  grid.innerHTML = menuItems.map(item => `
    <div class="menu-card bg-[#1a0f0a] rounded-xl overflow-hidden text-left">
      <img src="${item.img}" alt="${item.name}" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h4 class="font-display text-2xl">${item.name}</h4>
        <p class="text-sm text-gray-400 mt-1">${item.desc}</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-[#ff5722] font-bold">${item.price}</span>
          <a href="https://wa.me/2348000000000" class="bg-[#ff5722] px-4 py-2 rounded-full text-sm font-semibold">Order</a>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  if (window.lucide) lucide.createIcons();
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    });
  });
});
