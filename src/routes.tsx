import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import About from './pages/About/About';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,

  },
  {
    path: "/sobre",
    element: <About />
  },
]);

export default router