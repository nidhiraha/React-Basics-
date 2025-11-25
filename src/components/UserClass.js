import React from "react"; 

class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count : 0,
    }
  }

  
  render(){
    const {name,location} = this.props;
    const {count,count1} = this.state;
     return (<div className="user-card">
      <h1>count: {count}</h1>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment Count</button>
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
    </div>);
  }
}

export default UserClass;