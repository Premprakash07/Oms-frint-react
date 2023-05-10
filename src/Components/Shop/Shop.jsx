import React, {useState} from 'react'
import '../../css/shop.css'
import CartItem from '../Cart/CartItem';

function Shop() {
  const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

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
            {itemList.map((item, index) => {
              return <CartItem itemDetails={item} key={index} />;
            })}
          </div>
        </div>
        <div className="shopinfo"></div>
      </div>
    </div>
  );
}

export default Shop