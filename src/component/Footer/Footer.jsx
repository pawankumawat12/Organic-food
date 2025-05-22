import "./Footer.scss";
function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="./src/assets/logo.png" alt="Organic Logo" className="logo" />
            <span className="logo-text mt-1">Organic</span>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-amazon"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="column">
              <h4>Organic</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Conditions</a>
                </li>
                <li>
                  <a href="#">Our Journals</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Affiliate Programme</a>
                </li>
                <li>
                  <a href="#">Ultras Press</a>
                </li>
              </ul>
            </div>

            <div className="column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Offers</a>
                </li>
                <li>
                  <a href="#">Discount Coupons</a>
                </li>
                <li>
                  <a href="#">Stores</a>
                </li>
                <li>
                  <a href="#">Track Order</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Info</a>
                </li>
              </ul>
            </div>

            <div className="column">
              <h4>Customer Service</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Returns & Refunds</a>
                </li>
                <li>
                  <a href="#">Cookie Guidelines</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
              </ul>
            </div>

            <div className="column subscribe">
              <h4>Subscribe Us</h4>
              <p>
                Subscribe to our newsletter to get updates about our grand
                offers.
              </p>
              <form className="subscribe-form">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Organic. All rights reserved.</p>
          <p>
            HTML Template by <a href="#">TemplatesJungle</a> Distributed By
            <a href="#">ThemeWagon</a>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
