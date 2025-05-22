import "./Sidebar.scss";
import { useState } from "react";
function Sidebar({closeSidebar}) {
  const [opendropdown, setOpendropdown] = useState(false);
  const handleDropdown = () =>{
    setOpendropdown((prev) => !prev);
  }
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>MENU</h3>
          <button className="close-btn" onClick={closeSidebar}>&#10005;</button>
        </div>
        <ul className="menu-list">
          <li>
            <i className="fas fa-apple-alt"></i> Fruits and Vegetables
          </li>
          <li>
            <i className="fas fa-cheese"></i> Dairy and Eggs
          </li>
          <li>
            <i className="fas fa-drumstick-bite"></i> Meat and Poultry
          </li>
          <li>
            <i className="fas fa-fish"></i> Seafood
          </li>
          <li>
            <i className="fas fa-bread-slice"></i> Bakery and Bread
          </li>
          <li>
            <i className="fas fa-box"></i> Canned Goods
          </li>
          <li>
            <i className="fas fa-snowflake"></i> Frozen Foods
          </li>
          <li>
            <i className="fas fa-utensils"></i> Pasta and Rice
          </li>
          <li>
            <i className="fas fa-mug-hot"></i> Breakfast Foods
          </li>
          <li>
            <i className="fas fa-cookie-bite"></i> Snacks and Chips
          </li>
             <li onClick={handleDropdown}>
            <i className="fas fa-glass-whiskey"></i> Beverages{" "}
            <i className={`fas fa-caret-${opendropdown ? "up" : "down"}`}></i>
            {opendropdown && (
              <ul className="submenu">
                <li>Juices</li>
                <li>Soft Drinks</li>
                <li>Tea & Coffee</li>
                <li>Water</li>
              </ul>
            )}
          </li>
          <li>
            <i className="fas fa-envelope-open-text"></i> Spices and Seasonings
          </li>
          <li>
            <i className="fas fa-baby"></i> Baby Food and Formula
          </li>
          <li>
            <i className="fas fa-heartbeat"></i> Health and Wellness
          </li>
          <li>
            <i className="fas fa-box-open"></i> Household Supplies
          </li>
          <li>
            <i className="fas fa-pump-soap"></i> Personal Care
          </li>
          <li>
            <i className="fas fa-paw"></i> Pet Food and Supplies
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
