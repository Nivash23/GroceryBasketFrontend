import React, { useEffect, useState } from 'react'
import Cardsforfruitsandveg from './Cardsforfruitsandveg';

function Tea({setRoutersstate}) {
  const [receivedItems, setReceivedItems] = useState([]);

  const [teaItems, setTeaItems] = useState([]);

  const Teahandler = async (e) => {
    // e.preventDefault();
    
    const response = await fetch('https://grocerybasketbackend.onrender.com/api/Tea/');
    
    const data = await response.json();

    if (response.status == 200)
    {
      // console.log(data.exoticItems)
      setReceivedItems(data.TeaItems);
      setTeaItems(data.TeaItems);
    }
    
  }
  console.log(teaItems)

  useEffect(() => {
    setRoutersstate({
       Exotic: "Routeinactive",
       Tea: "Routeactive",
       Ghee: "Routeinactive",
       Nandini: "Routeinactive",
       FreshVeg: "Routeinactive",
    })
    Teahandler();
  }, []);

  const Greenteahandler = () => {
    let temp1 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'Greentea') {
        temp1.push(val)
      }

    
    })
    setTeaItems(temp1);
  }
  const Teabaghandler = () => {
    let temp2 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'teabag') {
        temp2.push(val)
      }

    
    })
    setTeaItems(temp2);
  }
  const GreenteaandTeaBaghandler = () => {
    setTeaItems(receivedItems)
  }
  return (
      <div>
      <div id="Teacontainerhead">Tea</div>
      <div class="Routecontaineritems" >
        <div class="catelogcontainer">
          <div class="categoryhead" >Shop by Category</div>
          <div class="subcatehead"><ion-icon name="chevron-back-outline"></ion-icon>Beverages</div>
          <div class="listcontain">
            <div class="listhead" onClick={GreenteaandTeaBaghandler}>Exotic Fruits & Vegetables</div>
            <div class="list">
              <div onClick={Greenteahandler}>Green Tea</div>
              <div onClick={Teabaghandler} >Tea Bags</div>

            </div>
          </div>        
        </div>
       <div class="itemscontainer">
          <div class="row">

          {
            teaItems.map((val, i) => 
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

export default Tea