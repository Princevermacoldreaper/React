
import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
const[resInfo,setResInfo]=useState(null);
    useEffect(() => {
        
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        try {
            //data.data.cards[2].card.card.info
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.582574171253334&lng=77.40395203446887&restaurantId=624070&catalog_qa=undefined&submitAction=ENTER");
            const data = await response.json();
            console.log(data);
            setResInfo(data)
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };
 //const{name,cuisines,costForTwoMessage,avgRatingString}=resInfo.data.cards[2].card.card.info;
 const cuisines=resInfo.data.cards[2].card.card.info;
    return resInfo==null?<Shimmer/>:(
        <div className="menu">
            <h1>{resInfo.data.cards[2].card.card.info.name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <p>{costForTwoMessage} ~{avgRatingString} Stars </p>
        </div>
    );
};

export default RestaurantMenu;
