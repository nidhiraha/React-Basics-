import RestaurentCard from "./RestaurentCard";
import { resObj } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurent-card-container">
       {resObj.restaurants.map((resList)=>(
             <RestaurentCard key={resList.info.id} resData={resList}/>
        ))
      } 
      </div>
    </div>
  );
};

export default Body;