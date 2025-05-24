import "./AdminProduct.scss";
function AdminProduct() {
  return (
    <>
     <div class="admin-dashboard">
  <div class="summary-cards">
    <div class="card"> <div class="circle">↗</div> <p>Total Sales</p><h3>$560K</h3> </div>
    <div class="card"> <div class="circle">↗</div> <p>Total Sales</p><h3>$560K</h3> </div>
    <div class="card"> <div class="circle">↗</div> <p>Total Sales</p><h3>$560K</h3> </div>
    <div class="card"> <div class="circle">↗</div> <p>Total Sales</p><h3>$560K</h3> </div>
  </div>

  <div class="controls">
    <div class="left">
      <button class="btn border">Filters</button>
      <button class="btn blue">+ Add User</button>
      <span class="selection-info">1 row selected</span>
    </div>
    <input type="text" class="search-box" placeholder="Search" />
  </div>

  <div class="table-container">
    <table class="user-table">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Learners</th>
          <th>Language</th>
          <th>Occupation</th>
          <th>Objective</th>
          <th>Subscription</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="user-info">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
              <div>
                <div class="name">John Doe 🇮🇳</div>
                <div class="email">john.doe@gmail.com</div>
              </div>
            </div>
          </td>
          <td>English</td>
          <td>Freelance</td>
          <td>Fluent</td>
          <td>Free Trial</td>
          <td>
            <button class="icon-btn">🗑</button>
            <button class="icon-btn">✏️</button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="user-info">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
              <div>
                <div class="name">John Doe 🇮🇳</div>
                <div class="email">john.doe@gmail.com</div>
              </div>
            </div>
          </td>
          <td>English</td>
          <td>Freelance</td>
          <td>Fluent</td>
          <td>Free Trial</td>
          <td>
            <button class="icon-btn">🗑</button>
            <button class="icon-btn">✏️</button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="user-info">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
              <div>
                <div class="name">John Doe 🇮🇳</div>
                <div class="email">john.doe@gmail.com</div>
              </div>
            </div>
          </td>
          <td>English</td>
          <td>Freelance</td>
          <td>Fluent</td>
          <td>Free Trial</td>
          <td>
            <button class="icon-btn">🗑</button>
            <button class="icon-btn">✏️</button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="user-info">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
              <div>
                <div class="name">John Doe 🇮🇳</div>
                <div class="email">john.doe@gmail.com</div>
              </div>
            </div>
          </td>
          <td>English</td>
          <td>Freelance</td>
          <td>Fluent</td>
          <td>Free Trial</td>
          <td>
            <button class="icon-btn">🗑</button>
            <button class="icon-btn">✏️</button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="user-info">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
              <div>
                <div class="name">John Doe 🇮🇳</div>
                <div class="email">john.doe@gmail.com</div>
              </div>
            </div>
          </td>
          <td>English</td>
          <td>Freelance</td>
          <td>Fluent</td>
          <td>Free Trial</td>
          <td>
            <button class="icon-btn">🗑</button>
            <button class="icon-btn">✏️</button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="user-info">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
              <div>
                <div class="name">John Doe 🇮🇳</div>
                <div class="email">john.doe@gmail.com</div>
              </div>
            </div>
          </td>
          <td>English</td>
          <td>Freelance</td>
          <td>Fluent</td>
          <td>Free Trial</td>
          <td>
            <button class="icon-btn">🗑</button>
            <button class="icon-btn">✏️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="pagination">
    <button>Previous</button>
    <span>Page 1 of 10</span>
    <button>Next</button>
  </div>
</div>

    </>
  );
}

export default AdminProduct;
