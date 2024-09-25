import Link from "next/link";
import React from "react";
export default function RestaurantHeader() {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
        src="https://cdn.pixabay.com/photo/2022/01/26/22/43/delivery-6970072_1280.png"
          style={{ width: 100 }}
        />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Login/Sign up</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
}
