import React, { useEffect, useState } from 'react';
import Cardsforfruitsandveg from './Cardsforfruitsandveg';


function Ghee({setRoutersstate}) {
  const [receivedItems, setReceivedItems] = useState([]);

  const [gheeItems, setGheeItems] = useState([]);

  const Gheehandler = async (e) => {
    // e.preventDefault();
    
    const response = await fetch('https://grocerybasketbackend.onrender.com/api/ghee/');
    
    const data = await response.json();

    if (response.status == 200)
    {
      // console.log(data.exoticItems)
      setReceivedItems(data.GheeItems);
      setGheeItems(data.GheeItems);
    }
    
  }
  console.log(gheeItems)

  useEffect(() => {
    setRoutersstate({
       Exotic: "Routeinactive",
       Tea: "Routeinactive",
       Ghee: "Routeactive",
       Nandini: "Routeinactive",
       FreshVeg: "Routeinactive",
    })
    Gheehandler();
  }, []);

  const Organichandler = () => {
    let temp1 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'Organic') {
        temp1.push(val)
      }

    
    })
    setGheeItems(temp1);
  }
  const Traditionalhandler = () => {
    let temp2 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'Traditional') {
        temp2.push(val)
      }

    
    })
    setGheeItems(temp2);
  }
  const OrganicandTraditionhandler = () => {
    setGheeItems(receivedItems)
  }
  return (
    <div>
      <div id="Gheecontainerhead">Ghee</div>
      <div class="Routecontaineritems">
        <div  class="catelogcontainer">
          <div class="categoryhead">Shop by Category</div>
          <div class="subcatehead"><ion-icon name="chevron-back-outline"></ion-icon>Foodgrains,Oil & Masala</div>
          <div class="listcontain">
            <div class="listhead" onClick={OrganicandTraditionhandler}>Organic & Traditional Ghee</div>
            <div class="list">
              <div onClick={Organichandler}>Organic Ghee</div>
              <div onClick={Traditionalhandler} >Traditional Ghee</div>

            </div>
          </div>        
        </div>
        <div class="itemscontainer">
          <div class="row">

          {
            gheeItems.map((val, i) => 
              <div class="col-md-4">
                <Cardsforfruitsandveg src={val.imgsrc} name={val.name} price={val.price} offer={val.offer} />
              </div>
            )
           }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ghee