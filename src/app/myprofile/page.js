"use client";

import { useEffect, useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import { RestaurantFooter } from "../_components/RestaurantFooter";

const Page = () => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    getMyOrders();
  }, []);
  const getMyOrders = async () => {
    const userStorage = JSON.parse(localStorage.getItem("user"));

    let response = await fetch(
      `http://localhost:3000/api/order?id=${userStorage._id}`
    );
    response = await response.json();
    if (response.success) {
      setMyOrders(response.result);
    }
  };

  console.log(myOrders);
  return (
    <div>
      <CustomerHeader />
      {myOrders?.map((item) => (
        <div className="restaurant-wrapper">
          <h4>{item.data.name}</h4>
          <div>Amount : {item.amount}</div>
          <div>Address : {item.address}</div>
          <div>Status : {item.status}</div>
          {/* <div>Amount : {item.amount}</div> */}
        </div>
      ))}
      <RestaurantFooter />
    </div>
  );
};

export default Page;
