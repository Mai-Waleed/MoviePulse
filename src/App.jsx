import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {Offline} from "react-detect-offline"
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home/Home";
// import Login from './components/Login/Login'
// import Register from './components/Register/Register'
import Movies from "./Pages/Movies/Movies";
import People from "./Pages/People/People";
import Tv from "./Pages/Tv/Tv";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import NotFound from "./Pages/NotFound/NotFound";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "people", element: <People /> },
      { path: "tv", element: <Tv /> },
      { path: "itemdetails/:media_type/:id", element: <ItemDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Offline>
       <div className="offline">
         <div className="offline-icon">
           <i className="fas fa-wifi"></i>
         </div>

         <div>
           <h4>No Internet Connection</h4>
           <p>Reconnect to continue browsing movies.</p>
         </div>
       </div>
     </Offline> */}
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
