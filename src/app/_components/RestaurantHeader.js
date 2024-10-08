"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function RestaurantHeader() {
  const [details, setDetails] = useState('');
  const router = useRouter();
  let pathName = usePathname();

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
    }
    if (data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      // setDetails(JSON.parse(data));
    }
  });

  const logout = () => {
    localStorage.removeItem("restaurantUser");
    router.push("/restaurant");
  };
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
        {details && details.name ? (
          <>
            <li>
              <Link href="/">Profile</Link>
            </li>
            <li>
              <Link href="/" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/">Login/Sign up</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
