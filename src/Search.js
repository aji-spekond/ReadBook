import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Search({Booklist}) {
    console.log(Booklist)
  const itemList = [
    {
      id: 1,
      title: "RichDad",
      content: "RichDad published in the year 2015 the author name is Robert",
    },

    {
      id: 2,
      title: "ikia",
      content:
        "Ikia published in the year 2018 published by japnese author Francesec",
    },
    {
      id: 3,
      title: "Deepsoul",
      content:
        "Deapsoul is pulished in the year 2010 by an american author lisa olivera",
    },

    {
      id: 4,
      title: "Stranger Things",
      content:
        "Stranger things is published in the year 2020 the author of book is Gwenda Bond",
    },

    {
      id: 5,
      title: "Rise of Emperor",
      content:
        "Rise of Emperor is published in the year 2013 by an freanch author Michael Sullivan",
    },
    {
      id: 6,
      title: "PeakyBlinders",
      content:
        "PeakyBlinders is publinshed in the year 2013 by an British author Matt Allen",
    },

    {
      id: 7,
      title: "Karma",
      content: "Karma is published by saint Sadhgur in the year of 2021",
    },
  ];

  const [filteredList, setFilteredList] = new useState(itemList);

  const setArrayVal = (event) => {
    const query = event.target.value;
    console.log("query", query);
    // Create copy of item list
    var updatedList = [...itemList];
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
    <div>
      <h1 className="text-center text-danger">Search book</h1>
      <div className="col-lg-4 offset-4 mb-2">
        <input
          type="search"
          placeholder="search for books"
          className="form-control"
          onChange={setArrayVal}
        />
        {filteredList.map((data) => {
          return (
            <div>
              <h3>{data.title}</h3>

              <p className="content">{data.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
