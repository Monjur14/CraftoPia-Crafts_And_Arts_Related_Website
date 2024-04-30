import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Sections/Home.jsx'
import NotFound from './Components/NotFound.jsx'
import Login from './Components/Login.jsx'
import RegisterPage from './Components/RegisterPage.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import CraftAndArt from './Sections/CraftAndArt.jsx'
import AddItems from './Sections/AddItems.jsx'
import MyList from './Sections/MyList.jsx'
import DetailsPage from './Sections/DetailsPage.jsx'
import Category from './Sections/Category.jsx'
import UpdateItem from './Sections/UpdateItem.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      {
        path: "/artandcraft",
        element: <CraftAndArt/>
      },
      {
        path: "/additem",
        element: <AddItems/>
      },
      {
        path: "/mylist",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
      },
      {
        path: "/category/:category",
        element: <Category/>
      },
      {
        path: '/update/:id',
        element: <UpdateItem/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}/>
    </FirebaseProvider>
  </React.StrictMode>
)
