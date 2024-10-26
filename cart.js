$(document).ready(function() {  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];  
  let cartCount = localStorage.getItem('cartCount') || 0;  

  function updateCartCount() {
      $('#cart-count').text(`(${cart.length})`);
      $('#cart-count-display').text(`(${cart.length})`); 
      $('#cart-count-nav').text(`(${cart.length})`);
  }

  updateCartCount(); 

  const cartItemsContainer = $('#cart-items');  
  cartItemsContainer.empty(); 

  if (cart.length > 0) {  
      cart.forEach(item => {  
          cartItemsContainer.append(`  
              <div class="cartCtn" data-id="${item.id}">  
                  <div class="grid four_row">  
                      <div class="grid two_col">  
                          <div class="productImg"><img src="${item.image}" alt="${item.title}"></div>  
                          <div class="productDetails">  
                              <h3>${item.title}</h3>  
                              <p>Made my Day Dress for Girls</p>  
                              <div class="productDetailsOne" style="display: flex; flex-direction: column;">  
                                  <label for="">SIZE:</label>  
                                  <span>Medium</span>  
                                  <h4>Change</h4>  
                              </div>  
                              <div class="productDetailsTwo" style="display: flex; flex-direction: column;">  
                                  <label for="">GIFT WRAPPING</label>  
                                  <span>Add</span>  
                              </div>  
                          </div>  
                      </div>  
                      <div class="price">  
                          <span class="item-price" data-price="${item.price}">$${item.price}</span>  
                      </div>  
                       
                      <div class="price">  
                          <div class="quantity-control" style="display: flex; align-items: center; gap: 15px;">  
                              <button class="decrease">-</button>  
                              <p><span class="quantity">${item.quantity}</span></p>  
                              <button class="increase">+</button>  
                          </div>  
                      </div>  
                    <div class="price" style="display: flex; align-items: center; gap: 10px; font-weight: 600;">  
                    <span>$<span class="item-total">${(item.price * item.quantity).toFixed(2)}</span></span>  
                    <div class="remove-item" style="color: #dfafa7; cursor: pointer;">X</div> 
                      </div>  
                  </div>  
              </div>  
          `);  
          updateItemTotal(item); 
      });  
      updateSubtotal(); 
  } else {  
      cartItemsContainer.append('<p>Your cart is empty.</p>');  
  }  

  function updateItemTotal(item) {
      const totalPrice = item.price * item.quantity;
      $(`.cartCtn[data-id="${item.id}"] .item-total`).text(totalPrice.toFixed(2));
      updateSubtotal(); 
  }

  function updateSubtotal() {
      let subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      $('#subtotal',).text(`$${subtotal.toFixed(2)}`);
      let grandtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      $('#grandtotal').text(`$${grandtotal.toFixed(2)}`);
  }

  cartItemsContainer.on('click', '.increase', function() {  
      const itemId = $(this).closest('.cartCtn').data('id');  
      const cartItem = cart.find(item => item.id === itemId);  
      cartItem.quantity += 1;  

      localStorage.setItem('cart', JSON.stringify(cart));  
      $(this).siblings('.quantity').text(cartItem.quantity); 
      updateItemTotal(cartItem); 
      updateCartCount(); 
  });  

  cartItemsContainer.on('click', '.decrease', function() {  
      const itemId = $(this).closest('.cartCtn').data('id');  
      const cartItem = cart.find(item => item.id === itemId);  

      if (cartItem.quantity > 1) {  
          cartItem.quantity -= 1;  
          localStorage.setItem('cart', JSON.stringify(cart));  
          $(this).siblings('.quantity').text(cartItem.quantity); 
          updateItemTotal(cartItem); 
          updateCartCount(); 
      } else {  
          const confirmRemoval = confirm('Remove this item from cart?');  
          if (confirmRemoval) {  
              cart = cart.filter(item => item.id !== itemId);  
              localStorage.setItem('cart', JSON.stringify(cart));  
              $(this).closest('.cartCtn').remove();  
              updateSubtotal(); 
              updateCartCount();
          }  
      }  
  });  

  cartItemsContainer.on('click', '.remove-item', function() {  
      const itemId = $(this).closest('.cartCtn').data('id');  
      const confirmRemoval = confirm('Remove this item from cart?');  
      if (confirmRemoval) {  
          cart = cart.filter(item => item.id !== itemId);  
          localStorage.setItem('cart', JSON.stringify(cart));  
          $(this).closest('.cartCtn').remove();  
          updateSubtotal(); 
          updateCartCount(); 
      }  
  });  
});
