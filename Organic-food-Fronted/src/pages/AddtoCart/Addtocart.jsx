import './AddtoCart.scss';
function AddtoCart(){
    return(
       <>
       <div class="cart-page">
  <div class="cart-header">
    <h2>Your cart</h2>
    <a href="#" class="continue-shopping">Continue shopping</a>
  </div>

  <table class="cart-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="product-info">
          <img src="wallet.jpg" alt="Wave Wallet" />
          <div>
            <p class="product-title">Wave Wallet</p>
            <p class="product-color">Color: Earth</p>
          </div>
        </td>
        <td>$215.00</td>
        <td>
          <div class="quantity-controls">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </td>
        <td>$215.00</td>
      </tr>
    </tbody>
  </table>

  <div class="cart-summary">
    <div class="subtotal">
      <p>Subtotal <span>$215.00 CAD</span></p>
      <small>Taxes and shipping calculated at checkout</small>
    </div>
    <div class="checkout-buttons">
      <button class="checkout">Check out</button>
      <button class="shop-pay">shop <strong>Pay</strong></button>
      <button class="gpay">G Pay</button>
    </div>
  </div>

  <div class="newsletter">
    <h4>Sign up to our emails</h4>
    <form>
      <input type="email" placeholder="Your email" />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</div>

       </>
    )
}
export default AddtoCart;