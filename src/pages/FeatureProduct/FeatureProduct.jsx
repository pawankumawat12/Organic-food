import React, { useRef } from "react";
import "./FeatureProduct.scss";

const products = [
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
  {
    name: "Pure Squeezed No Pulp Orange Juice",
    img: "./src/assets/category4.jpg",
    rating: 5,
    reviews: 222,
    oldPrice: 24.0,
    newPrice: 18.0,
    discount: "10% OFF",
  },
];

const FeatureProduct = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (direction === "left") {
      current.scrollLeft -= 240;
    } else {
      current.scrollLeft += 240;
    }
  };

  return (
    <>
      <div className="category-slider-wrapper">
        <div className="slider-header">
          <h2>Featured Products</h2>
          <div className="controls">
            <button className="view-all">View All</button>
            <button onClick={() => scroll("left")} className="arrow">
              {"<"}
            </button>
            <button onClick={() => scroll("right")} className="arrow">
              {">"}
            </button>
          </div>
        </div>

        <div className="category-slider" ref={sliderRef}>
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="rating">
                {"★".repeat(product.rating)}
                <span>({product.reviews})</span>
              </div>
              <div className="price">
                <span className="old-price">
                  ${product.oldPrice.toFixed(2)}
                </span>
                <span className="new-price">
                  ${product.newPrice.toFixed(2)}
                </span>
                <span className="discount">{product.discount}</span>
              </div>
              <div className="cart-controls">
                <input type="number" min="1" defaultValue="1" />
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="discount-banner">
          <div className="banner-content">
            <div className="text-section">
              <h2>
                Get 25% Discount on
                <br />
                your first purchase
              </h2>
              <p>Just Sign Up & Register it now to become member.</p>
            </div>
            <form className="signup-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
