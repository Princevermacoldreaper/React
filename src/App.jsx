import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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
const AppLayout=()=>{
  return (
    <div className="app">
   <Header/>
   <Body/>
    </div>
  )
} ;
const root = ReactDOM.createRoot(document.getElementById('root')); 
 root.render(<AppLayout/>);