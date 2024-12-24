
import { useEffect ,useState} from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { Menu_api,Menu_api2 } from "../utils/constants";
const RestaurantMenu = () => {
const[resInfo,setResInfo]=useState(null);
      const {resId}=useParams();
      //console.log(resId);
    useEffect(() => {
        
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        try {
            //
            const response = await fetch(Menu_api+resId+Menu_api2);
            const data = await response.json();
           // console.log(data.data.cards[2].card.card.info);
            setResInfo(data)
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };
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
