import React, { useState } from "react";
import Header from "./Header.jsx";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyAHwevRb0yH0dz7Y9ZLbB2UcQFanHnDROk" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <Header />
      <div className="search">
        <input
          type="text"
          placeholder="Search book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchBook}
        />
        <button>
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </button>
      </div>

      <div className="book-list">{<Card book={bookData} />}</div>
    </div>
  );
};

export default Main;
