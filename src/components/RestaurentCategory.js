import RestaurentItemList from "./RestaurentItemList";

const RestaurentCategory =({data,showItem,setShowIndex})=>{
  const handleToggle = () => {
    setShowIndex();
  }
console.log("::::::::::data",data)
  return (
     <div key={data?.card?.card?.categoryId} className='p-5 shadow-lg my-6 w-6/12 mx-auto bg-gray-200'>
                <div className="mb-5" onClick={handleToggle}>
                  <span className="float-left font-bold">{`${data?.card?.card?.title} - ${data?.card?.card?.itemCards.length}`}</span>
                  <span className="float-right">🔽</span>
                </div>
               {showItem && <RestaurentItemList data={data?.card?.card?.itemCards} removeButton={false}/>}
         </div>
  );
}

export default RestaurentCategory;

