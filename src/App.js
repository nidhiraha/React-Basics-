import React,{lazy,Suspense, useContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu.js";
import UserInfoContext from "./utils/UserInfoContext.js";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));



const AppLayout = () => {
  const user = useContext(UserInfoContext)
  const [userInfo,setUserInfo] = useState(user.loggedInUser);
  return (
    <Provider store={appStore}>
    <UserInfoContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserInfoContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
{
  path:'/',
  element:<AppLayout/>,
  children:[
      {
    path: '/',
    element: <Body/>,
  },
  {
    path: '/about',
    element: <About />
  },
  {
     path:'/grocery',
     element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
  },
  {
    path: '/contactus',
    element: <ContactUs />
  },
  {
    path:'/restaurents',
    element:<RestaurentMenu/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }
  ],
  errorElement:<Error/>,
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
