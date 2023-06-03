import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    
  }
]);