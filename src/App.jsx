import React, { useState } from "react";

import Home from "../Components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Exoticfruitsandveg from "../Components/Exoticfruitsandveg";
import Tea from "../Components/Tea";
import Ghee from "../Components/Ghee";
import Nandini from "../Components/Nandini";
import FreshVegetables from "../Components/FreshVegetables";
import Registration from "../Components/Registration";
import Login from "../Components/Login";
import ServiceAvailable from "../Components/ServiceAvailable";
import Ayurveda from '../Components/Ayurveda'
// import { Route, Router, Routes } from 'react-router-dom';

function App() {
  const [regstate, setRegstate] = useState("Rinactive");
  const [locstate, setLocstate] = useState("Locinactive");
  const [logstate, setLogstate] = useState('Linactive');
  const [inputloc, setInputloc] = useState({
    input:""
  })

  const [productsearchval, setProductsearchval] = useState({
    searchvalue:""
  })
  const [serviceavailablestate,setServiceavailablestate]=useState('Sactive')

  const [routersstate, setRoutersstate] = useState({
    Exotic: "Routeinactive",
    Tea: "Routeinactive",
    Ghee: "Routeinactive",
    Nandini: "Routeinactive",
    FreshVeg: "Routeinactive",
  });

  const productsearchhandler = async (e) => {
    e.preventDefault();
    const searchbody = {
      searchitem:productsearchval.searchvalue
    }
    const response = await fetch('https://grocerybasketbackend.onrender.com/api/productsearch/',{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body:JSON.stringify(searchbody)
    })

    const data = await response.json();
    
    if (response.status == '200')
    {
      setProductsearchval({ searchvalue: "" });
      console.log(data)
    }
  }
  

  return (
    <div id="body">
      <div id="Navigation">
        <div id="navmenus">
          <div id="logo">
            Grocery<span>Basket</span>
          </div>
          <form onSubmit={productsearchhandler}>

          <div id="searchbar">
            <div id="sicon">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <input type="text" placeholder="Search for Products..."
              value={productsearchval.searchvalue}
              onChange={(e)=>{setProductsearchval({searchvalue:e.target.value})}}
            />
          </div>
          </form>
          <div id="Navbuttons">
            <div
              id="locbut"
              class="navbut"
              onClick={() => {
                if (locstate == "Locinactive") {
                  setLocstate("Locactive");
                } else {
                  setLocstate("Locinactive");
                }
              }}
            >
              <div>
                <ion-icon name="compass" id="locicon"></ion-icon>
              </div>
              <div class="text">select Location</div>
            </div>
            <div
              id="signupbut"
              class="navbut"
              onClick={() => {
                if (regstate == "Rinactive") {
                  setRegstate("Ractive");
                } else {
                  setRegstate("Rinactive");
                }
              }}
            >
              Login/Sign up
            </div>
            <div class="navbut">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
          </div>
        </div>
       
      <Router>
          <div id="navrouters">
            <div id="cateroute">
             <div id="ctext">Shop by Category</div>
              <div id="cicon">
               <ion-icon name="caret-down-outline"></ion-icon>
              </div>
            </div>
            <div class={routersstate.Exotic}><Link to="/fruitsandveg" style={{textDecoration:"none",color:'black'}}>Exotic Fruits & Veg..</Link></div>
            <div class={routersstate.Tea}><Link to="/tea"  style={{textDecoration:"none",color:'black'}}>Tea</Link></div>
            <div class={routersstate.Ghee}><Link to="/ghee"  style={{textDecoration:"none",color:'black'}}>Ghee</Link></div>
            <div class={routersstate.Nandini}><Link to="/Milks"  style={{textDecoration:"none",color:'black'}}>Milks</Link></div>
            <div class={routersstate.FreshVeg}><Link to="/freshveg" style={{textDecoration:"none",color:'black'}}>Fresh Vegetables</Link></div>
          </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                locstate={locstate}
                setLocstate={setLocstate}
                regstate={regstate}
                setRoutersstate={setRoutersstate}
              />
            }
          />
          <Route path="/fruitsandveg" element={<Exoticfruitsandveg routersstate={routersstate} setRoutersstate={setRoutersstate} />} />
          <Route path="/tea" element={<Tea routersstate={routersstate} setRoutersstate={setRoutersstate} />} />
          <Route path="/ghee" element={<Ghee routersstate={routersstate} setRoutersstate={setRoutersstate} />} />
          <Route path="/Milks" element={<Nandini routersstate={routersstate} setRoutersstate={setRoutersstate} />} />
          <Route path="/freshveg" element={<FreshVegetables routersstate={routersstate} setRoutersstate={setRoutersstate} />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
        </Routes>
      </Router>
      </div>
      <div class={locstate}>
        <div id="locationcontainer">
          <div id="head">Select a Location for delivery</div>
          <div id="para">
            Choose your address location to see Product availability and
            delivery options
          </div>
          <div id="lsearchbar">
            <div id="lsicon">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <div>
              <input type="text"
                value={inputloc.input}
                onChange={(e)=>{setInputloc({...inputloc,input:e.target.value})}}
                placeholder="Search for area or streat name" />
            </div>
            <div id="availablelocation">
              <div id="heading"
              onClick={() => {
                if (serviceavailablestate == "Sinactive") {
                  setServiceavailablestate("Sactive");
                } else {
                  setServiceavailablestate("Sinactive");
                }
              }}>Service availability</div>
              <ServiceAvailable inputloc={inputloc}  setInputloc={setInputloc} serviceavailablestate={serviceavailablestate} setServiceavailablestate={setServiceavailablestate} locstate={locstate} setLocstate={setLocstate} />
            </div>
          </div>
        </div>
      </div>
      <div id="registration">
        <Registration regstate={regstate} setRegstate={setRegstate} logstate={logstate} setLogstate={setLogstate} />
      </div>
      <div id="login">
        <Login logstate={logstate } setLogstate={setLogstate} setRegstate={setRegstate} />
      </div>
    </div>
  );
}

export default App;
