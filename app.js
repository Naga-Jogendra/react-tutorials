/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>
 *              //This type of structure need to be created
 *          </h1>
 *          <h2>
 *              //sibling level elements
 *          </h2>
 *      </div>
*       <div id="child">
*          <h1>
*              //This type of structure need to be created
*          </h1>
*          <h2>
*              //sibling level elements
*          </h2>
*       </div>
 * </div>
 * complex structure
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent"},
    [React.createElement("div", { id: "child" },
        [ React.createElement("h1",{}, "This is h1 element"),
          React.createElement("h2",{}, "This is h2 element")]),
    React.createElement("div", { id: "child" },
        [ React.createElement("h1",{}, "This is h1 element"),
          React.createElement("h2",{}, "This is h2 element")])]
);
//console.log(parent);

//const heading = React.createElement("h1", { id: "heading", xyz: "abc"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 