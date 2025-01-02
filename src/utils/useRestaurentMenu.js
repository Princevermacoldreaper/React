import { useEffect, useState } from "react";
import { Menu_api,Menu_api2 } from "../utils/constants";
const useRestaurentMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(() => {
        
        fetchData();
    }, []);
    const fetchData = async () => {
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
 return resInfo;
}
export default useRestaurentMenu;