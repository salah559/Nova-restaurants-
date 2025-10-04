let cart = [];

function loadCart() {
  const saved = localStorage.getItem('nova_cart');
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch(e) {
      cart = [];
    }
  }
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem('nova_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find(x => x.id == itemId);
  if (!item) return;
  
  const existingItem = cart.find(x => x.id == itemId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name_en: item.name_en,
      name_ar: item.name_ar,
      price: item.price,
      quantity: 1
    });
  }
  
  saveCart();
  showAddedFeedback();
}

function removeFromCart(itemId) {
  cart = cart.filter(x => x.id != itemId);
  saveCart();
  renderCart();
}

function updateQuantity(itemId, change) {
  const item = cart.find(x => x.id == itemId);
  if (!item) return;
  
  item.quantity += change;
  
  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    saveCart();
    renderCart();
  }
}

function calculateTotal() {
  return cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function openCart() {
  renderCart();
  const modal = document.getElementById('cart-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeCart() {
  const modal = document.getElementById('cart-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const emptyMsg = document.getElementById('cart-empty');
  const summary = document.getElementById('cart-summary');
  
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (summary) summary.style.display = 'none';
    return;
  }
  
  if (emptyMsg) emptyMsg.style.display = 'none';
  if (summary) summary.style.display = 'block';
  
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  
  container.innerHTML = cart.map(item => {
    const name = lang === 'ar' ? item.name_ar : item.name_en;
    const price = parseFloat(item.price.replace('$', ''));
    const subtotal = (price * item.quantity).toFixed(2);
    
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${name}</h4>
          <p class="cart-item-price">${item.price} × ${item.quantity} = $${subtotal}</p>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})" data-i18n="cart_remove">Remove</button>
        </div>
      </div>
    `;
  }).join('');
  
  const totalPrice = calculateTotal().toFixed(2);
  const totalElement = document.getElementById('cart-total-price');
  if (totalElement) {
    totalElement.textContent = '$' + totalPrice;
  }
}

function showAddedFeedback() {
  const existingFeedback = document.querySelector('.cart-feedback');
  if (existingFeedback) {
    existingFeedback.remove();
  }
  
  const feedback = document.createElement('div');
  feedback.className = 'cart-feedback';
  feedback.setAttribute('data-i18n', 'cart_added');
  
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  if (translations[lang] && translations[lang].cart_added) {
    feedback.textContent = translations[lang].cart_added;
  } else {
    feedback.textContent = 'Added to cart!';
  }
  
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    feedback.classList.remove('show');
    setTimeout(() => feedback.remove(), 300);
  }, 2000);
}

function checkout() {
  if (cart.length === 0) return;
  
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  let successMsg = 'Order placed successfully! We\'ll contact you soon.';
  
  if (translations[lang] && translations[lang].cart_success) {
    successMsg = translations[lang].cart_success;
  }
  
  alert(successMsg);
  
  cart = [];
  saveCart();
  renderCart();
  closeCart();
}

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
  }
  
  const closeBtn = document.getElementById('close-cart');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCart);
  }
  
  const checkoutBtn = document.getElementById('cart-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', checkout);
  }
  
  window.addEventListener('nova-lang-changed', () => {
    renderCart();
  });
});
