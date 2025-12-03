import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/404'
import Navbar from '../components/ui/Navbar'
import ProjectSection from '../pages/Projects'
import CertificatesCRUD from '../pages/CertificatesCRUD'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'
import Agent from '../pages/Agent'
import Publications from '../pages/Publications'
import PublicationDetail from '../pages/Publications/components/PublicationDetail/PublicationDetail'

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
      path: "/resume",
      element: (
        <>
          <Navbar/>
          <Resume/>
        </>
      ),
      errorElement: <Error404/>,
    },
    {
      path: "/publications",
      element: (
        <>
        <Navbar/>
        <Publications/>
        </>
      ),
      errorElement: <Error404/>,
    },
    {
        path: "/publications/:id",
        element: (
            <>
                <Navbar />
                <PublicationDetail />
            </>
        ),
        errorElement: <Error404 />,
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar/>
          <Contact/>
        </>
      ),
      errorElement: <Error404/>,
    },
    {
      path: "/agent",
      element: (
        <>
          <Agent/>
        </>
      ),
      errorElement: <Error404/>,
    },
    {
      path: "*",
      element: <Error404/>,
    },
    // {
    //   path: "/add-certificate",
    //   element: (
    //     <>
    //       <Navbar/>
    //       <CertificatesCRUD/>
    //     </>
    //   ),
    //   errorElement: <Error404/>,
    // }
])

function MyRoutes() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default MyRoutes
