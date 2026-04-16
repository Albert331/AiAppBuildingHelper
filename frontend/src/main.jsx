import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './components/home/home.jsx'
import Root from './root.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        index:'true',
        element:<Home/>
      },
      
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
