import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Category from "./Category";

function Booklist({ bookList }) {
  const [filteredList, setFilteredList] = new useState(bookList);

  const setArrayVal = (event) => {
    const query = event.target.value;
    console.log("query", query);
    // Create copy of item list
    var updatedList = [...bookList];
    // Include all elements which includes the search query
    console.log("=====>>>", Object.values(updatedList));
    updatedList = updatedList.filter((item) => {
      console.log("item", item);

      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  return (
    <div className="container">
      <h1 className="text-center text-danger mt-6">Search book</h1>
      <div className="row mt-5">
        <input
          type="search"
          placeholder="search for books"
          className="form-control"
          onChange={setArrayVal}
        />
      </div>
      <div className="row m-4">
        <Category />
      </div>
      <div className="row">
        {filteredList
          ? filteredList.map((item) => {
              return (
                <div className="col-lg-3 p-2">
                  <div class="card">
                    <div className="card-header bg-danger">
                      <h3 className="text-center text-white">{item.title}</h3>
                      {/* <p>{props.book}</p> */}
                    </div>
                    <img
                      src="Booklist.jpeg"
                      class=" card- img-top "
                      alt=" ..."
                      height="100px"
                    />

                    <div class="card-body">
                      <div class=" card-title">
                        <p class=" card-text ">{item.content}</p>
                        <a href="#" class="btn btn-primary">
                          Read Book
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : bookList.map((item) => {
              return (
                <div className="col-lg-3 p-2">
                  <div class="card">
                    <div className="card-header bg-danger">
                      <h3 className="text-center text-white">{item.title}</h3>
                      {/* <p>{props.book}</p> */}
                    </div>
                    <img
                      src="Booklist.jpeg"
                      class=" card- img-top "
                      alt=" ..."
                      height="100px"
                    />

                    <div class="card-body">
                      <div class=" card-title">
                        <p class=" card-text ">{item.content}</p>
                        <a href="#" class="btn btn-primary">
                          Read Book
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Booklist;
