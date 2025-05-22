import React, { useRef } from 'react';
import './Category.scss';
import backimg from '../../assets/back-h.jpg';
import backimg2 from '../../assets/category1.jpg';
import backimg3 from '../../assets/category2.jpg';
import backimg4 from '../../assets/category7.jpg';
import backimg5 from '../../assets/category4.jpg';
import backimg6 from '../../assets/category5.jpg';
import backimg7 from '../../assets/category7.jpg';

const categories = [
  { name: 'Fruits & Veges', img: backimg },
  { name: 'Beverages', img: backimg2 },
  { name: 'Meat Products', img: backimg3 },
  { name: 'Breads', img: backimg4 },
  { name: 'Fruits & Veges', img: backimg5 },
  { name: 'Breads & Sweets', img: backimg6 },
  { name: 'Fruits & Veges', img: backimg7 },
  { name: 'Beverages', img: backimg },
  { name: 'Fruits & Veges', img: backimg2 },
  { name: 'Breads & Sweets', img: backimg3 },
  { name: 'Fruits & Veges', img: backimg4 },
  { name: 'Beverages', img: backimg5 },
  { name: 'Fruits & Veges', img: backimg6 },
  { name: 'Breads & Sweets', img: backimg7 },
  { name: 'Fruits & Veges', img: backimg }
];

const Category = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (direction === 'left') {
      current.scrollLeft -= 166;
    } else {
      current.scrollLeft += 166;
    }
  };

  return (
    <div className="category-slider-wrapper">
      <div className="slider-header">
        <h2>Category</h2>
        <div className="controls">
          <button className="view-all">View All</button>
          <button onClick={() => scroll('left')} className="arrow">{'<'}</button>
          <button onClick={() => scroll('right')} className="arrow">{'>'}</button>
        </div>
      </div>

      <div className="category-slider" ref={sliderRef}>
        {categories.map((cat, index) => (
          <div className="category-item" key={index}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
