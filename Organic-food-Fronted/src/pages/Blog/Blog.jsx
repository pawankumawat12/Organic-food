import "./Blog.scss";
import img1 from "../../assets/img2.jpg";
import img2 from "../../assets/bitelichi.jpg";
import img3 from "../../assets/tomato.jpg";
import walldown from "../../assets/walldownload.jpg";
import appstore from "../../assets/app-store.jpg";
import googlepay from "../../assets/google-pay.jpg";
function Blog() {
  return (
    <>
      <section className="blog-section">
        <div className="header">
          <h2>Our Recent Blog</h2>
          <a href="#" className="view-all-btn">
            View All
          </a>
        </div>

        <div className="blog-cards">
          <div className="blog-card">
            <img src={img1} alt="Blog 1" />
            <div className="blog-content">
              <div className="meta">
                <span>
                  <i className="fa fa-calendar"></i> 22 Aug 2021
                </span>
                <span>
                  <i className="fa fa-tags"></i> Tips & Tricks
                </span>
              </div>
              <h3>Top 10 casual look ideas to dress up your kids</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                eleifend viverra enim tincidunt...
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src={img2} alt="Blog 2" />
            <div className="blog-content">
              <div className="meta">
                <span>
                  <i className="fa fa-calendar"></i> 25 Aug 2021
                </span>
                <span>
                  <i className="fa fa-bolt"></i> Trending
                </span>
              </div>
              <h3>Latest trends of wearing street wears supremely</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                eleifend viverra enim tincidunt...
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src={img3} alt="Blog 3" />
            <div className="blog-content">
              <div className="meta">
                <span>
                  <i className="fa fa-calendar"></i> 28 Aug 2021
                </span>
                <span>
                  <i className="fa fa-lightbulb"></i> Inspiration
                </span>
              </div>
              <h3>10 Different Types of comfortable clothes ideas for women</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                eleifend viverra enim tincidunt...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="app-download">
        <div className="content">
          <h2>Download Organic App</h2>
          <p>Online Orders made easy, fast and reliable</p>
          <div className="app-buttons">
            <a href="#">
              <img src={appstore} alt="Download on the App Store" />
            </a>
            <a href="#">
              <img src={googlepay} alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="image">
          <img src={walldown} alt="Mobile App Preview" />
        </div>
      </section>
      <section className="popular-searches">
  <h2>People are also looking for</h2>
  <div className="tags">
    <span>Blue diamon almonds</span>
    <span>Angie’s Boomchickapop Corn</span>
    <span>Salty kettle Corn</span>
    <span>Chobani Greek Yogurt</span>
    <span>Sweet Vanilla Yogurt</span>
    <span>Foster Farms Takeout Crispy wings</span>
    <span>Warrior Blend Organic</span>
    <span>Chao Cheese Creamy</span>
    <span>Chicken meatballs</span>
  </div>
</section>

<section className="features">
  <div className="feature-card">
    <i className="icon">📦</i>
    <h3>Free delivery</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
  </div>
  <div className="feature-card">
    <i className="icon">🔒</i>
    <h3>100% secure payment</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
  </div>
  <div className="feature-card">
    <i className="icon">🛡️</i>
    <h3>Quality guarantee</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
  </div>
  <div className="feature-card">
    <i className="icon">✅</i>
    <h3>guaranteed savings</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
  </div>
  <div className="feature-card">
    <i className="icon">🎁</i>
    <h3>Daily offers</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
  </div>
</section>

    </>
  );
}
export default Blog;
