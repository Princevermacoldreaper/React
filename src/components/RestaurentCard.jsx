const RestaurentCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info;
    return (
      <div className="res-card" style={{backgroundColor:"#808080",}}>
        <img 
        className="res-logo"
        alt="res-logo"
        src={cloudinaryImageId}/>
        
  
       <h3>{name}</h3>
       <h4>{cuisines.join(",")}</h4>
       <h4>{avgRating}stars</h4>
       <h4>{costForTwo} min</h4>
      </div>
    )
  };
  export default RestaurentCard;