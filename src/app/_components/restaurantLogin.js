import { useState } from "react";

const RestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async() => {
    if (!email || !password) {
      setError(true);
      return false;
    } else {
      setError(false);
      console.log(email,password)
    }
    let response=await fetch("http://localhost:3000/api/restaurant",{
      method:'POST',
      body:JSON.stringify({email,password,login:true})
    })
    response=await response.json();
    if(response.success){
      alert("Login Successful")
    }
  };
  return (
    <>
      <h3>Login Component</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter email id"
            className="input-field"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && !email && <span className="input-error">Please enter correct data</span>}
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && !password && <span className="input-error">Please enter correct data</span>}
        </div>

        <div className="input-wrapper">
          <button className="input-field" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default RestaurantLogin;
