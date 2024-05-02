import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Grocery from "./components/Grocery";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

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
const Grocery = lazy(() => import("./components/Grocery"));
const App = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const data = {
      name: "Saurabh Kumar",
    };
    setUserName(data.name);
  }, []);
  return (
    // here it take store as props
    <Provider store={appStore}>
      <UserContext.Provider value={{ loginUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      { path: "/cart", element: <Cart /> },
      {
        // Suspense used for lazy loading while we need this then only make it js file Separately
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
