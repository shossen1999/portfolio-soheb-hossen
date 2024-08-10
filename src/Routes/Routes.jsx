import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/contacts/Contact";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          
        },
        {
            path: "/about",
            element: <About></About>,
            
          },
        {
            path: "/projects",
            element: <Projects></Projects>,
            
          },
          {
            path: "/contact",
            element: <Contact></Contact>,
            
          },
    ]
    },

  ]);