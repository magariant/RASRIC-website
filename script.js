// Initialize Swiper.js
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Tab functionality
const tabs = document.querySelectorAll('.tabs button');
const tabContents = document.querySelectorAll('.tab-pane');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === target) content.classList.add('active');
    });
  });
});

// Add-to-Cart Functionality
const cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.dataset.item;
    cart.push(item);
    alert(`${item} added to cart.`);
  });
});

// Checkout Functionality
document.getElementById('checkout').addEventListener('click', () => {
  alert(`You have ${cart.length} items in your cart.`);
  console.log(cart);
});
