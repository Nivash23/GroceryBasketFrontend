import React, { useEffect, useRef, useState } from 'react'
import Cards from './Cards';

function Smartcontainer() {

  // const ref1 = useRef();
  // const ref2 = useRef();
  const containerref = useRef();
   
const ScrolltoRight = () => {
  containerref.current.scrollLeft += 500;

  }
const Scrolltoleft = () => {
  containerref.current.scrollLeft -= 300;

  }

  const [smartbasketItems, setSmartbasketItems] = useState([]);

  
  const Smartbaskethandler = async (e) => {
    // e.preventDefault();
    
    const response = await fetch('https://grocerybasketbackend.onrender.com/api/smartbasket/');
    
    const data = await response.json();

    if (response.status == 200)
    {
      // console.log(data.smartItems)
      setSmartbasketItems(data.smartItems);
    }
    
  }
  // console.log(smartbasketItems)

  useEffect(() => {
    Smartbaskethandler();
  }, []);
  return (
      <div id="smartcontainer">
          <div id="header">
              <div id="head">My Smart Basket</div>
              <div id="viewlist">
                  <div id="menu">View All</div>
                  <div id="backarrow" onClick={Scrolltoleft}><ion-icon name="chevron-back-outline"></ion-icon></div>
                  <div id="forwardarrow" onClick={ScrolltoRight}><ion-icon name="chevron-forward-outline"></ion-icon></div>
              </div>
          </div>
          <div >
             <div id="items" ref={containerref}>
              {
                 smartbasketItems.map((val, i) => (
                 <div>
                   <Cards src={val.imgsrc} name={val.name} price={ val.price} offer={val.offer} />

                  </div>
            )
                
            )
              }
            </div>
         </div>
    </div>
  )
}

export default Smartcontainer