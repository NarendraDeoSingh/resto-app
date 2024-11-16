"use client";
import CustomerHeader from "@/app/_components/CustomerHeader";
import { RestaurantFooter } from "@/app/_components/RestaurantFooter";
import { useEffect, useState } from "react";

const Page = (props) => {
  const name = props.params.name;
  const [restaurantDetails, setRestaurantDetails] = useState('');
  const [foodItems, setFoodItems] = useState('');
  const [cartData, setCartData] = useState('');
  useEffect(() => {
    loadRestaurantDetails();
  }, []);

  const loadRestaurantDetails = async () => {
    const id = props.searchParams.id;
    // console.log(id);

    let response = await fetch("http://localhost:3000/api/customer/" + id);
    response = await response.json();
    // console.log("foodItems", response);

    if (response.success) {
      setRestaurantDetails(response.details);
      setFoodItems(response.foodItems);
    }
  };

  const addToCart = (item) => {
    setCartData(item);
  };
  return (
    <div>
      <CustomerHeader cartData={cartData} />
      <div className="restaurant-page-banner">
        <h1>{decodeURI(name)}</h1>
      </div>
      <div className="detail-wrapper">
        <h3>Contact: {restaurantDetails?.contact}</h3>
        <h3>City: {restaurantDetails?.city}</h3>
        <h3>Address: {restaurantDetails?.address}</h3>
        <h3>Email: {restaurantDetails?.email}</h3>
      </div>

      <div className="food-item-wrapper">
        {foodItems?.length > 0 ? (
          foodItems?.map((item,index) => (
            <div className="list-item" key={index}>
              <div>
                <img src={item.img_path} width={75} height={75} />
              </div>
              <div>
                <div >{item.name}</div>
                <div>{item.price}</div>
                <div>{item.description}</div>
                <button onClick={()=>addToCart(item)}>Add to cart</button>
              </div>
            </div>
          ))
        ) : (
          <h1>No food item added for now</h1>
        )}
      </div>
      <RestaurantFooter />
    </div>
  );
};

export default Page;
