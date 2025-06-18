import React from "react";

import "./AdminDashboard.scss";
import Charts from "../Charts/Charts";
function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div class="summary-cards">
        <div class="card">
          <div class="circle">↗</div> <p>Total Sales</p>
          <h3>$560K</h3>{" "}
        </div>
        <div class="card">
          <div class="circle">↗</div> <p>Total Sales</p>
          <h3>$560K</h3>{" "}
        </div>
        <div class="card">
          <div class="circle">↗</div> <p>Total Sales</p>
          <h3>$560K</h3>{" "}
        </div>
        <div class="card">
          <div class="circle">↗</div> <p>Total Sales</p>
          <h3>$560K</h3>{" "}
        </div>
      </div>

      <div class="charts-section">
        <Charts />
      </div>
    </div>
  );
}
export default AdminDashboard;
