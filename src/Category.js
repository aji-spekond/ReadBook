import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Category() {
  return (
    <nav class="navbar navbar-dark bg-dark text-white col-lg-10 offset-1">
      <div className="col text-center">Fiction</div>
      <div className="col text-center">NonFiction</div>
      <div className="col text-center">Horror</div>
    </nav>
  );
}

export default Category;
