import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"

// React Element

// const heading = React.createElement("div",
// {
//     id:"parent"
// },
// React.createElement("div",
// {
//     id:"child"
// },[
// React.createElement("h1",{id:"heading"},"inner text of h1 "),
// React.createElement("h5",{id:"heading"},"inner text of  h5")
// ]

// ));
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React component






const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
