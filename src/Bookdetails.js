import React from "react";
import { useParams } from "react-router-dom";

const Bookdetails = ({ bookData }) => {
  let { id } = useParams();
  return (
    <>
      <h2>Book details</h2>
      {bookData.map((item) => {
        if (item.id == id) {
          return (
            <>
              <h3 key={item.id}>{item.title}</h3>
              <p>{item.content}</p>
            </>
          );
        }
      })}
    </>
  );
};

export default Bookdetails;
