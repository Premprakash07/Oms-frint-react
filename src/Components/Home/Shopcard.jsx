import React from 'react'

function Shopcard({shopDetails}) {
  return (
    <div id='shopcard'>
        <div className="shopname">Shopname</div>
        <div className="ownername">ownername</div>
        <img src="" alt="shopimage" className="shopimage" />
        <div className="rating">rating</div>
        <div className="location">location</div>
    </div>
  )
}

export default Shopcard