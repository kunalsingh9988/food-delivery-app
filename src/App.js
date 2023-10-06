import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Login from "./pages/Login/Login";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path:'/products',
      element:<Products/>
    },
    {
      path:'/singleproduct/:id',
      element:<SingleProduct/>
    },
    {
      path: "*",
      element: <h1 style={{ color: "red" }}>404.This Page was not found</h1>,
    },
  ]);

  return (
    <div className="app">
    
      <RouterProvider router={router} />

    </div>
  );
};

export default App;
