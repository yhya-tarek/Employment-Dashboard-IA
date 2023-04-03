import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./Components/Admin/Dashboard";
import { Homepage } from "./Components/Homepage";
import { Loginpage } from "./Components/Loginpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/Admin",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
]);
