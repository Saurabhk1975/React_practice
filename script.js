import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("div",
{
    id:"parent"
},
React.createElement("div",
{
    id:"child"
},[
React.createElement("h1",{id:"heading"},"inner text of h1 "),
React.createElement("h5",{id:"heading"},"inner text of  h5")
]

));
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);