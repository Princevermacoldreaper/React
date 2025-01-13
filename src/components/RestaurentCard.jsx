const RestaurentCard=(props)=>{
    const {resData}=props;
    //console.log(resData)
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla}=resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-500 hover:bg-white" >
        <img 
        className="res-logo"
        alt="res-logo"
        src={cloudinaryImageId}/>
        
  
       <h3 className="font-bold py-1 text-lg">{name}</h3>
       <h4 className="text-wrap">{cuisines.join(",")}</h4>
       <h4>{avgRating}stars</h4>
       <h4>{costForTwo} min</h4>
       <h4>{sla.deliveryTime} min</h4>
      </div>
    )
  };
  export const withPromotedLabel=(RestaurentCard)=>{
    return (props)=>{
      return (
        <div>
          <label className="absolute bg-black text-white">Promoted</label>
          <RestaurentCard {...props}/>
        </div>
      )
    }
  }
  export default RestaurentCard; 