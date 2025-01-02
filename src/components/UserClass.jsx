import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
       this.state={
        userInfo:{
            name:"username",
            location:"default",
        }
       }
        //console.log(props.name)
    }
    async componentDidMount(){
        
    const data=await fetch("https://api.github.com/users/Princevermacoldreaper");
    const json=await data.json();
    this.setState({
        userInfo:json,
    });
    console.log(json);
    }
    componentDidUpdate(){
        console.log("did update called");
    } 
    render(){
        return (<div className="user-card">
            <h2>Name:{this.state.userInfo.name}</h2>
            <h3>Location:{this.state.userInfo.location}</h3>
            <h4>Company:{this.state.userInfo.company}</h4>
        </div>);
    }
}
export default UserClass;