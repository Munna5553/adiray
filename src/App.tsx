import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
const Products = lazy(() => import("./pages/products/Products"))
const Enquiry = lazy(() => import("./pages/Home/Enquiry"));
const Signup = lazy(() => import("./pages/Home/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Layout = lazy(() => import("./pages/Home/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Chatbot = lazy(() => import("./pages/AI chatbot/Chatbot"));
const Catogary1 = lazy(() => import("./pages/products/catogeries/Category1"));
const Catogary2 = lazy(() => import("./pages/products/catogeries/Category2"));
const Catogary3 = lazy(() => import("./pages/products/catogeries/Category3"));
const Catogary4 = lazy(() => import("./pages/products/catogeries/Category4"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Home/Blog"));


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "sign-up",
          element: <Signup />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "enquiry",
          element: <Enquiry />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/catogery1",
          element: <Catogary1 />
        },
        {
          path: "products/catogery2",
          element: <Catogary2 />
        },
        {
          path: "products/catogery3",
          element: <Catogary3 />
        },
        {
          path: "products/catogery4",
          element: <Catogary4 />
        },
      ]
    },
    {
      path: "/chatbot",
      element: <Chatbot />,
      children: [
      ]
    }
  ])

  return (
    <Suspense fallback={"loading.."}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App;