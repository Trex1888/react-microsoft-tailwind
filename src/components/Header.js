import { Link } from "react-router-dom";
import Logo from "../images/homepage/logo.png";
import { FaBars, FaSearch, FaShoppingCart, FaUserPlus } from "react-icons/fa";

function Header() {
  return (
    <header className="header flex items-center justify-between py-3 xl:mx-20">
      <div className="menu-btn flex">
        <div className="mx-4">
          <FaBars />
        </div>

        <div>
          <FaSearch />
        </div>
      </div>

      <div className="logo">
        <div>
          {/* <Link to="/"> */}
          <img src={Logo} alt="logo" />
          {/* </Link> */}
        </div>
      </div>

      <div className="cart flex">
        <div>
          <FaShoppingCart />
        </div>

        <div className="mx-4">
          <FaUserPlus />
        </div>
      </div>
    </header>
  );
}

export default Header;
