import Category from "../Category/Category";
import "./Home.scss";
import PopularProduct from "../PopularProduct/PopularProduct";
import Contentimg from "../contentimg/Contentimg";
import FeatureProduct from "../FeatureProduct/FeatureProduct";
import JustArrived from "../JustArrived/JustArrived";
import Blog from "../Blog/Blog";
import Product from "../products/Product";

function Home() {
  return (
    <>
      <div className="container-fluid home">
        <div className="">
          <div className="hero-section">
            <p className="headline">
              <span className="organic-text">Organic</span> Foods at
              <br /> your <span className="doorsteps-text">Doorsteps</span>
            </p>
            <p className="subtext">Dignissim massa diam elementum.</p>

            <div className="button-group">
              <button className="btn btn-green">START SHOPPING</button>
              <button className="btn btn-dark">JOIN NOW</button>
            </div>

            <div className="stats">
              <div className="stat-item">
                <p className="stat-number">14k+</p>
                <p className="stat-label">
                  PRODUCT
                  <br />
                  VARIETIES
                </p>
              </div>
              <div className="stat-item">
                <p className="stat-number">50k+</p>
                <p className="stat-label">
                  HAPPY
                  <br />
                  CUSTOMERS
                </p>
              </div>
              <div className="stat-item">
                <p className="stat-number">10+</p>
                <p className="stat-label">
                  STORE
                  <br />
                  LOCATIONS
                </p>
              </div>
            </div>
          </div>

          <div className="features flex-wrap">
            <div className="feature-box fresh">
              <div className="icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <div className="content">
                <h3>Fresh from farm</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipi elit.
                </p>
              </div>
            </div>

            <div className="feature-box organic">
              <div className="icon">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="content">
                <h3>100% Organic</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipi elit.
                </p>
              </div>
            </div>

            <div className="feature-box delivery">
              <div className="icon">
                <i className="fas fa-truck"></i>
              </div>
              <div className="content">
                <h3>Free delivery</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipi elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Category />
      <Product />
      <Contentimg />
      <FeatureProduct />
      <PopularProduct />
      <JustArrived />
      <Blog />
      </div>
    </>
  );
}
export default Home;
