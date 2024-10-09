import { useState } from "react";
const AddFoodItems = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleAddFoodItem = async () => {
    console.log(name, price, path, description);
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
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter image path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={handleAddFoodItem}>
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItems;
