import React, { useState, useEffect } from "react";
import "../../css/shop.css";
import Item from "../modals/CartItem";
import { useParams } from "react-router-dom";
import { getAllItems, getShopById, getShopReviews } from "../../api/shop/shop";

function Shop() {
  const [items, setItems] = useState([]);
  const [shopDetails, setShopDetails] = useState({});
  const [addedReview, setAddedReview] = useState("");
  const [reviews, setReviews] = useState([1, 2, 3, 4]);
  const [search, setSearch] = useState("");

  const { shopId } = useParams();

  const handleChange = (e) => {
    if (e.target.name === "search") {
      setSearch(e.target.value);
    } else if (e.target.name === "review") {
      setAddedReview(e.target.value);
    }
  };

  const addReview = async () => {
    if (addedReview !== "") {
    }
  };

  useEffect(() => {
    const getItems = async () => {
      const items = await getAllItems(shopId);

      if (items.status === 200) {
        setItems(await items.json());
      }

      const shop = await getShopById(shopId);
      if (shop.status === 200) {
        setShopDetails(await shop.json());
      }

      const reviews = await getShopReviews(shopId);
      if (reviews.status === 200) {
        setReviews(await reviews.json());
      }
    };
    getItems();
  }, []);

  return (
    <div id="shop">
      <div className="shop-ctn">
        <div className="items-ctn ctn">
          <div className="title">Items</div>
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
          <div className="items">
            {items.map((item, index) => {
              return <Item itemDetails={item} key={index} />;
            })}
          </div>
        </div>
        <div className="shopinfo">
          <img src={shopDetails.photoUrl} alt="" className="shopImg" />
          <div className="ele">
            {/* <div className="title">Shop Details</div> */}
            <div className="details">
              <div className="rating field">{shopDetails.rating}</div>
              <div className="name field">{shopDetails.shopName}</div>
              <div className="owner field">
                <span>Owner: </span>
                <span>{shopDetails.owner}</span>
              </div>
              <div className="location field">
                <span>Location:</span>
                <span>{shopDetails.address}</span>
              </div>
              <div className="category field">
                <span>Category: </span>
                <span>{shopDetails.category}</span>
              </div>
              <div className="opentime field">
                <span>Open time: </span>
                <span>{shopDetails.openTime}</span>
              </div>
              <div className="closetime field">
                <span>Close time: </span>
                <span>{shopDetails.closeTime}</span>
              </div>
              <div className="currentStatus field">
                <span>Current status: </span>
                <span>{shopDetails.status}</span>
              </div>
              <div className="gst field">
                <span>GSTIN: </span>
                <span>{shopDetails.gstin}</span>
              </div>
              <div className="email field">
                <span>Email: </span>
                <span>{shopDetails.email}</span>
              </div>
            </div>
          </div>
          <div className="ele">
            <div className="title">Reviews</div>
            <div className="details">
              <div className="addreview">
                <textarea
                  name="review"
                  id="review-area"
                  rows="7"
                  placeholder="Add review"
                  onChange={handleChange}
                  value={addedReview}
                />
                <button className="btn" onClick={addReview}>
                  Add
                </button>
              </div>
              {reviews.map((review, index) => {
                return (
                  <div className="review-ctn" key={index}>
                    <div className="rating">{index}</div>
                    <div className="review">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo iure voluptas, soluta molestias delectus, minus
                      placeat sint voluptatem dolore repellendus alias nisi.
                      Reiciendis distinctio dolores recusandae voluptates ex
                      expedita voluptatem.
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
