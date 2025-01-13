
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
const RestaurantMenu = () => {

      const {resId}=useParams();
      
     const resInfo=useRestaurentMenu(resId);
     console.log(resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card?.itemCards);
    //const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    //console.log()
    if(resInfo==null) return <Shimmer/>;
 const{name,cuisines,costForTwoMessage,avgRatingString}=resInfo.data.cards[2].card.card.info;
  
    return (
        <div className="menu">
            <h1>{resInfo.data.cards[2].card.card.info.name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <p>{costForTwoMessage} ~{avgRatingString} Stars </p>
            <p></p>
            
        </div>
    );
};

export default RestaurantMenu;
