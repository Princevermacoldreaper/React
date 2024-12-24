import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
       this.state={
        count:0,
       }
        //console.log(props.name)
    }
    componentDidMount(){
        console.log("component did count called");
    }
    render(){
        return (<div className="user-card">
            <h1>count:{this.state.count}</h1>
            <button onClick={()=>{
                this.setState({count:this.state.count+1,})
            }}>Increase count</button>
            <h2>Name:{this.props.name}</h2>
            <h3>Location:{this.props.location}</h3>
            <h4>Contact:@coldreaper</h4>
        </div>);
    }
}
export default UserClass;