import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/404'
import Navbar from '../components/Navbar'
import ProjectSection from '../pages/Proyects'
import CertificatesCRUD from '../pages/CertificatesCRUD'

const router = createBrowserRouter([
    {
        path: "/",
        element: (
        <>
          <Navbar/>
          <Home/>
        </>
      ),
        errorElement: <Error404/>
    },
    {
      path: "/projects",
      element: (
        <>
          <Navbar/>
          <ProjectSection/>
        </>
      ),
      errorElement: <Error404/>,
    },
    {
      path: "/about",
      element: <div>About</div>,
      errorElement: <Error404/>,
    },
    {
      path: "/blog",
      element: <div>blog</div>,
      errorElement: <Error404/>,
    },
    {
      path: "/contact",
      element: <div>Contacto</div>,
      errorElement: <Error404/>,
    },
    {
      path: "*",
      element: <Error404/>,
    },
    {
      path: "/add-certificate",
      element: (
        <>
          <Navbar/>
          <CertificatesCRUD/>
        </>
      ),
      errorElement: <Error404/>,
    }
])

function MyRoutes() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default MyRoutes
