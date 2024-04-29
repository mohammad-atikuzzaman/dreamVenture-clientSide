import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import ContextElement from "./contexts/ContextElement.jsx";
import Register from "./pages/Register.jsx";
import AddTouristSpot from "./pages/AddTouristSpot.jsx";
import MyList from "./pages/MyList.jsx";
import AllTouristSpot from "./pages/AllTouristSpot.jsx";
import ProtectedRoute from "./Protected/ProtectedRoute.jsx";
import Spot from "./pages/Spot.jsx";
import UpdateSpot from "./pages/UpdateSpot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtouristspot",
        element: (
          <ProtectedRoute>
            <AddTouristSpot></AddTouristSpot>
          </ProtectedRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <ProtectedRoute>
            <MyList></MyList>
          </ProtectedRoute>
        ),
      },
      {
        path: "/alltouristspot",
        element: <AllTouristSpot></AllTouristSpot>,
      },
      {
        path: "/spot/:id",
        element: (
          <ProtectedRoute>
            <Spot></Spot>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/spots/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <ProtectedRoute>
            <UpdateSpot></UpdateSpot>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextElement>
      <RouterProvider router={router} />
    </ContextElement>
  </React.StrictMode>
);
