import React from "react";

function Shopcard({ shopDetails }) {
  return (
    <div id="shopcard">
      <div className="shopname">{shopDetails.shopName}</div>
      <div className="ownername"><span>Owner: </span>{shopDetails.owner}</div>
      <img
        src={
          shopDetails.photoUrl
            ? shopDetails.photoUrl
            : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.envato.com%2Ffiles%2F247292875%2FABC06211.JPG&f=1&nofb=1&ipt=f1ed75f8735663bdec9f96de1b4dd02f7b33db5aebec222a1a760cad781cf143&ipo=images"
        }
        alt="shopimage"
        className="shopimage"
      />
      <div className="rating"><span>Rating: </span>{shopDetails.rating}</div>
      <div className="location"><span>Address: </span>{shopDetails.address}</div>
      <div className="phoneNo"><span>Phone: </span>{shopDetails.phoneNo}</div>
    </div>
  );
}

export default Shopcard;
