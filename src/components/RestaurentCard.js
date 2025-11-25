import { C_URL } from "../utils/constant";
const RestaurentCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData.info;
  const {deliveryTime} = sla;
  return (
    <div className="shadow-2xl p-2">
      <img
        className="w-auto h-auto p-2 rounded-b-md"
        src={C_URL + cloudinaryImageId}
      />
      <h5>{name}</h5>
      <h5 className="wrap-break-word">{cuisines.join(',')}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime}</h5>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export default RestaurentCard;

export const withPromtedLabel = (RestaurentCard) =>{
  return () =>{
    return(
      <div>
    <label>Promted</label>
    <RestaurentCard/>
    </div>
    )
  }
}


