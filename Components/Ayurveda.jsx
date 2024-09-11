import React, { useEffect, useState } from 'react'
import Cardsforfruitsandveg from './Cardsforfruitsandveg';

function Ayurveda() {
    const [receivedItems, setReceivedItems] = useState([]);

  const [ayurvedaItems, setAyurvedaItems] = useState([]);

  const AyurvedaItemshandler = async (e) => {
    // e.preventDefault();
    
    const response = await fetch('https://grocerybasketbackend.onrender.com/api/Ayurveda/');
    
    const data = await response.json();

    if (response.status == 200)
    {
      // console.log(data.exoticItems)
      setReceivedItems(data.AyurvedaItems);
      setAyurvedaItems(data.AyurvedaItems);
    }
    
  }
  console.log(ayurvedaItems)

  useEffect(() => {
    
    AyurvedaItemshandler();
  }, []);

  const AntisepandBandagehandler = () => {
    let temp1 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'AntisepandBandages') {
        temp1.push(val)
      }

    
    })
    setAyurvedaItems(temp1);
  }
  const Ayurvedahandler = () => {
    let temp2 = [];
    receivedItems.map((val, i) => {
      if (val.category == 'Ayurveda') {
        temp2.push(val)
      }

    
    })
    setAyurvedaItems(temp2);
  }
  const vedaandantisepandBandagehandler = () => {
    setAyurvedaItems(receivedItems)
  }
  return (
    <div>
      <div id="Ayurvedacontainerhead">Ayurveda</div>
      <div class="Routecontaineritems" >
        <div class="catelogcontainer">
          <div class="categoryhead">Shop by Category</div>
          <div class="subcatehead"><ion-icon name="chevron-back-outline"></ion-icon>Beauty & Hygiene</div>
          <div class="listcontain">
            <div class="listhead" onClick={vedaandantisepandBandagehandler}>Health & Medicines</div>
            <div class="list">
              <div onClick={Ayurvedahandler}>Ayurveda</div>
              <div onClick={AntisepandBandagehandler}>Antiseptic & Bandages</div>

            </div>
          </div>      
        </div>
        <div class="itemscontainer">
          <div class="row">

          {
            ayurvedaItems.map((val, i) => 
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

export default Ayurveda