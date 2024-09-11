import React, { useState } from "react";

function Registration({ regstate, setRegstate,logstate,setLogstate }) {
  const [registerDetails, setRegisterDetails] = useState({
    Name: "",
    Email: "",
    password: "",
  });

  const Registerhandler = async (e) => {
    e.preventDefault();

    const regbody = {
      name: registerDetails.Name,
      email: registerDetails.Email,
      Password:registerDetails.password
    }

    const response = await fetch('https://grocerybasketbackend.onrender.com/api/register/', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(regbody)
    })
    const data = await response.json();
    if (response.status == '200')
    {
      console.log('User Registered Sucessfully...');

      setRegstate('Rinactive');
      setLogstate('Lactive');
      setRegisterDetails({
        Name: "",
        Email: "",
        password:""
      })
    }
    
  }

  return (
    <div id="Regbox" class={regstate}>
      <div id="Regcontainer">
        <div
          id="Rxclose"
          onClick={() => {
            setRegstate("Rinactive");
          }}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <div class="head">Login/Sign up</div>
        <div class="otphead">Using Email</div>
        <form onSubmit={Registerhandler} >


        <div>
          <input
            type="text"
            placeholder="Enter your Name"
            value={registerDetails.Name}
            onChange={(e) => {
              setRegisterDetails({
                ...registerDetails,
                Name: e.target.value,

              });
              }}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter the Email..."
            value={registerDetails.Email}
            onChange={(e) => {
              setRegisterDetails({ ...registerDetails, Email: e.target.value });
            }}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter the Password..."
            value={registerDetails.password}
            onChange={(e) => {
              setRegisterDetails({
                ...registerDetails,
                password: e.target.value,
              });
            }}
            required
          />
        </div>
        <button type="submit" onClick={Registerhandler}>Register</button>
        </form>
        <div class="Orsplit">----------------------OR------------------------</div>
        <div id="regcontainerswitch">

          <span>Already Have a account ?</span><span id="Rlogbut" onClick={() => {
            setRegstate('Rinactive'); 
            setLogstate('Lactive');
          }}>Login</span> 
        </div>
      </div>
      <div class="regbackbox"></div>
    </div>
  );
}

export default Registration;
