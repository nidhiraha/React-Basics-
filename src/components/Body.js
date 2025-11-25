import { Link } from "react-router-dom";
import RestaurentCard,{withPromtedLabel} from "./RestaurentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";
import UserInfoContext from "../utils/UserInfoContext";



const Body = () => {
  const [filterList, setFilterList] = useState([]);
  const [input, setInput] = useState("");
  const listOfRestaurents = useBody();
  const status = useOnlineStatus();
  const {loggedInUser,setUserInfo} = useContext(UserInfoContext);
  const RestuarantCardWithPromotedLabel = withPromtedLabel();
 console.log(":::::::::::::::::::::::::::::::user",loggedInUser);
  useEffect(() => {
    if (listOfRestaurents) {
      setFilterList(listOfRestaurents);
    }
  }, [listOfRestaurents]);
 

  if (status == false) {
    return <h1>You're Offline</h1>;
  }

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="p-4 mt-1 border-r-8">
        <button
         className="bg-blue-500"
          onClick={() => {
            const filterRestaurent = listOfRestaurents.filter((filterRes) => {
              return filterRes.info.avgRating > 4;
            });
            setFilterList(filterRestaurent);
          }}
         
        >
          Filter TOP 4 Restaurents
        </button>
        <input
          type="text"
          placeholder="Search Restaurent"
          onChange={(e) => {
            setInput(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log("input=============>", input);

            const updatedList = listOfRestaurents.filter((searchInput) => {
              return searchInput.info.name
                .toLowerCase()
                .includes(input.toLowerCase());
            });
            console.log("updatedList===================>", updatedList);
            setFilterList(updatedList);

            console.log(
              "listOfRestaurents=========================>",
              listOfRestaurents
            );
          }}
        >
          Search For Restaurents
        </button>
        <div>
          <label className="font-bold">User Login:</label>
        <input type="text" value={loggedInUser} onChange={(e)=>{setUserInfo(e.target.value)}} className="m-2 p-2 border-2"/>
      </div>
      </div>
      <div className="restaurent-card-container flex flex-wrap">
        {filterList.map((resList) => (
          //If the Restaurent is promoted add a promoted label to it
          <Link to="/restaurents" key={resList.info.id}>
            <div className="w-60">
            <RestaurentCard  resData={resList} />
            </div>
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
