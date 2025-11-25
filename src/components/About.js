import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
  return (
    <div>
    <h1>About Component</h1>
    <User name={"Nidhi Rahangdale"} location={"Gondia"}/>
    <UserClass name={"Nidhi Rahangdale"} location={"Gondia"}/>
    </div>
   );
}

export default About;