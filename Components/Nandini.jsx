import React, { useEffect, useState } from 'react'
import Cardsforfruitsandveg from './Cardsforfruitsandveg';

function Nandini({setRoutersstate}) {
  const [receivedItems, setReceivedItems] = useState([]);

  const [milksItems, setMilksItems] = useState([]);

  const Milkshandler = async (e) => {
    // e.preventDefault();
    
    const response = await fetch('https://grocerybasketbackend.onrender.com/api/Milks/');
    
    const data = await response.json();

    if (response.status == 200)
    {
      // console.log(data.exoticItems)
      setReceivedItems(data.MilksItems);
      setMilksItems(data.MilksItems);
    }
    
  }
  console.log(milksItems)

  useEffect(() => {
    setRoutersstate({
       Exotic: "Routeinactive",
       Tea: "Routeinactive",
       Ghee: "Routeinactive",
       Nandini: "Routeactive",
       FreshVeg: "Routeinactive",
    })
    Milkshandler();
  }, []);

  const Skimmedhandler = () => {
    let temp1 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'Skimmed') {
        temp1.push(val)
      }

    
    })
    setMilksItems(temp1);
  }
  const Fullcreamhandler = () => {
    let temp2 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'Fullcream') {
        temp2.push(val)
      }

    
    })
    setMilksItems(temp2);
  }
  const SkimmedandFullcreamhandler = () => {
    setMilksItems(receivedItems)
  }
  return (
    <div>
      <div id="Nandinicontainerhead">Milks</div>
      <div class="Routecontaineritems" >
        <div class="catelogcontainer">
          <div class="categoryhead">Shop by Category</div>
          <div class="listcontain">
            <div class="listhead" onClick={SkimmedandFullcreamhandler}>Full Cream & Skimmed Milks</div>
            <div class="list">
              <div onClick={Fullcreamhandler}>Full Cream Milks</div>
              <div onClick={Skimmedhandler} >Skimmed Milks</div>

            </div>
          </div>
          
        </div>
         <div class="itemscontainer">
          <div class="row">

          {
            milksItems.map((val, i) => 
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

export default Nandini