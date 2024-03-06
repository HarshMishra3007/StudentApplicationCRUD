import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import Home from './Components/Home'
import ViewAll from './Components/ViewAll'
import CreateNew from './Components/CreateNew'
import PostUpdateForm from './Components/PostUpdateForm'
import { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
     
      {
        path: "view_all",
        element: <ViewAll />
      },
      {
        path:"create_new",
        element:<CreateNew/>
      },
      {
        path:"update/:id",
        element:<PostUpdateForm/>
      }
     

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)