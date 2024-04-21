import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
