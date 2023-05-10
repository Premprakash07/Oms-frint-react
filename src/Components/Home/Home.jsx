import React, { useState } from "react";
import "../../css/home.css";
import Shopcard from "./Shopcard";
import { Link } from "react-router-dom";

function Home() {
  const shopList = [1, 2, 3, 4, 5];

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div id="home">
      <div className="home-ctn ctn">
        <div className="title">Shops</div>
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          onChange={handleChange}
          value={search}
          placeholder="Search here..."
          autoComplete="off"
        />
        <div className="shops">
          {shopList.map((shop, index) => {
            return (
              <Link to={`/shop/${index}`}>
                <Shopcard shopDetails={shop} key={index} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
