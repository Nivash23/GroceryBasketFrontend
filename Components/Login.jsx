import React, { useState } from "react";

function Login({ logstate, setLogstate, setRegstate }) {
  const [loginDetails, setLoginDetails] = useState({
    Email: "",
    password: "",
  });
  const Loginhandler = async (e) => {
    e.preventDefault();

    const loginbody = {
      email: loginDetails.Email,
      Password: loginDetails.password,
    };

    const response = await fetch("https://grocerybasketbackend.onrender.com/api/register/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginbody),
    });
    const data = await response.json();
    if (response.status == "200") {
      console.log("User Login Sucessfully...");

      //   setRegstate('Rinactive');
      setLogstate("Linactive");
      setLoginDetails({
        Email: "",
        password: "",
      });
    }
  }
    return (
      <div id="logbox" class={logstate}>
        <div id="Logcontainer">
          <div
            id="lxclose"
            onClick={() => {
              setLogstate("Linactive");
            }}
            >
            <ion-icon name="close-outline"></ion-icon>
          </div>
          <div class="head">Login/Sign up</div>
          <div class="otphead">Using Email</div>
          <form onSubmit={Loginhandler} >
            <div>
              <input
                type="text"
                placeholder="Enter the Email..."
                value={loginDetails.Email}
                onChange={(e) => {
                  setLoginDetails({
                    ...loginDetails,
                    Email: e.target.value,
                  });
                }}
                required
                />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter the Password..."
                value={loginDetails.password}
                onChange={(e) => {
                  setLoginDetails({
                    ...loginDetails,
                    password: e.target.value,
                  });
                }}
                required
                />
            </div>
            <button type="submit" onClick={Loginhandler} >
              Login
            </button>
          </form>
          <div class="Orsplit">
            ----------------------OR------------------------
          </div>
          <div id="logcontainerswitch">
            <span>Create new account ?</span>
            <span
              id="Lregbut"
              onClick={() => {
                setRegstate("Ractive");
                setLogstate("Linactive");
              }}
              >
              Register
            </span>
          </div>
        </div>
        <div class="regbackbox"></div>
      </div>
    );
  };

  export default Login;
  