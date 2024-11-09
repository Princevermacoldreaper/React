import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//     "div",
//     { id: "heading" },
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "hello from react!"),
//       React.createElement("h2", {id:"heading"}, "hello h2 from react!"),
//     ])
//   );
// const heading=<h1>hey there</h1>;
//const HeadingComponent = () => <h1>namaste functional component</h1>;
// const HeadingComponent = () => {
//   return <h1 className="heading">namaste functional component</h1>;
// };
// const Title=(
//   <h1> namaste from title</h1>
// );

// const elm=<span>React element</span>;
// //react component
// const HeadingComponent = () => ( 
// <div>
// {elm}
// {Title}
// <h1>namaste react functional component</h1>
// </div>);

//  const root = ReactDOM.createRoot(document.getElementById('root')); 
//  root.render(<HeadingComponent/>);
const stylecard={
  backgroundColor:"#808080"
}
// //React element
const Header=()=>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"src="https://cdn2.vectorstock.com/i/1000x1000/73/31/food-app-logo-vector-34017331.jpg"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    
  )
}
const RestaurentCard=()=>{
  return(
    <div className="res-card" style={{backgroundColor:"#808080",}}>
      <h3>meghna foods</h3>

    </div>
  )
}
const Body=()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard/>
      </div>

    </div>
  )

}
const AppLayout=()=>{
  return (
    <div className="app">
   <Header/>
   <Body/>

    </div>
  )
} 
const root = ReactDOM.createRoot(document.getElementById('root')); 
 root.render(<AppLayout/>);