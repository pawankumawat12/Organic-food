import "./AdminProduct.scss";

function AdminProduct() {
  return (
    <div className="admin-dashboard">
      <div className="controls">
        <div className="left">
          <button className="btn border">Filters</button>
          <button className="btn blue">+ Add Product</button>
          <span className="selection-info">1 row selected</span>
        </div>
        <input type="text" className="search-box" placeholder="Search" />
      </div>

      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Title</th>
              <th>Product Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Warranty Period</th>
              <th>Return Policy</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr key={i}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>iPhone 15</td>
                <td>
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Product"
                    className="product-img"
                  />
                </td>
                <td>Latest Apple iPhone withaklsjddddddddddddddddddd A16 Bionic chip</td>
                <td>₹79,999</td>
                <td>10%</td>
                <td>Mobiles</td>
                <td>4.5star</td>
                <td>1 Year</td>
                <td>7 Days Return</td>
                <td>15 pcs</td>
                <td>
                  <button className="icon-btn">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button className="icon-btn2">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button>Previous</button>
        <span>Page 1 of 10</span>
        <button>Next</button>
      </div>
    </div>
  );
}

export default AdminProduct;
