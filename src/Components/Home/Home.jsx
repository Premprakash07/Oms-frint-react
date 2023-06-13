import React, { useState, useEffect } from "react";
import "../../css/home.css";
import Shopcard from "./Shopcard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllShops } from "../../api/shop/shop";

function Home() {
  const [shops, setShops] = useState([]);

  const [search, setSearch] = useState("");

  const data = useSelector((store) => store.userDetails);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(data);
    const getShops = async () => {
      const res = await getAllShops();

      if (res.status === 200) {
        setShops(await res.json());
      }
    };
    getShops();
  }, []);

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
          {shops.map((shop, index) => {
            return (
              <Link to={`/shop/${shop.shopId}`}>
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
