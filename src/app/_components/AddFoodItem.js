import { useState } from "react";
const AddFoodItems = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleAddFoodItem = async (props) => {
    if (!name || !price || !path || !description) {
      setError(true);
      return false;
    }
    let restro_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));

    if (restaurantData) {
      restro_id = restaurantData.result._id;
    }
    let response = await fetch("http://localhost:3000/api/restaurant/foods", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        img_path: path,
        description,
        restro_id,
      }),
    });
    response = await response.json();
    if (response.success) {
     
      alert("Food item added");
      props.setAddItem(false)
    }
  };
  return (
    <div className="container">
      <h1>Add New Food Item</h1>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter food name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && !name ? (
          <span className="input-error">Please enterr valid name</span>
        ) : (
          ""
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price ? (
          <span className="input-error">Please enterr valid price</span>
        ) : (
          ""
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter image path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
        {error && !path ? (
          <span className="input-error">Please enterr valid path</span>
        ) : (
          ""
        )}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && !description ? (
          <span className="input-error">Please enterr valid description</span>
        ) : (
          ""
        )}
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={()=>handleAddFoodItem(props)}>
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItems;
