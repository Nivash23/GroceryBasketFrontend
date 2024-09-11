import React, { useEffect, useState } from 'react'

function ServiceAvailable({inputloc,setInputloc,serviceavailablestate,setServiceavailablestate,locstate,setLocstate}) {

   const [availablelocs, setAvailablelocs] = useState([]); 
   const Locationhandler=async()=>{
       const locations = await fetch('https://grocerybasketbackend.onrender.com/api/locations/')
       const data = await locations.json();

       if (locations.status == 200)
       {
           setAvailablelocs(data.location)
           }
    }
    console.log(availablelocs)

    useEffect(() => {
        Locationhandler();
    }, []);
    

    return (
      <div  class={serviceavailablestate}>
            
      <div id="serviceavailableloc">
          <div class="row">
              {
                  availablelocs.map((val, i) => 
                      <div class="row-2" id="area" onClick={() => {
                          setInputloc({ input: `${val.city},${val.area}` });
                          setLocstate('Locinactive')

                      }}>     
                          <div class="row-2">{val.city},{val.area }</div>
                          
                          <hr></hr>
                      </div>
                  )
              }
          </div>
    </div>
      </div>
  )
}

export default ServiceAvailable