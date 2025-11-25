import { C_URL } from "../utils/constant";
import { addItems, removeItems } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";
const RestaurentItemList = ({data,removeButton})=>{
  const dispatch = useDispatch();
 const handleAddItem = (item) =>{
    dispatch(addItems(item))
 }
const handleRemoveItem = (item)=>{
  dispatch(removeItems(item))
}
  return (
    <div>{
    data.map((itemList)=>{
        return (
          <div key={itemList.card.info.id} className="shadow-2xs p-5 my-3">
          <span className="float-left">{`${itemList.card.info.name} - ${itemList.card.info.price/100}\n`}</span>
          { itemList.card.info.imageId && <span className="float-right w-20 h-15 p-1 flex justify-end"><img src={C_URL + itemList.card.info.imageId}/>
          <button className="absolute text-xs bg-black text-white rounded-s-xs" onClick={()=>{handleAddItem(itemList)}}>Add+</button>
          
          </span>}
          {removeButton && <button className=" bg-black text-white rounded-s-xs" onClick={()=>{handleRemoveItem(itemList)}}>Remove</button>}
          </div>
          
        )
      })
      }</div>
  )
}

export default RestaurentItemList;