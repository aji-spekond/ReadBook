import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardList from "./CardList";
import Category from "./Category";

function Booklist({ bookList, setBookList, resetdata }) {
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
    setBookList(updatedList);
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
      <div className="row mt-4 mb-4">
        <Category />
      </div>
      <div className="row">
        {bookList.map((item) => {
          return <CardList book={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Booklist;
