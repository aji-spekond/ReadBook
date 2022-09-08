import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function BookList(){
    return(
      < div className="Booklist">
         <h1 className="text-center text-danger">Search book</h1>
        <div className="col-lg-4 offset-4 mb-2">
        <input type="search" placeholder='search for books' className='form-control'/>
        </div>
        </div>
    )
};

export default BookList;