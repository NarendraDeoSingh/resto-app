const RestaurantSignup = () => {
  return (
    <>
      <h3>SingnUp Component</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter email id"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type='text'
            placeholder="Enter Resturant Name"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type='text'
            placeholder="Enter City"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type='text'
            placeholder="Enter Full Address"
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <input
            type='text'
            placeholder="Enter contact no."
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <button className="input-field">SignUp</button>
        </div>
      </div>
    </>
  );
};
export default RestaurantSignup;
