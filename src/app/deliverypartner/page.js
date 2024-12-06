"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import DeliveryHeader from "../DeliveryHeader";

const Page = () => {
  const [loginMobile, setLoginMobile] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    let response = await fetch(
      "http://localhost:3000/api/deliverypartners/signup",
      {
        method: "post",
        body: JSON.stringify({ name, password, city, address, mobile }),
      }
    );
    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("delivery", JSON.stringify(result));
      router.push('deliveryDashboard')
      // alert("success");
    } else {
      alert("failed");
    }
  };

  const handleLogin = async () => {
    let response = await fetch(
      "http://localhost:3000/api/deliverypartners/login",
      {
        method: "post",
        body: JSON.stringify({ mobile: loginMobile, password: loginPassword }),
      }
    );
    response = await response.json();
    if (response.success) {
      let { result } = response;
      delete result.password;
      localStorage.setItem("delivery", JSON.stringify(result));
      router.push('deliveryDashboard')
      // alert("login success");
    } else {
      alert("failed to login and please again with mbile and password");
    }
  };
  return (
    <div>
       <DeliveryHeader />
      <h1>Delivary Partner</h1>

      <div className="auth-container">
        <div className="login-wrapper">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter mobile"
              className="input-field"
              value={loginMobile}
              onChange={(event) => setLoginMobile(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter password"
              className="input-field"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <button onClick={handleLogin} className="button">
              Login
            </button>
          </div>
        </div>
        <div className="signup-wrapper">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="confirm password"
              value={confpassword}
              onChange={(event) => setConfPassword(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter mobile"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <button onClick={handleSignUp} className="button">
              SingnUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
