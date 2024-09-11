import React, { useEffect, useState } from "react";
import Cardsforfruitsandveg from "./Cardsforfruitsandveg";

function Exoticfruitsandveg({setRoutersstate}) {

  const [receivedItems, setReceivedItems] = useState([]);

  const [exoticItems, setExoticItems] = useState([]);

  const Exoticfruitsandveghandler = async (e) => {
    // e.preventDefault();
    
    const response = await fetch('https://grocerybasketbackend.onrender.com/api/Exoticfruitsandveg/');
    
    const data = await response.json();

    if (response.status == 200)
    {
      // console.log(data.exoticItems)
      setReceivedItems(data.exoticItems);
      setExoticItems(data.exoticItems);
    }
    
  }
  console.log(exoticItems)

  useEffect(() => {
    setRoutersstate({
       Exotic: "Routeactive",
       Tea: "Routeinactive",
       Ghee: "Routeinactive",
       Nandini: "Routeinactive",
       FreshVeg: "Routeinactive",
    })
    Exoticfruitsandveghandler();
  }, []);

  const fruitshandler = () => {
    let temp1 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'Fruits') {
        temp1.push(val)
      }

    
    })
    setExoticItems(temp1);
  }
  const Vegetableshandler = () => {
    let temp2 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'Vegetables') {
        temp2.push(val)
      }

    
    })
    setExoticItems(temp2);
  }
  const fruitandveghandler = () => {
    setExoticItems(receivedItems)
  }
  return (
    <div>
      <div id="Exoticcontainerhead">Exotic Fruits and Vegetables</div>
      <div class="Routecontaineritems" >
        <div class="catelogcontainer" >
          <div class="categoryhead">Shop by Category</div>
          <div class="subcatehead"><ion-icon name="chevron-back-outline"></ion-icon>Fruits & Vegetables</div>
          <div class="listcontain">
            <div class="listhead" onClick={fruitandveghandler}>Exotic Fruits & Vegetables</div>
            <div class="list">
              <div onClick={fruitshandler}>Exotic Fruits</div>
              <div onClick={Vegetableshandler} >Exotic Vegetables</div>

            </div>
          </div>
        </div>
        <div class="itemscontainer">
          <div class="row">

          {
            exoticItems.map((val, i) => 
              <div class="col-md-4">
                <Cardsforfruitsandveg src={val.imgsrc} name={val.name} price={val.price} offer={val.offer} />
              </div>
            )
           }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exoticfruitsandveg;
