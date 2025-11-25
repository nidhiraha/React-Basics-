import { useState } from "react";

const User = (props) =>{
  const {name,location} = props;
  const [count] = useState(0);
  const [count1] = useState(1);
  return(
    <div className="user-card">
      <h1>count: {count}</h1>
      <h1>count1: {count1}</h1>
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
    </div>
  );
}

export default User;