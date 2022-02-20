import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <h3>
        <Link style={{ textDecoration: "none" }} to="/hive">
          hDashboard
        </Link>
      </h3>
      <Link className="mx-2" to="/">
        Dashboard
      </Link>
      <Link className="mx-2" to="/hive">
        Hive
      </Link>
    </div>
  );
};

export default Sidebar;
