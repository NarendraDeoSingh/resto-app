import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const router=useRouter()
  useEffect(() => {
    loadFoodItems();
  }, []);
  const loadFoodItems = async () => {
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    const restro_id = restaurantData.result._id;
    let response = await fetch(
      "http://localhost:3000/api/restaurant/foods/" + restro_id
    );
    response = await response.json();
    if (response.success) {
      setFoodItems(response.result);
    } else {
      alert("food item list not loading");
    }
  };

  const deleteFoodItems = async (id) => {
    let response = await fetch(
      "http://localhost:3000/api/restaurant/foods/" + id,
      {
        method: "delete",
      }
    );
    response = await response.json();
    if (response.success) {
      loadFoodItems();
    } else {
      alert("food item not deleted");
    }
  };

  return (
    <div>
      <h1>Food Items</h1>
      <table>
        <thead>
          <tr>
            <td>S.no</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img src={item.img_path} />
                </td>
                <td>
                  <button onClick={() => deleteFoodItems(item._id)}>
                    Delete
                  </button>
                  <button onClick={()=>router.push('dashboard/'+item._id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
