import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserInfoContext from "../utils/UserInfoContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const status = useOnlineStatus();
  const cartInfo = useSelector((store)=> store.cart.items);
  const {loggedInUser} = useContext(UserInfoContext);
  return (
    <div className="flex justify-between items-center  border border-b-gray-500">
      <div className="logo-container">
        <img
          className="w-35"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul className="flex font-bold text-lg">
          <li className="px-2 ml-2">Online Status:{status? "✅" :"🛑"}</li>
          <li className="px-2 ml-2"><Link to='/'>Home</Link></li>
          <li className="px-2 ml-2"><Link to='/about'>About</Link></li>
          <li className="px-2 ml-2"><Link to="/grocery">Grocery</Link></li>
          <li className="px-2 ml-2"><Link to='/contactus'>Contact Us</Link></li>
          <li className="px-2 ml-2"><Link to='/cart'>Cart-{cartInfo.length}</Link></li>
          <li className="px-2 ml-2">Login:{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;