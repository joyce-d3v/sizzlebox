// SIZZLEBOX — JavaScript

const menuItems = [
  {
    name: "Big Pop Double Decker",
    desc: "Double stacked beef, extra cheese, loaded with flavor.",
    price: "₦4,500",
    badge: "Signature",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop"
  },
  {
    name: "Classic Chicken Shawarma",
    desc: "Marinated chicken, fresh veggies, special sauce.",
    price: "₦3,200",
    image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=600&auto=format&fit=crop"
  },
  {
    name: "Cheesy Beef Deluxe",
    desc: "Juicy beef, two types of cheese, grilled to perfection.",
    price: "From ₦4,000",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=600&auto=format&fit=crop"
  },
  {
    name: "Loaded Fries",
    desc: "Crispy fries loaded with beef, cheese and signature sauce.",
    price: "₦2,500",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop"
  },
  {
    name: "SizzleBox Meal",
    desc: "Any sandwich + fries + drink. The complete experience.",
    price: "From ₦6,500",
    badge: "New",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop"
  },
  {
    name: "Spicy Beef Shawarma",
    desc: "Slow cooked beef wrapped with hot pepper sauce.",
    price: "₦3,500",
    image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=600&auto=format&fit=crop"
  }
];

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  grid.innerHTML = menuItems.map(item => `
    <article class="menu-card bg-neutral-900 rounded-2xl overflow-hidden border border-orange-500/10">
      <div class="relative h-48 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" loading="lazy" />
        ${item.badge ? `<span class="badge badge-${item.badge.toLowerCase()} absolute top-3 left-3">${item.badge}</span>` : ""}
      </div>
      <div class="p-5">
        <h3 class="font-display text-2xl tracking-wide mb-1">${item.name}</h3>
        <p class="text-neutral-400 text-sm mb-4">${item.desc}</p>
        <div class="flex items-center justify-between">
          <span class="text-orange-500 font-bold text-lg">${item.price}</span>
          <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
            Order
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});