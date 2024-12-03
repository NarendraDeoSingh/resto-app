"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    let response = await fetch("http://localhost:3000/api/user/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
    });
    response = await response.json();
    if (response.success) {
      let { result } = response;
      delete result.password;
      localStorage.setItem("user", JSON.stringify(result));
      if (props?.redirect?.order) {
        router.push("/order");
      } else{
        router.push("/");
      }
    } else {
      alert("failed to login and please again");
    }
  };
  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="enter email"
          className="input-field"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="enter password"
          className="input-field"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
