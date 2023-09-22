import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Routes/home/home.jsx'
import Historia from './Routes/historia/historia.jsx'
import Seriequadrinhos from './Routes/seriequadrinhos/seriequadrinhos.jsx'
import Episodios from './Routes/episodios/episodios.jsx'
import Contato from './Routes/contato/contato.jsx'
import Error from './Routes/Error/error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/historia",
        element: <Historia/>
      },
      {
        path: "/seriequadrinhos",
        element: <Seriequadrinhos/>
      },
      {
        path: "/episodios",
        element: <Episodios/>
      },
      {
        path: "/contato",
        element: <Contato/>
      },
    ]
  }
])
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
