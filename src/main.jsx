import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DetailsPage from './pages/DetailsPage.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details",
    element: <DetailsPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
