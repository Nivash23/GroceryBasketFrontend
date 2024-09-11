import React, { useEffect, useState } from 'react'
import Cardsforfruitsandveg from './Cardsforfruitsandveg';

function FreshVegetables({setRoutersstate}) {
  const [receivedItems, setReceivedItems] = useState([]);

  const [freshvegItems, setFreshvegItems] = useState([]);

  const FreshVeghandler = async (e) => {
    // e.preventDefault();
    
    const response = await fetch('https://grocerybasketbackend.onrender.com/api/Freshveg/');
    
    const data = await response.json();

    if (response.status == 200)
    {
      // console.log(data.exoticItems)
      setReceivedItems(data.FreshvegItems);
      setFreshvegItems(data.FreshvegItems);
    }
    
  }
  console.log(freshvegItems)

  useEffect(() => {
    setRoutersstate({
       Exotic: "Routeinactive",
       Tea: "Routeinactive",
       Ghee: "Routeinactive",
       Nandini: "Routeinactive",
       FreshVeg: "Routeactive",
    })
    FreshVeghandler();
  }, []);

  const cabbageandcaulihandler = () => {
    let temp1 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'CabandCauli') {
        temp1.push(val)
      }

    
    })
    setFreshvegItems(temp1);
  }
  const Leafyveghandler = () => {
    let temp2 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'Leafyveg') {
        temp2.push(val)
      }

    
    })
    setFreshvegItems(temp2);
  }
  const CabcauliandLeafhandler = () => {
    setFreshvegItems(receivedItems)
  }
  return (
    <div>
      <div id="Freshvegcontainerhead">FreshVegetables</div>
      <div class="Routecontaineritems" >
        <div class="catelogcontainer">
          <div class="categoryhead">Shop by Category</div>
          <div class="subcatehead"><ion-icon name="chevron-back-outline"></ion-icon>Fruits & Vegetables</div>
          <div class="listcontain">
            <div class="listhead" onClick={CabcauliandLeafhandler}>Fresh Vegetables</div>
            <div class="list">
              <div onClick={cabbageandcaulihandler}>Cabbage & Cauliflower</div>
              <div onClick={Leafyveghandler} >Leafy Vegetables</div>

            </div>
          </div>      
        </div>
        <div class="itemscontainer">
          <div class="row">

          {
            freshvegItems.map((val, i) => 
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

export default FreshVegetables