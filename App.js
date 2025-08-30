import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1",{id:"heading"},"Hello World"); 
const JsxHeading =(<h1 className="root">Hello World From Jsx</h1>);
const HeadingComponent = ()=>(
  <div>
  {JsxHeading}
  {'Hello I am inside curtly Braces'}
 <h1>Hello All From Functional Component</h1>
 </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);