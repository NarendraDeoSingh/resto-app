"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import { DELIVERY_CHARGES, TAX } from "../lib/constant";
import { useRouter } from "next/navigation";
import { RestaurantFooter } from "../_components/RestaurantFooter";

const Page = () => {
  const [userStorage, setUserStorage] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [total] = useState(() =>
    cartStorage?.length == 1
      ? cartStorage[0].price
      : cartStorage?.reduce((a, b) => {
          return a.price + b.price;
        })
  );
  const router = useRouter();
  console.log(total);

  useEffect(() => {
    if (!total) {
      router.push("/");
    }
  },[total]);

  const [removeCartData, setRemoveCartData] = useState(false);
  const orderNow = async () => {
    let user_id = JSON.parse(localStorage.getItem("user"))._id;
    let cart = JSON.parse(localStorage.getItem("cart"));
    let resto_id = cart[0].restro_id;
    let foodItemIds = cart.map((item) => item._id).toString();
    let deliveryBoy_id = "674c18b976b70e68b82cff4b";
    let collection = {
      user_id,
      resto_id,
      foodItemIds,
      deliveryBoy_id,
      status: "confirm",
      amount: total + DELIVERY_CHARGES + (total * TAX) / 100,
    };
    let response = await fetch("http://localhost:3000/api/order", {
      method: "POST",
      body: JSON.stringify(collection),
    });
    console.log("response", response);
    if (response.status) {
      alert("order placed");
      setRemoveCartData(true);
      router.push("myprofile");
    } else {
      alert("order failed");
    }
    console.log(collection);
  };
  return (
    <div>
      <CustomerHeader removeCartData={removeCartData} />
      <div className="total-wrapper">
        <div className="block-1">
          <h2>User Details</h2>
          <div className="row">
            <span>Name </span>
            <span>{userStorage.name}</span>
          </div>
          <div className="row">
            <span>Mobile </span>
            <span>{userStorage.mobile}</span>
          </div>
          <div className="row">
            <span>Address </span>
            <span>{userStorage.address}</span>
          </div>
          <h2>Amount Details</h2>

          <div className="row">
            <span>Food Charges : </span>
            <span>{total}</span>
          </div>
          <div className="row">
            <span>Tax : </span>
            <span>{(total * TAX) / 100}</span>
          </div>
          <div className="row">
            <span>Delivery Charges : </span>
            <span>{DELIVERY_CHARGES}</span>
          </div>
          <div className="row">
            <span>Total Amount : </span>
            <span>{total + DELIVERY_CHARGES + (total * TAX) / 100}</span>
          </div>
          <h2>Payment Methods</h2>
          <div className="row">
            <span>Cash on Delivery : </span>
            <span>{total + DELIVERY_CHARGES + (total * TAX) / 100}</span>
          </div>
        </div>

        <div className="block-2">
          <button onClick={orderNow}>Place your order</button>
        </div>
      </div>
      <RestaurantFooter />
    </div>
  );
};

export default Page;
