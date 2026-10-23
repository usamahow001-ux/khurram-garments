/* Khurram Garments & Shopping Center - Application Logic */

const STORE_CONFIG = {
  name: 'Khurram Garments & Shopping Center',
  phone: '03407548422',
  whatsappNumber: '923407548422',
  address: 'Shop No. 105, Ijaz Plaza, Sargodha Road, Mongowal Gharbi, Punjab, Pakistan',
  freeShippingThreshold: 2500,
  flatDeliveryFee: 150
};

// CATALOG SYNCHRONIZED WITH REAL SHOP INVENTORY & AI-CLEANED IMAGES
const PRODUCTS = [
  {
    id: 1,
    title: 'Boys Three-Star Formal Coat Pent Suit (Coat, Pent, Shirt & Bowtie)',
    code: 'DNo: Three Star 16/24',
    category: 'festive',
    categoryName: 'Festive & Eid',
    price: 1450,
    originalPrice: 1950,
    badge: 'BEST SELLER',
    badgeType: 'hot',
    rating: 5.0,
    reviews: 64,
    image: 'assets/images/product-coat-pent.jpg',
    sizes: ['Size 16 (2-3Y)', 'Size 18 (3-4Y)', 'Size 20 (4-5Y)', 'Size 22 (6-7Y)', 'Size 24 (8-9Y)'],
    colors: ['Chocolate Brown', 'Royal Blue', 'Charcoal Grey', 'Navy Blue', 'Classic Black'],
    description: 'Premium Suiting ("Sotting") fabric 3-piece formal suit. Includes blazer coat, matching trousers, dress shirt, bowtie, and pocket square. Ideal for weddings and parties.'
  },
  {
    id: 2,
    title: 'Boys China Parachute Mandis Winter Leather/Puffer Jacket',
    code: 'DNo: 10001',
    category: 'winter',
    categoryName: 'Winter Warmers',
    price: 1435,
    originalPrice: 1850,
    badge: 'HOT',
    badgeType: 'hot',
    rating: 4.9,
    reviews: 48,
    image: 'assets/images/product-olive-jacket.jpg',
    sizes: ['Small (3-4Y)', 'Medium (5-6Y)', 'Large (7-8Y)'],
    colors: ['Olive Green', 'Navy Blue', 'Glossy Black'],
    description: 'Original China Perashot Mandis fabric. Warm windproof and water-resistant winter jacket with stand collar, front flap pockets, and striped ribbed cuffs.'
  },
  {
    id: 3,
    title: 'Girls "Dream Girl" Cable Knit Hoodie & Flared Pants Set',
    code: 'DNo: 5504',
    category: 'girls',
    categoryName: 'Girls Collection',
    price: 1650,
    originalPrice: 2100,
    badge: 'TRENDING',
    badgeType: 'sale',
    rating: 4.9,
    reviews: 57,
    image: 'assets/images/product-girls-knit-suit.jpg',
    sizes: ['Small (2-3Y)', 'Medium (4-5Y)', 'Large (6-7Y)'],
    colors: ['Lime Green', 'Baby Pink', 'Soft White'],
    description: 'China imported cable-knit fabric. Embroidered lace heart applique with floral details, pearl bead accents on sleeves and hem, with matching flared pants.'
  },
  {
    id: 4,
    title: 'Girls 3PCS Quilted Hooded Vest, Sweatshirt & Fleece Pants',
    code: 'DNo: 5511',
    category: 'winter',
    categoryName: 'Winter Warmers',
    price: 1895,
    originalPrice: 2400,
    badge: 'POPULAR',
    badgeType: 'hot',
    rating: 5.0,
    reviews: 39,
    image: 'assets/images/product-pink-vest-set.jpg',
    sizes: ['Size 18 (2-3Y)', 'Size 20 (4-5Y)', 'Size 22 (6-7Y)'],
    colors: ['Baby Pink', 'Pastel Yellow', 'Soft Lavender'],
    description: '3-piece winter outfit with China imported quilted hooded vest, flower lace pockets, pearl buttons, printed inner sweatshirt, and Three Fleece inner pants.'
  },
  {
    id: 5,
    title: '3PCS B.J Kids Embossed Jacquard Fleece Winter Tracksuit',
    code: 'DNo: 12390',
    category: 'winter',
    categoryName: 'Winter Warmers',
    price: 1695,
    originalPrice: 2200,
    badge: 'NEW ARRIVAL',
    badgeType: 'new',
    rating: 4.8,
    reviews: 33,
    image: 'assets/images/product-beige-fleece-tracksuit.jpg',
    sizes: ['Small (2-3Y)', 'Medium (4-5Y)', 'Large (6-7Y)'],
    colors: ['Warm Camel Beige', 'Powder Blue', 'Dusty Rose Pink'],
    description: 'China imported embossed alphabet textured fleece. Buttoned hooded jacket with black drawstrings, cartoon character patch, inner graphic tee, and joggers.'
  },
  {
    id: 6,
    title: 'Boutique Shimmer Organza Fairy Princess Frock with Puff Sleeves',
    code: 'DNo: Fairy-402',
    category: 'girls',
    categoryName: 'Girls Collection',
    price: 1950,
    originalPrice: 2600,
    badge: 'EXCLUSIVE',
    badgeType: 'festive',
    rating: 5.0,
    reviews: 72,
    image: 'assets/images/product-black-glitter-frock.jpg',
    sizes: ['1-2 Years', '2-3 Years', '3-4 Years', '4-5 Years'],
    colors: ['Midnight Black', 'Scarlet Red', 'Lilac Lavender', 'Baby Pink', 'White', 'Mustard Yellow'],
    description: 'Sparkle glitter dots with sheer organza puff sleeves, round pearl neck collar, and handmade floral waist corsage. Perfect for birthdays and weddings.'
  },
  {
    id: 7,
    title: 'Boys Casual Denim Overshirt, Star Graphic Tee & Jeans 3-Piece Set',
    code: 'DNo: Denim-Star-3P',
    category: 'boys',
    categoryName: 'Boys Collection',
    price: 1050,
    originalPrice: 1450,
    badge: 'HOT PRICE',
    badgeType: 'hot',
    rating: 4.8,
    reviews: 41,
    image: 'assets/images/product-boys-denim-set.jpg',
    sizes: ['Small (2-3Y)', 'Medium (4-5Y)', 'Large (6-7Y)'],
    colors: ['Washed Blue Denim'],
    description: 'Complete 3-piece casual look: washed denim button-down overshirt with rolled cuffs, soft graphic star cotton tee, and matching blue denim jeans.'
  },
  {
    id: 8,
    title: '2PCS B.J Kids Embossed Jacquard Hoodie & Joggers Set',
    code: 'DNo: 12371',
    category: 'winter',
    categoryName: 'Winter Warmers',
    price: 1495,
    originalPrice: 1950,
    badge: 'SALE',
    badgeType: 'sale',
    rating: 4.7,
    reviews: 28,
    image: 'assets/images/product-kids-embossed-hoodie.jpg',
    sizes: ['Small (2-3Y)', 'Medium (4-5Y)', 'Large (6-7Y)'],
    colors: ['Caramel Brown', 'Olive Green', 'Sky Blue'],
    description: 'China imported embossed alphabet fleece fabric. Hoodie with front cargo pocket, metal buckle tag, drawstrings, and matching elastic cuffed joggers.'
  },
  {
    id: 9,
    title: '3PCS B.J Kids Crimson Red Cargo Jacket & Joggers Tracksuit',
    code: 'DNo: 12374',
    category: 'boys',
    categoryName: 'Boys Collection',
    price: 1695,
    originalPrice: 2250,
    badge: 'TRENDING',
    badgeType: 'hot',
    rating: 4.9,
    reviews: 35,
    image: 'assets/images/product-kids-cargo-tracksuit.jpg',
    sizes: ['Small (2-3Y)', 'Medium (4-5Y)', 'Large (6-7Y)'],
    colors: ['Crimson Red', 'Royal Blue', 'Charcoal Grey'],
    description: '3-piece set with hooded cargo jacket, tactical nylon strap pockets, snap buttons, inner white graphic tee, and matching cuffed joggers.'
  },
  {
    id: 10,
    title: 'Boys China Parachute Patterned Bomber Jacket',
    code: 'DNo: 10007',
    category: 'boys',
    categoryName: 'Boys Collection',
    price: 1445,
    originalPrice: 1850,
    badge: 'POPULAR',
    badgeType: 'sale',
    rating: 4.8,
    reviews: 26,
    image: 'assets/images/product-boys-bomber-jacket.jpg',
    sizes: ['Small (3-4Y)', 'Medium (5-6Y)', 'Large (7-8Y)'],
    colors: ['Olive Camo Texture', 'Deep Navy Blue'],
    description: 'China Perashot Mandis fabric with striped ribbed collar, smooth zip closure, side pockets, and chest character patch.'
  },
  {
    id: 11,
    title: 'Boys Royal Embroidered Kurta Pajama (Eid & Festive)',
    code: 'DNo: Eid-Kurta-01',
    category: 'festive',
    categoryName: 'Festive & Eid',
    price: 2650,
    originalPrice: 3400,
    badge: 'PREMIUM',
    badgeType: 'festive',
    rating: 5.0,
    reviews: 61,
    image: 'assets/images/traditional-kurta-pajama.jpg',
    sizes: ['2-3 Years', '4-5 Years', '6-8 Years', '10-12 Years'],
    colors: ['Royal Ivory White'],
    description: 'Classy ivory embroidered Kurta with matching pajama trouser. Golden thread detailing on the ban collar, perfect for Jummah, weddings, and Eid.'
  },
  {
    id: 12,
    title: 'Newborn Mint-Stripe Organic Cotton Romper & Soft Toy',
    code: 'DNo: Baby-Romper-01',
    category: 'baby',
    categoryName: 'Baby & Newborn',
    price: 1199,
    originalPrice: 1500,
    badge: 'NEW',
    badgeType: 'new',
    rating: 4.8,
    reviews: 29,
    image: 'assets/images/baby-newborn-romper.jpg',
    sizes: ['0-3 Months', '3-6 Months', '6-12 Months'],
    colors: ['Mint Green & Cream'],
    description: 'Ultra-soft footed sleepsuit and day romper with easy snap buttons for hassle-free diaper changing. Hypoallergenic organic cotton fabric.'
  }
];

// STATE
let cart = JSON.parse(localStorage.getItem('khurram_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('khurram_wishlist')) || [];
let currentCategoryFilter = 'all';
let currentSearchQuery = '';
let activeQuickViewProduct = null;
let selectedModalSize = null;

function formatPKR(amount) {
  return 'Rs. ' + Number(amount).toLocaleString('en-PK');
}

function saveCart() {
  localStorage.setItem('khurram_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const cartBadgeHeader = document.getElementById('cart-badge');
  const cartMobileBadge = document.getElementById('mobile-cart-badge');
  const cartPriceDisplay = document.getElementById('cart-price-preview');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartGrandTotalEl = document.getElementById('cart-grand-total');
  const shippingProgressFill = document.getElementById('shipping-progress-fill');
  const shippingProgressText = document.getElementById('shipping-progress-text');

  if (cartBadgeHeader) {
    cartBadgeHeader.textContent = totalItems;
    cartBadgeHeader.classList.remove('pulse');
    void cartBadgeHeader.offsetWidth;
    cartBadgeHeader.classList.add('pulse');
  }
  if (cartMobileBadge) {
    cartMobileBadge.textContent = totalItems;
  }
  if (cartPriceDisplay) {
    cartPriceDisplay.textContent = formatPKR(subtotal);
  }

  let shipping = 0;
  if (subtotal === 0) {
    shipping = 0;
  } else if (subtotal >= STORE_CONFIG.freeShippingThreshold) {
    shipping = 0;
  } else {
    shipping = STORE_CONFIG.flatDeliveryFee;
  }

  const grandTotal = subtotal + shipping;

  if (cartSubtotalEl) cartSubtotalEl.textContent = formatPKR(subtotal);
  if (cartShippingEl) {
    cartShippingEl.textContent = subtotal === 0 ? 'Rs. 0' : (shipping === 0 ? 'FREE' : formatPKR(shipping));
    if (shipping === 0 && subtotal > 0) {
      cartShippingEl.style.color = '#3BB77E';
      cartShippingEl.style.fontWeight = 'bold';
    } else {
      cartShippingEl.style.color = '';
    }
  }
  if (cartGrandTotalEl) cartGrandTotalEl.textContent = formatPKR(grandTotal);

  if (shippingProgressFill && shippingProgressText) {
    const progress = Math.min(100, Math.round((subtotal / STORE_CONFIG.freeShippingThreshold) * 100));
    shippingProgressFill.style.width = progress + '%';
    
    if (subtotal >= STORE_CONFIG.freeShippingThreshold) {
      shippingProgressText.innerHTML = '🎉 You unlocked <strong>FREE Delivery</strong> across Pakistan!';
    } else {
      const remaining = STORE_CONFIG.freeShippingThreshold - subtotal;
      shippingProgressText.innerHTML = 'Add <strong>' + formatPKR(remaining) + '</strong> more for <strong>FREE Delivery</strong>!';
    }
  }

  renderCartItems();
  renderProducts();
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items-list');
  if (!cartItemsContainer) return;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛍️</div>
        <h4 style="font-size: 17px; margin-bottom: 6px; color: var(--heading);">Your Cart is Empty</h4>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 18px;">Explore our real store collection and add items to order!</p>
        <button class="btn-primary" style="font-size: 13px; padding: 10px 22px;" onclick="closeCartDrawer()">Continue Shopping</button>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-meta">Size: <strong>${item.size}</strong> ${item.code ? `• ${item.code}` : ''}</div>
        <div class="cart-item-price">${formatPKR(item.price)}</div>
      </div>
      <div class="cart-item-actions">
        <button class="btn-remove-item" onclick="removeFromCart(${item.id}, '${item.size}')" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <div class="qty-counter-control">
          <button class="qty-btn" onclick="changeCartQty(${item.id}, '${item.size}', -1)">-</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn" onclick="changeCartQty(${item.id}, '${item.size}', 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCart(productId, size = null, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const chosenSize = size || product.sizes[0];
  const existingIndex = cart.findIndex(i => i.id === productId && i.size === chosenSize);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      code: product.code,
      price: product.price,
      image: product.image,
      size: chosenSize,
      quantity: qty
    });
  }

  saveCart();
  showToast('Added <strong>' + product.title + '</strong> to Cart! 🛒');
}

function changeCartQty(productId, size, delta) {
  const index = cart.findIndex(i => i.id === productId && i.size === size);
  if (index === -1) return;

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
    showToast('Item removed from cart.');
  }
  saveCart();
}

function removeFromCart(productId, size) {
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart();
  showToast('Item removed from cart.');
}

function renderProducts() {
  const productsContainer = document.getElementById('products-grid');
  if (!productsContainer) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCategory = currentCategoryFilter === 'all' || p.category === currentCategoryFilter;
    const matchSearch = p.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) || 
                        p.categoryName.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                        (p.code && p.code.toLowerCase().includes(currentSearchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    productsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px;">
        <h3 style="font-size: 20px; color: var(--heading); margin-bottom: 8px;">No matching garments found</h3>
        <p style="color: var(--text-muted); font-size: 14px;">Try searching for "Jacket", "Suit", "Frock", "Tracksuit" or select a different category.</p>
      </div>
    `;
    return;
  }

  productsContainer.innerHTML = filtered.map(p => {
    const inCartItem = cart.find(i => i.id === p.id);
    const isWishlisted = wishlist.includes(p.id);

    return `
      <div class="product-card" data-id="${p.id}">
        <span class="product-badge">${p.badge}</span>
        
        <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id})" title="Add to Wishlist">
          <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
        </button>

        <div class="product-img-wrap" onclick="openQuickView(${p.id})">
          <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy">
          <button class="quick-view-overlay-btn" onclick="event.stopPropagation(); openQuickView(${p.id})">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
        </div>

        <div class="product-details">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="product-cat">${p.categoryName}</span>
            ${p.code ? `<span style="font-size: 10.5px; font-weight: 700; color: var(--primary); background: var(--primary-light); padding: 2px 6px; border-radius: 4px;">${p.code}</span>` : ''}
          </div>

          <h3 class="product-title" title="${p.title}" onclick="openQuickView(${p.id})">${p.title}</h3>

          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-current">${formatPKR(p.price)}</span>
              <span class="price-old">${formatPKR(p.originalPrice)}</span>
            </div>

            ${inCartItem ? `
              <div class="qty-counter-control">
                <button class="qty-btn" onclick="changeCartQty(${p.id}, '${inCartItem.size}', -1)">-</button>
                <span class="qty-display">${inCartItem.quantity}</span>
                <button class="qty-btn" onclick="changeCartQty(${p.id}, '${inCartItem.size}', 1)">+</button>
              </div>
            ` : `
              <button class="btn-add-cart" onclick="addToCart(${p.id})">
                <i class="fa-solid fa-cart-shopping"></i> Add
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeQuickViewProduct = product;
  selectedModalSize = product.sizes[0];

  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-title').textContent = product.title;
  document.getElementById('modal-price').textContent = formatPKR(product.price);
  document.getElementById('modal-old-price').textContent = formatPKR(product.originalPrice);
  document.getElementById('modal-desc').textContent = `${product.description} Available in colors: ${product.colors ? product.colors.join(', ') : 'Multiple colors'}.`;
  document.getElementById('modal-rating').textContent = `${product.rating} (${product.reviews} verified reviews) • ${product.code || ''}`;

  const sizesContainer = document.getElementById('modal-sizes-container');
  sizesContainer.innerHTML = product.sizes.map((s, idx) => `
    <button class="modal-size-btn ${idx === 0 ? 'active' : ''}" onclick="selectModalSize('${s}', this)">${s}</button>
  `).join('');

  document.getElementById('modal-qty-val').textContent = '1';
  document.getElementById('quick-view-backdrop').classList.add('open');
}

function selectModalSize(size, btn) {
  selectedModalSize = size;
  document.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function adjustModalQty(delta) {
  const el = document.getElementById('modal-qty-val');
  let current = parseInt(el.textContent, 10) || 1;
  current = Math.max(1, current + delta);
  el.textContent = current;
}

function addModalToCart() {
  if (!activeQuickViewProduct) return;
  const qty = parseInt(document.getElementById('modal-qty-val').textContent, 10) || 1;
  addToCart(activeQuickViewProduct.id, selectedModalSize, qty);
  closeQuickView();
}

function closeQuickView() {
  document.getElementById('quick-view-backdrop').classList.remove('open');
  activeQuickViewProduct = null;
}

function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(productId);
    showToast('Added to wishlist ❤️');
  }
  localStorage.setItem('khurram_wishlist', JSON.stringify(wishlist));
  const wishlistBadge = document.getElementById('wishlist-badge');
  if (wishlistBadge) wishlistBadge.textContent = wishlist.length;
  renderProducts();
}

function openCartDrawer() {
  document.getElementById('cart-backdrop').classList.add('open');
}
function closeCartDrawer() {
  document.getElementById('cart-backdrop').classList.remove('open');
}

let toastTimeout;
function showToast(msg) {
  const toastNotice = document.getElementById('toast-notice');
  const toastMessage = document.getElementById('toast-message');
  if (!toastNotice) return;
  toastMessage.innerHTML = msg;
  toastNotice.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastNotice.classList.remove('show');
  }, 2800);
}

function sendWhatsAppOrder() {
  if (cart.length === 0) {
    alert('Your cart is empty! Please add some clothes to order.');
    return;
  }

  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const addressInput = document.getElementById('checkout-address');

  const customerName = nameInput ? nameInput.value.trim() : '';
  const customerPhone = phoneInput ? phoneInput.value.trim() : '';
  const customerAddress = addressInput ? addressInput.value.trim() : '';

  if (!customerName || !customerPhone || !customerAddress) {
    alert('Please enter your Name, Phone Number, and Delivery Address to place the order.');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= STORE_CONFIG.freeShippingThreshold ? 0 : STORE_CONFIG.flatDeliveryFee;
  const grandTotal = subtotal + shipping;

  let message = `🛍️ *NEW ORDER - Khurram Garments & Shopping Center*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Customer Name:* ${customerName}\n`;
  message += `📞 *Phone Number:* ${customerPhone}\n`;
  message += `📍 *Delivery Address:* ${customerAddress}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📦 *ORDER ITEMS:*\n\n`;

  cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.title}*\n`;
    message += `   Code: ${item.code || 'N/A'} | Size: ${item.size} | Qty: ${item.quantity} | ${formatPKR(item.price * item.quantity)}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Subtotal: ${formatPKR(subtotal)}\n`;
  message += `Delivery Fee: ${shipping === 0 ? 'FREE' : formatPKR(shipping)}\n`;
  message += `💰 *TOTAL AMOUNT: ${formatPKR(grandTotal)}*\n`;
  message += `🚚 *Payment:* Cash on Delivery (COD)\n\n`;
  message += `*Store Location:* ${STORE_CONFIG.address}\n`;
  message += `Please confirm my order and share dispatch details. Thank you!`;

  const encodedUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

// =========================================================
function nextAnnouncement() {
    showAnnouncement((currentIdx + 1) % slides.length);
  }

  function prevAnnouncement() {
    showAnnouncement((currentIdx - 1 + slides.length) % slides.length);
  }

  function startTicker() {
    stopTicker();
    tickerTimer = setInterval(nextAnnouncement, TICKER_INTERVAL_MS);
  }

  function stopTicker() {
    if (tickerTimer) {
      clearInterval(tickerTimer);
      tickerTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextAnnouncement();
      startTicker();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevAnnouncement();
      startTicker();
    });
  }

  if (slider) {
    slider.addEventListener('mouseenter', stopTicker);
    slider.addEventListener('mouseleave', startTicker);
  }

  showAnnouncement(0);
  startTicker();
}

// HERO BANNER SLIDER (TRADITION STORES STYLE - FIXED 5s AUTO-PLAY)
// =========================================================
let currentSlideIndex = 0;
let sliderTimer = null;
const SLIDER_INTERVAL_MS = 5000; // Fixed strictly at 5 seconds per user request

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('slider-prev-btn');
  const nextBtn = document.getElementById('slider-next-btn');
  const sliderWrap = document.getElementById('hero-slider-wrap');

  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlideIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  function startTimer() {
    stopTimer();
    sliderTimer = setInterval(nextSlide, SLIDER_INTERVAL_MS);
  }

  function stopTimer() {
    if (sliderTimer) {
      clearInterval(sliderTimer);
      sliderTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
      startTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
      startTimer();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      showSlide(idx);
      startTimer();
    });
  });

  // Pause on hover, resume on leave
  if (sliderWrap) {
    sliderWrap.addEventListener('mouseenter', stopTimer);
    sliderWrap.addEventListener('mouseleave', startTimer);
    
    // Smooth Touch swipe for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    sliderWrap.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopTimer();
    }, { passive: true });
    
    sliderWrap.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        nextSlide();
      } else if (touchEndX - touchStartX > 45) {
        prevSlide();
      }
      startTimer();
    }, { passive: true });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && sliderWrap && isElementInViewport(sliderWrap)) {
      nextSlide();
      startTimer();
    } else if (e.key === 'ArrowLeft' && sliderWrap && isElementInViewport(sliderWrap)) {
      prevSlide();
      startTimer();
    }
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= -200 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200;
  }

  // Start auto-play fixed at 5 seconds
  showSlide(0);
  startTimer();
}

function filterCategoryFromBanner(cat) {
  currentCategoryFilter = cat;
  document.querySelectorAll('.cat-tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-category') === cat);
  });
  const catSelect = document.getElementById('search-category-select');
  if (catSelect) catSelect.value = cat;
  renderProducts();

  const prodSection = document.getElementById('products-section');
  if (prodSection) {
    prodSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cat-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.cat-tab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentCategoryFilter = e.currentTarget.getAttribute('data-category');
      renderProducts();
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  const catSelect = document.getElementById('search-category-select');
  if (catSelect) {
    catSelect.addEventListener('change', (e) => {
      currentCategoryFilter = e.target.value;
      document.querySelectorAll('.cat-tab-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-category') === currentCategoryFilter);
      });
      renderProducts();
    });
  }

  const wishlistBadge = document.getElementById('wishlist-badge');
  if (wishlistBadge) {
    wishlistBadge.textContent = wishlist.length;
  }

  initHeroSlider();
  updateCartUI();
  renderProducts();
});

