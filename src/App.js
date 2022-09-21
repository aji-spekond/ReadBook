import React from "react";
import "./App.css";
import Booklist from "./Booklist";
import Search from "./Search";

const App = () => {
  let bookList = [
    {
      id: 1,
      title: "RichDad",
      content: "RichDad published in the year 2015 the author name is Robert",
    },
    {
      id: 2,
      title: "ikia",
      content: "RichDad published in the year 2015 the author name is Robert",
    },
    {
      id: 3,
      title: "DEep Soul",
      content: "RichDad published in the year 2015 the author name is Robert",
    },
    {
      id: 4,
      title: "Stranger things",
      content: "RichDad published in the year 2015 the author name is Robert",
    },
    {
      id: 5,
      title: "Rise Emperor",
      content: "RichDad published in the year 2015 the author name is Robert",
    },
    {
      id: 6,
      title: "peaky binders",
      content: "RichDad published in the year 2015 the author name is Robert",
    },

    {
      id: 7,
      title: "Karma",
      content: "RichDad published in the year 2015 the author name is Robert",
    },
  ];
  return (
    <div className="App">
      <Booklist bookList={bookList} />
    </div>
  );
};

export default App;
