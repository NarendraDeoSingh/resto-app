"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import { RestaurantFooter } from "../_components/RestaurantFooter";
import UserLogin from "../_components/UserLogin";
import UserSignUp from "../_components/UserSingnUp";

const UserAuth = (props) => {
  const [login, setLogin] = useState(true);

  return (
    <div>
      <CustomerHeader />
      <div className="container">
        <h1>{login ? <h1>Login</h1> : <h1>Sign up</h1>}</h1>
        {login ? (
          <UserLogin redirect={props.searchParams} />
        ) : (
          <UserSignUp redirect={props.searchParams} />
        )}
        <div>
          <button className="button-link" onClick={() => setLogin(!login)}>
            {login
              ? "Do not have an account? SignUp"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>

      <RestaurantFooter />
    </div>
  );
};
export default UserAuth;
