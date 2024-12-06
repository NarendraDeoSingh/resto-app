"use client";
import { useRouter } from "next/navigation";
import DeliveryHeader from "../DeliveryHeader";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const delivery = JSON.parse(localStorage.getItem("delivery"));
    if (!delivery) {
      router.push("/deliverypartner");
    }
  });
  return (
    <div>
      <DeliveryHeader />
      <h1>Delivary Dahboard</h1>
    </div>
  );
};

export default Page;
