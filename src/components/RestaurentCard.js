import { C_URL } from "../utils/constant";
const RestaurentCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData.info;
  const {deliveryTime} = sla;
  return (
    <div className="restaurent-card">
      <img
        className="res-logo"
        src={C_URL + cloudinaryImageId}
      />
      <h5>{name}</h5>
      <h5>{cuisines.join(',')}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime}</h5>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export default RestaurentCard;