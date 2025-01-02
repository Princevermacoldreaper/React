
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
const RestaurantMenu = () => {

      const {resId}=useParams();
      //console.log(resId);
     const resInfo=useRestaurentMenu(resId);
    
    if(resInfo==null) return <Shimmer/>;
 const{name,cuisines,costForTwoMessage,avgRatingString}=resInfo.data.cards[2].card.card.info;
  
    return (
        <div className="menu">
            <h1>{resInfo.data.cards[2].card.card.info.name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <p>{costForTwoMessage} ~{avgRatingString} Stars </p>
        </div>
    );
};

export default RestaurantMenu;
