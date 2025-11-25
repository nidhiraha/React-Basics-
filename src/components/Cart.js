import { useDispatch, useSelector } from "react-redux";
import RestaurentItemList from "./RestaurentItemList";
import { clearItems } from "../utils/cartSlice.js";

const Cart = () => {
  const cartInfo = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();
  const handleClearItem = () =>{
      dispatch(clearItems());
  }
  return (
    <div>
      <div className="flex justify-center my-4">
        <button className="bg-black text-white rounded-sm w-20 font-bold" onClick={handleClearItem}>
          clear
        </button>
      </div>
      <div className="w-6/12 mx-auto shadow-2xl h-5">
        <RestaurentItemList data={cartInfo}  removeButton={true}/>
      </div>
    </div>
  );
};

export default Cart;
