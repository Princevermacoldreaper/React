import RestaurentCard from "./RestaurentCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
let data;
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [searchText,setsearchText]=useState("")
  //console.log(ListOfRestaurents);
  useEffect(()=> {
    const init = async() => {
        const data = await fetchData()
        setListOfRestaurents(...data)
        
    }
    init()  
  },[]);

  const fetchData=async()=>{
    const API_URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.582574171253334&lng=77.40395203446887&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data=await fetch(API_URL);
    const json=await data.json();
    return (json.data.cards.map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)).filter((k) => typeof k !== 'undefined')
   }
  
  console.log("TEST", listOfRestaurents)
 // console.log(listOfRestaurents.filter((k)=>k.info.name==searchText))
   
  return ( listOfRestaurents.length==0?<Shimmer/>:
    <div className="body">  
      <div className="filter">
      <input type="text" className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
      <button onClick={()=>{
        const filteredRestaurent=listOfRestaurents.filter((k)=>k.info.name==searchText);
       setListOfRestaurents(filteredRestaurent);
       console.log(data)
      }}>Search</button>
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
