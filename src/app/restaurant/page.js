"use client";

import React, { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignup from "../_components/restaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import './style.css'
import { RestaurantFooter } from "../_components/RestaurantFooter";
function Restaurant() {
  const [login, setLogin] = useState(true);
  return (
    <>

      <div className="container">
      <RestaurantHeader />
        <h1>Restaurant Login/Signup</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignup />}
        <div>
          <button className="button-link" onClick={() => setLogin(!login)}>
            Already have Account ? SignUp
          </button>
        </div>
        <RestaurantFooter />
      </div>
    </>
  );
}

export default Restaurant;
