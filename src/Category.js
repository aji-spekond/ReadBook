import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Category() {
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-dark bg-dark text-white col-lg-12">
          <div className="col text-center">Fiction</div>
          <div className="col text-center">NonFiction</div>
          <div className="col text-center">Horror</div>
        </nav>
      </div>
    </div>
  );
}

export default Category;
