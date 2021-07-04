import Logo from "../images/homepage/logo.png";
import { FaBars, FaSearch, FaShoppingCart, FaUserPlus } from "react-icons/fa";

function Header() {
  return (
    <header className="header flex items-center justify-between py-3 xl:mx-20">
      <div className="flex">
        <div className="mx-4 cursor-pointer">
          <FaBars />
        </div>

        <div className="cursor-pointer">
          <FaSearch />
        </div>
      </div>

      <div className="logo">
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <ul>
          <li className="cursor-pointer hover:underline">Microsoft 365</li>
          <li className="cursor-pointer hover:underline">Offices</li>
          <li className="cursor-pointer hover:underline">Windows</li>
          <li className="cursor-pointer hover:underline">Surfaces</li>
          <li className="cursor-pointer hover:underline">Xbox</li>
          <li className="cursor-pointer hover:underline">Deals</li>
          <li className="cursor-pointer hover:underline">Support</li>
        </ul>
      </div>

      <div className="cart flex">
        <div className="cursor-pointer">
          <FaShoppingCart />
        </div>

        <div className="mx-4 cursor-pointer">
          <FaUserPlus />
        </div>
      </div>

      <div className="sign-in">
        <ul>
          <li className="cursor-pointer hover:underline">All Microsoft</li>
          <li className="cursor-pointer hover:underline">Search</li>
          <li className="cursor-pointer hover:underline">Cart</li>
          <li className="cursor-pointer hover:underline">Sign In</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
