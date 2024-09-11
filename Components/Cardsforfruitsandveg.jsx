import React from 'react'
import '../style/card.css'

function Cardsforfruitsandveg({src,name,price,offer}) {
  return (
      <div>
          <div id="cardcontainer">
        <div class="card text-center" id="card">
          <img id="image" src={src} alt="450x300" />
            <div class="offerspercentage">{offer }% OFF</div>
          <div class="card-body">
            <h5 id="Name" class="card-title">
              {" "}
              {name}
            </h5>

            <div>Rs.{price} </div>
            <div id="btns">
              <button type="button">Buy</button>
              <button type="button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardsforfruitsandveg