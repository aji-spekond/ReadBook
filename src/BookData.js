import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function BookData(){
     return(
  <nav class="navbar navbar-dark bg-dark text-white col-lg-10 offset-1">
  <div className="col text-center">
      Fiction
    </div>
    <div className="col text-center">
      NonFiction
    </div>
    <div className="col text-center">
      Column
    </div>
</nav>

     )
}

export default BookData;