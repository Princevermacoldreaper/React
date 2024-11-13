import RestaurentCard from "./RestaurentCard";
import resObj from "../utils/mockData";
import { useState ,useEffect} from "react";

const Body = () => {
  const [ListOfRestaurents, setListOfRestaurents] = useState(resObj);

  //console.log(ListOfRestaurents);
  useEffect(()=>{fetchData()},[]);
  const fetchData=()=>{
    const data=fetch()
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = ListOfRestaurents.filter(
              (res) => res.info.avgRating > 4.4
            );
            //console.log(FilteredList ? FilteredList : "error");
            setListOfRestaurents(FilteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
