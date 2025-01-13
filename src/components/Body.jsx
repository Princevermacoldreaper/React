import RestaurentCard ,{withPromotedLabel}from "./RestaurentCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
let data;
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  
  useEffect(() => {
    const init = async () => {
      const data = await fetchData();
      setListOfRestaurents(...data);
      setFilteredRestaurent(...data);
    };
    init();
  }, []);

  const fetchData = async () => {
    const API_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.582574171253334&lng=77.40395203446887&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(API_URL);
    const json = await data.json();
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    //console.log(json.data.cards)
    return json.data.cards
      .map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      .filter((k) => typeof k !== "undefined");
    //return (json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  };

  //console.log("TEST", listOfRestaurents)
  //console.log(listOfRestaurents)
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    //console.log("offline");
    return <h1>You are Offline please connect to Internet!</h1>;
  }
  
  return listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex">
        <input
          type="text"
          className="border border-solid border-black mb-3 rounded-2xl shadow-md  hover:bg-blue-50"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button className="px-4 rounded-2xl bg-green-300 m-4"
          onClick={() => {
            const filteredRestaurent = listOfRestaurents.filter((k) =>
              k.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
            );
            setFilteredRestaurent(filteredRestaurent);

            
          }}
        >
          Search
        </button>
        <button 
          className="px-4 rounded-lg bg-green-300 m-4"
          onClick={() => {
            const FilteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4.4
            );
            console.log(FilteredList ? FilteredList : "error");
            setListOfRestaurents(FilteredList);
            //console.log(listOfRestaurents)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {listOfRestaurents.length > 0 && (
        <div className="flex flex-wrap">
          {listOfRestaurents.map((restaurent) => (
            <Link
              key={restaurent.info.id}
              to={"/restaurents/" + restaurent.info.id}
            >
              {/* {
                restaurent.data.promoted?<RestaurentPromoted/>:<Shimmer/>
              } */}
              <RestaurentCard resData={restaurent} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};


export default Body;
