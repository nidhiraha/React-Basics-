import { useState } from "react";
import menuData from "../utils/menu.json";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  // const {resId} = useParams();
  //  useEffect(()=>{
  //  fetchData();
  //  },[]);

  //  const fetchData = async() =>{
  //   fetch("https://corsproxy.io/?" + encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.472723&lng=80.197407&restaurantId=206992"))
  // .then(res => res.json())
  // .then(console.log);

  //  }

  const category = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const filterCard = category.cards.filter((itemCards) => {
    return (
      itemCards?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  console.log(filterCard);
  const cardInfo =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
      ?.card?.itemCards;
  return (
    <div>
      {filterCard.map((category, index) => {
        return (
          <div key={category?.card?.card?.categoryId}>
            {
              <RestaurentCategory
                data={category}
                showItem={index == showIndex ? true : false}
                setShowIndex = {()=>{setShowIndex(index)}}
              />
            }
          </div>
        );
      })}
    </div>
  );
};

export default RestaurentMenu;
