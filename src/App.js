import React from "react";
import "./App.css";
import Booklist from "./Booklist";
import { useState } from "react";
import CardList from "./CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookdetails from "./Bookdetails";

const App = () => {
  let data = [
    {
      id: 1,
      title: "RichDad",
      content: "RichDad published in the year 2022 the author name is Robert",
    },
    {
      id: 2,
      title: "Ikia",
      content: "Ikia published in the year 2019 the author name is ChangLee",
    },
    {
      id: 3,
      title: "Deep Soul",
      content:
        "Deep Soul published in the year 2018 the author name is Richard",
    },
    {
      id: 4,
      title: "Stranger things",
      content:
        "Stranger things published in the year 2016 the author name is Brait",
    },
    {
      id: 5,
      title: "Rise Emperor",
      content:
        "Rise Emperor published in the year 2020 the author name is Borison",
    },
    {
      id: 6,
      title: "peaky binders",
      content:
        "Peaky Blinders published in the year 2014 the author name is Thomas shellby",
    },

    {
      id: 7,
      title: "Karma",
      content: "Karma  published in the year 2021 the author name is sadhgru",
    },
  ];

  const [bookList, setBookList] = new useState(data);

  const resetData = () => {
    setBookList(data);
  };
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Booklist
                bookList={bookList}
                setBookList={setBookList}
                resetData={resetData}
              />
            }
          />
          <Route
            path="bookdetails/:id"
            element={<Bookdetails bookData={data} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
