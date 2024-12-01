"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const route=useRouter();
  const handleSignUp = async () => {
    console.log(name, email, password, confpassword, city, address, mobile);
    let response = await fetch("http://localhost:3000/api/user", {
      method: "post",
      body: JSON.stringify({ name, email, password, city, address, mobile }),
    });
    response = await response.json();
    if (response.success) {
      const {result}=response;
      delete result.password;
      localStorage.setItem('user',JSON.stringify(result))
      route.push('/')
    } else {
      alert("failed");
    }
  };
  return (
    <div>
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
          placeholder="enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
  );
};

export default UserSignUp;
