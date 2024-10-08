"use client";
import { useState } from "react";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "../../restaurant/style.css";
import { RestaurantFooter } from "@/app/_components/RestaurantFooter";
import AddFoodItems from "@/app/_components/AddFoodItem";
const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);
  return (
    <div>
      <RestaurantHeader />
      <button onClick={()=>setAddItem(true)}>Add Food</button>
      <button onClick={()=>setAddItem(false)}>Dashboard</button>
      {addItem ? <AddFoodItems /> : <h1>Restaurant Dashboard</h1>}

      <RestaurantFooter />
    </div>
  );
};

export default Dashboard;
