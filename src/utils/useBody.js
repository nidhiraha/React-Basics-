import {useEffect,useState} from "react";

const useBody = () => {
  console.log("useBody call first");
  const [restaurentInfo,setRestaurentInfo] = useState([]);
  useEffect(()=>{
  fetchData();
  },[]);

  const fetchData = async ()=>{
  const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5291453&lng=73.8741484&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json?.data?.cards[1]?.card?.card)
  setRestaurentInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
  return restaurentInfo;
}

export default useBody;
