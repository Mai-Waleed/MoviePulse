import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Offline} from "react-detect-offline"
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
// import Login from './components/Login/Login'
// import Register from './components/Register/Register'
import Movies from './components/Movies/Movies'
import People from './components/People/People'
import Tv from './components/Tv/Tv'
import ItemDetails from './components/ItemDetails/ItemDetails'
import NotFound from './components/NotFound/NotFound'

// let routers = createHashRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "movies", element: <Movies /> },
//       { path: "people", element: <People /> },
//       { path: "tv", element: <Tv /> },
//       { path: "itemdetails/:media_type/:id", element: <ItemDetails /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);

function App() {
 return (
   <>
     <BrowserRouter basename="/">
     <Route>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<Movies />} />
          <Route path="tv" element={<Tv />} />
          <Route path="people" element={<People />} />
          <Route path="itemdetails/:media_type/:id" element={<ItemDetails />} />
          <Route path="*" element={<NotFound />} />
          </Route>
      </Route>
     </BrowserRouter>
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
     {/* <RouterProvider router={routers}></RouterProvider> */}
   </>
 );
}

export default App