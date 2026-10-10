// ========== PRODUCT DATA ==========
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 249.99,
    oldPrice: 299.99,
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "Premium over-ear headphones with industry-leading active noise cancellation, 30-hour battery life, and crystal-clear voice calls. Perfect for travel and deep focus.",
    stock: 42,
    badge: "sale"
  },
  {
    id: 2,
    name: "Minimalist Leather Backpack",
    category: "Fashion",
    price: 129.00,
    oldPrice: null,
    rating: 4.6,
    reviews: 580,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Handcrafted full-grain leather backpack with padded laptop sleeve (up to 15\"), multiple compartments, and water-resistant finish. Timeless design for daily commute.",
    stock: 28,
    badge: "new"
  },
  {
    id: 3,
    name: "Smart Fitness Watch Pro",
    category: "Electronics",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.7,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced health tracking with ECG, SpO2, sleep stages, and 50+ workout modes. Bright AMOLED display and 7-day battery. Swim-proof design.",
    stock: 65,
    badge: "sale"
  },
  {
    id: 4,
    name: "Ceramic Pour-Over Coffee Set",
    category: "Home",
    price: 68.00,
    oldPrice: null,
    rating: 4.9,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    description: "Elegant ceramic dripper, server, and two mugs. Designed for the perfect pour-over experience. Heat-retaining glaze and dishwasher safe.",
    stock: 51,
    badge: null
  },
  {
    id: 5,
    name: "Organic Cotton Crew Tee",
    category: "Fashion",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.5,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    description: "Ultra-soft 100% organic cotton tee with a relaxed fit. Pre-shrunk, breathable, and built to last. Available in multiple earth tones.",
    stock: 120,
    badge: "sale"
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 79.99,
    oldPrice: null,
    rating: 4.4,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    description: "Compact waterproof speaker with 360° sound, 20-hour playtime, and deep bass. Pair two for stereo mode. IPX7 rated for poolside fun.",
    stock: 88,
    badge: "new"
  },
  {
    id: 7,
    name: "Scented Soy Candle Trio",
    category: "Home",
    price: 42.00,
    oldPrice: null,
    rating: 4.8,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&h=500&fit=crop",
    description: "Hand-poured soy wax candles in three signature scents: Cedar & Sage, Vanilla Birch, and Citrus Grove. 45-hour burn time each. Clean-burning cotton wicks.",
    stock: 73,
    badge: null
  },
  {
    id: 8,
    name: "Running Shoes Elite",
    category: "Fashion",
    price: 159.00,
    oldPrice: 189.00,
    rating: 4.7,
    reviews: 980,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Lightweight performance runners with responsive foam midsole, breathable mesh upper, and durable rubber outsole. Ideal for daily miles and race day.",
    stock: 34,
    badge: "sale"
  },
  {
    id: 9,
    name: "Mechanical Keyboard RGB",
    category: "Electronics",
    price: 119.99,
    oldPrice: null,
    rating: 4.6,
    reviews: 720,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description: "Hot-swappable mechanical switches, per-key RGB lighting, aluminum frame, and detachable USB-C cable. Satisfying click for work and play.",
    stock: 47,
    badge: "new"
  },
  {
    id: 10,
    name: "Linen Throw Blanket",
    category: "Home",
    price: 79.00,
    oldPrice: 99.00,
    rating: 4.9,
    reviews: 260,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop",
    description: "Stone-washed European linen throw. Softens with every wash. Perfect weight for year-round comfort. Available in natural and charcoal.",
    stock: 39,
    badge: "sale"
  },
  {
    id: 11,
    name: "Wireless Charging Stand",
    category: "Electronics",
    price: 39.99,
    oldPrice: null,
    rating: 4.3,
    reviews: 1100,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&h=500&fit=crop",
    description: "Fast 15W wireless charger with adjustable angle. Works with all Qi-enabled phones. Sleek aluminum design with LED indicator.",
    stock: 95,
    badge: null
  },
  {
    id: 12,
    name: "Aviator Sunglasses",
    category: "Fashion",
    price: 89.00,
    oldPrice: 110.00,
    rating: 4.5,
    reviews: 640,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    description: "Polarized lenses with UV400 protection. Lightweight titanium frame and adjustable nose pads. Classic aviator shape with modern comfort.",
    stock: 56,
    badge: "sale"
  }
];

// ========== STATE ==========
const state = {
  search: "",
  category: "All",
  sort: "featured",
  maxPrice: 500,
  cart: {},          // { productId: quantity }
  modalProduct: null,
  modalQty: 1
};

// ========== HELPERS ==========
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function formatPrice(n) {
  return "$" + n.toFixed(2);
}

function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - half);
}

function getCartCount() {
  return Object.values(state.cart).reduce((s, q) => s + q, 0);
}

function getCartTotal() {
  return Object.entries(state.cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find(x => x.id === +id);
    return sum + (p ? p.price * qty : 0);
  }, 0);
}

function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2200);
}

// ========== FILTER & SORT ==========
function getFilteredProducts() {
  let list = PRODUCTS.filter(p => {
    const matchSearch = !state.search ||
      p.name.toLowerCase().includes(state.search) ||
      p.category.toLowerCase().includes(state.search) ||
      p.description.toLowerCase().includes(state.search);
    const matchCat = state.category === "All" || p.category === state.category;
    const matchPrice = p.price <= state.maxPrice;
    return matchSearch && matchCat && matchPrice;
  });

  switch (state.sort) {
    case "price-asc":  list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "name-asc":   list.sort((a, b) => a.name.localeCompare(b.name)); break;
    case "name-desc":  list.sort((a, b) => b.name.localeCompare(a.name)); break;
    case "rating":     list.sort((a, b) => b.rating - a.rating); break;
    default: break; // featured = original order
  }
  return list;
}

// ========== RENDER PRODUCTS ==========
function renderProducts() {
  const list = getFilteredProducts();
  const grid = $("#productsGrid");
  const countEl = $("#resultsCount");
  const titleEl = $("#sectionTitle");

  titleEl.textContent = state.category === "All" ? "All Products" : state.category;
  countEl.textContent = `${list.length} product${list.length !== 1 ? "s" : ""}`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
        </svg>
        <h3>No products found</h3>
        <p>Try adjusting your search or filters</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="badge ${p.badge}">${p.badge}</span>` : ""}
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <span class="card-category">${p.category}</span>
        <h3 class="card-title">${p.name}</h3>
        <div class="card-rating">
          <span class="stars">${stars(p.rating)}</span>
          <span>(${p.reviews})</span>
        </div>
        <div class="card-footer">
          <div class="card-price">
            ${formatPrice(p.price)}
            ${p.oldPrice ? `<span class="old">${formatPrice(p.oldPrice)}</span>` : ""}
          </div>
          <button class="add-btn" data-add="${p.id}" aria-label="Add to cart" title="Add to cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// ========== RENDER CATEGORIES ==========
function renderCategories() {
  const cats = {};
  PRODUCTS.forEach(p => {
    cats[p.category] = (cats[p.category] || 0) + 1;
  });

  const list = $("#categoryList");
  list.innerHTML = `
    <li>
      <button class="category-btn ${state.category === "All" ? "active" : ""}" data-cat="All">
        All Products <span class="count">${PRODUCTS.length}</span>
      </button>
    </li>
    ${Object.entries(cats).map(([name, count]) => `
      <li>
        <button class="category-btn ${state.category === name ? "active" : ""}" data-cat="${name}">
          ${name} <span class="count">${count}</span>
        </button>
      </li>
    `).join("")}
  `;
}

// ========== RENDER CART ==========
function renderCart() {
  const itemsEl = $("#cartItems");
  const count = getCartCount();
  const total = getCartTotal();
  const countBadge = $("#cartCount");
  const totalEl = $("#cartTotal");
  const checkoutBtn = $("#checkoutBtn");

  // Badge
  if (count > 0) {
    countBadge.textContent = count;
    countBadge.classList.remove("hidden");
    countBadge.classList.add("bump");
    setTimeout(() => countBadge.classList.remove("bump"), 300);
  } else {
    countBadge.classList.add("hidden");
  }

  totalEl.textContent = formatPrice(total);
  checkoutBtn.disabled = count === 0;

  const entries = Object.entries(state.cart);
  if (entries.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 6h15l-1.5 9H8L6 6z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L5 2H2"/>
        </svg>
        <p>Your cart is empty</p>
        <p style="font-size:0.85rem">Add some products to get started</p>
      </div>`;
    return;
  }

  itemsEl.innerHTML = entries.map(([id, qty]) => {
    const p = PRODUCTS.find(x => x.id === +id);
    if (!p) return "";
    return `
      <div class="cart-item" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}" />
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div class="price">${formatPrice(p.price)}</div>
          <div class="cart-item-qty">
            <button data-dec="${p.id}" aria-label="Decrease">−</button>
            <span>${qty}</span>
            <button data-inc="${p.id}" aria-label="Increase">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-remove="${p.id}" aria-label="Remove">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `;
  }).join("");
}

// ========== MODAL ==========
function openModal(product) {
  state.modalProduct = product;
  state.modalQty = 1;

  $("#modalImg").innerHTML = `<img src="${product.image}" alt="${product.name}" />`;
  $("#modalContent").innerHTML = `
    <span class="modal-category">${product.category}</span>
    <h2 class="modal-title">${product.name}</h2>
    <div class="modal-rating">
      <span class="stars">${stars(product.rating)}</span>
      <span>${product.rating} · ${product.reviews} reviews</span>
    </div>
    <div class="modal-price">
      ${formatPrice(product.price)}
      ${product.oldPrice ? `<span class="old">${formatPrice(product.oldPrice)}</span>` : ""}
    </div>
    <p class="modal-desc">${product.description}</p>
    <div class="modal-meta">
      <span>In stock: <strong>${product.stock}</strong></span>
      ${product.badge ? `<span>Tag: <strong style="text-transform:capitalize">${product.badge}</strong></span>` : ""}
    </div>
    <div class="qty-row">
      <div class="qty-control">
        <button id="qtyDec" aria-label="Decrease quantity">−</button>
        <span id="qtyValue">1</span>
        <button id="qtyInc" aria-label="Increase quantity">+</button>
      </div>
      <button class="modal-add" id="modalAdd">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 6h15l-1.5 9H8L6 6z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L5 2H2"/>
        </svg>
        Add to Cart
      </button>
    </div>
  `;

  $("#modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";

  // Qty controls
  $("#qtyDec").onclick = () => {
    if (state.modalQty > 1) {
      state.modalQty--;
      $("#qtyValue").textContent = state.modalQty;
    }
  };
  $("#qtyInc").onclick = () => {
    if (state.modalQty < product.stock) {
      state.modalQty++;
      $("#qtyValue").textContent = state.modalQty;
    }
  };
  $("#modalAdd").onclick = () => {
    addToCart(product.id, state.modalQty);
    const btn = $("#modalAdd");
    btn.classList.add("added");
    btn.innerHTML = "✓ Added";
    setTimeout(() => {
      btn.classList.remove("added");
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9H8L6 6z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L5 2H2"/></svg> Add to Cart`;
    }, 1500);
  };
}

function closeModal() {
  $("#modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  state.modalProduct = null;
}

// ========== CART ACTIONS ==========
function addToCart(id, qty = 1) {
  state.cart[id] = (state.cart[id] || 0) + qty;
  renderCart();
  showToast("Added to cart");
}

function removeFromCart(id) {
  delete state.cart[id];
  renderCart();
}

function changeQty(id, delta) {
  const next = (state.cart[id] || 0) + delta;
  if (next <= 0) {
    removeFromCart(id);
  } else {
    state.cart[id] = next;
    renderCart();
  }
}

function openCart() {
  $("#cartOverlay").classList.add("open");
  $("#cartDrawer").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  $("#cartOverlay").classList.remove("open");
  $("#cartDrawer").classList.remove("open");
  document.body.style.overflow = "";
}

function resetFilters() {
  state.search = "";
  state.category = "All";
  state.sort = "featured";
  state.maxPrice = 500;
  $("#searchInput").value = "";
  $("#sortSelect").value = "featured";
  $("#priceRange").value = 500;
  $("#priceLabel").textContent = "$500";
  renderCategories();
  renderProducts();
}

// ========== EVENT LISTENERS ==========
function initEvents() {
  // Logo reset
  $("#logoLink").addEventListener("click", (e) => {
    e.preventDefault();
    resetFilters();
  });

  // Search
  let searchTimer;
  $("#searchInput").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.search = e.target.value.trim().toLowerCase();
      renderProducts();
    }, 200);
  });

  // Categories (delegation)
  $("#categoryList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.category = btn.dataset.cat;
    renderCategories();
    renderProducts();
  });

  // Sort
  $("#sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  // Price range
  $("#priceRange").addEventListener("input", (e) => {
    state.maxPrice = +e.target.value;
    $("#priceLabel").textContent = formatPrice(state.maxPrice);
    renderProducts();
  });

  // Product grid clicks
  $("#productsGrid").addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      e.stopPropagation();
      const id = +addBtn.dataset.add;
      addToCart(id);
      addBtn.classList.add("added");
      addBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 13l4 4L19 7"/></svg>`;
      setTimeout(() => {
        addBtn.classList.remove("added");
        addBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`;
      }, 1200);
      return;
    }

    const card = e.target.closest(".product-card");
    if (card) {
      const product = PRODUCTS.find(p => p.id === +card.dataset.id);
      if (product) openModal(product);
    }
  });

  // Modal close
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalOverlay").addEventListener("click", (e) => {
    if (e.target === $("#modalOverlay")) closeModal();
  });

  // Cart open/close
  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#cartOverlay").addEventListener("click", closeCart);

  // Cart item controls
  $("#cartItems").addEventListener("click", (e) => {
    const inc = e.target.closest("[data-inc]");
    const dec = e.target.closest("[data-dec]");
    const rem = e.target.closest("[data-remove]");
    if (inc) changeQty(+inc.dataset.inc, 1);
    if (dec) changeQty(+dec.dataset.dec, -1);
    if (rem) removeFromCart(+rem.dataset.remove);
  });

  // Checkout
  $("#checkoutBtn").addEventListener("click", () => {
    if (getCartCount() === 0) return;
    state.cart = {};
    renderCart();
    showToast("Order placed successfully! 🎉");
    closeCart();
  });

  // Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCart();
    }
  });
}

// ========== INIT ==========
function init() {
  renderCategories();
  renderProducts();
  renderCart();
  initEvents();
}

init();