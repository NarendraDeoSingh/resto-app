"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setc_password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const router = useRouter();
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleSignUp = async () => {
    if (password !== c_password) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }
    if (
      !email ||
      !password ||
      !c_password ||
      !name ||
      !city ||
      !address ||
      !contact
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        c_password,
        name,
        city,
        address,
        contact,
      }),
    });
    response = await response.json();

    if (response.success) {
      const { result } = response;
      console.log("response", result);
      delete response.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
      alert("Restaurant registered successfully");
    }
  };

  return (
    <>
      <h3>SingnUp Component</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter email id"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && !email && (
            <span className="input-error">
              Please provide correct data
            </span>
          )}
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <span className="input-error">
              Password and confirm password don not match
            </span>
          )}
          {error && !password && (
            <span className="input-error">
              Please provide correct data
            </span>
          )}
          
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field"
            value={c_password}
            onChange={(e) => setc_password(e.target.value)}
          />
          {passwordError && (
            <span className="input-error">
              Password and confirm password don not match
            </span>
          )}
          {error && !c_password && (
            <span className="input-error">
              Please provide correct data
            </span>
          )}
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Resturant Name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && !name && (
            <span className="input-error">
              Password and confirm password don not match
            </span>
          )}
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter City"
            className="input-field"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {error && !city && (
            <span className="input-error">
              Please provide correct data
            </span>
          )}
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Full Address"
            className="input-field"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {error && !address && (
            <span className="input-error">
              Please provide correct data
            </span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter contact no."
            className="input-field"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {error && !contact && (
            <span className="input-error">
              Please provide correct data
            </span>
          )}
        </div>

        <div className="input-wrapper">
          <button className="input-field" onClick={handleSignUp}>
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};
export default RestaurantSignup;
