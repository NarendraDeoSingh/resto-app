"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DeliveryHeader = (props) => {
//   const userStorage =
//     localStorage?.getItem("user") && JSON.parse(localStorage.getItem("user"));
//   const cartStorage =
//     localStorage?.getItem("cart") && JSON.parse(localStorage.getItem("cart"));
//   const [user, setUser] = useState(userStorage ? userStorage : undefined);
//   const [cartNumber, setCartNumber] = useState(cartStorage?.length);
//   const [cartItem, setCartItem] = useState(cartStorage);
  const router = useRouter();

  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          style={{ width: 100 }}
          src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png"
        />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default DeliveryHeader;
