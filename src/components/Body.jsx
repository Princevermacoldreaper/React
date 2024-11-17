import RestaurentCard from "./RestaurentCard";
import { useState ,useEffect} from "react";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  //console.log(ListOfRestaurents);
  useEffect(()=> {
    const init = async() => {
        const m = await fetchData()
        setListOfRestaurents(...m)
    }
    init()  
  },[]);

  const fetchData=async()=>{
    const API_URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.582574171253334&lng=77.40395203446887&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data=await fetch(API_URL);
    const json=await data.json();
    // const restaur = json?.data?.cards?.find(card => card?.cardType === "whats_on_your_mind")?.data?.data?.cards;
   return (json.data.cards.map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)).filter((k) => typeof k !== 'undefined')
    
   // console.log(json);
    // console.log(json);
  }

  console.log("TEST", listOfRestaurents)
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4.4
            );
            //console.log(FilteredList ? FilteredList : "error");
            setListOfRestaurents(FilteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {listOfRestaurents.length > 0 && (

<div className="res-container">
{listOfRestaurents.map((restaurent) => (
  <RestaurentCard key={restaurent.info.id} resData={restaurent} />
))}
</div>
      )}
     
    </div>
  );
};

export default Body;
