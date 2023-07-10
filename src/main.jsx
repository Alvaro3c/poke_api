import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import CreatePokemon from './pages/CreatePokemon.jsx';
import PokemonDetail from './pages/PokemonDetail.jsx';
import './index.scss'
import ErrorPage from './error-page.jsx';
import Search from './pages/Search.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetail />,
      },
      {
        path: "/create-new-pokemon",
        element: <CreatePokemon />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
