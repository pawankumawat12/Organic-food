import "./contentimg.scss";
function Contentimg() {
  return (
    <>
      <div className="promo-section">
        <div className="promo-item large">
          <div className="content">
            <h2>Items on SALE</h2>
            <p>Discounts up to 30%</p>
            <a href="#" className="button">
              Shop Now
            </a>
          </div>
        </div>
        <div className="promo-column">
          <div className="promo-item small1">
            <div className="content">
              <h2>Combo offers</h2>
              <p>Discounts up to 50%</p>
              <a href="#" className="button">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo-item small2">
            <div className="content">
              <h2>Discount Coupons</h2>
              <p>Discounts up to 40%</p>
              <a href="#" className="button">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contentimg;
