import React from "react";
import ReactDOM from "react-dom/client";

//heading is and object --> HTML Element
//const heading = React.createElement("h1",{ id: "heading" }, "Hello World from React");
//console.log(heading);
//JSX transpile to React element by babel --> react element --> object --> html elment
const jsxheading = (
  <h1 id="heading" tabIndex="1">
    This is from JSX heading
  </h1>
);

//1st way of writting
const ReactComponent = () => {
  return (<h1>
    React Component
  </h1>);
}

//2nd way of writting
const ReactComponet1 = () => (
  <h1 className="second-component">
      React Component 2
  </h1>);

const TitleComponent = () => (
  <h1 id="titles">
      This is from Title Component
  </h1>
);
const number = 1000;
const ContentComponent = () => (
  <div id="container">
      <h1>{ 500 + 20 }</h1>
      <h1 id="heading-content-component">
          This is heading from Content Component
      </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContentComponent />);