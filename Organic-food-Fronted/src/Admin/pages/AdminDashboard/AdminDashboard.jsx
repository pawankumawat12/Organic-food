import React from "react";

import "./AdminDashboard.scss";
import Charts from "../Charts/Charts";
function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="summary-cards">
        <div className="card">
          <div className="circle">↗</div> <p>Total Sales</p>
          <h3>$560K</h3>{" "}
        </div>
        <div className="card">
          <div className="circle">↗</div> <p>Total Sales</p>
          <h3>$560K</h3>{" "}
        </div>
        <div className="card">
          <div className="circle">↗</div> <p>Total Sales</p>
          <h3>$560K</h3>{" "}
        </div>
        <div className="card">
          <div className="circle">↗</div> <p>Total Sales</p>
          <h3>$560K</h3>{" "}
        </div>
      </div>

      <div className="charts-section">
        <Charts />
      </div>
    </div>
  );
}
export default AdminDashboard;
