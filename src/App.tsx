import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
