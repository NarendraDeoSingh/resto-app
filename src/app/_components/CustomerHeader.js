import Link from "next/link";

const CustomerHeader = () => {
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
            <Link href="/">Login</Link>
        </li>
        <li>
            <Link href="/">SignUp</Link>
        </li>
        <li>
            <Link href="/">Cart(0)</Link>
        </li> 
        <li>
            <Link href="/">Add Restaurant</Link>
        </li> 
      </ul>
    </div>
  );
};

export default CustomerHeader;
