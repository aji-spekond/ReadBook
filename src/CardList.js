import React from "react";
import { Link } from "react-router-dom";
function CardList({ book }) {
  return (
    <div className="container">
      <div className="card mt-2 mb-2">
        <div className=" card-title">
          <p>Name: {book.title}</p>
          <p>Description: {book.content}</p>
          <div className="col-lg-7 offset-7 p-1 mt- text-center ">
            <img
              src="Booklist.jpeg"
              className=" card- img-top "
              alt=" ..."
              height="100px"
            />

            <div className="card-body">
              <center>
                <Link to={`/bookdetails/${book.id}`}>
                  <p className="btn btn-primary">Read Book</p>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
