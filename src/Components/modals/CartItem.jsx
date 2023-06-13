import React, {useState} from "react";

function Item({ itemDetails }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (e) => {
    if (e.target.classList.contains('add')) {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 0) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const openItemModal = () => {

  }

  return (
    <div className="item" onClick={openItemModal}>
      <img src={itemDetails.itemImg} alt="" />
      <div className="iteminfo">
        <div className="info">
          <div className="itemName">{itemDetails.itemName}</div>
          <div className="rating">{itemDetails.rating}</div>
          <div className="desc">{itemDetails.itemDescription}</div>
          <div className="price">Rs. {itemDetails.itemPrice}</div>
        </div>
        {itemDetails.quantityLeft !== 0 ? (
          <div className="add flexbox">
            <div className="add btn" onClick={handleQuantity}>+</div>
            <div className="quantity">{quantity}</div>
            <div className="minus btn" onClick={handleQuantity}>-</div>
          </div>
        ) : (
          <div className="outofstock">Out of Stock</div>
        )}
      </div>
    </div>
  );
}

export default Item;
