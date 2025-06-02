import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import store from "./features/store";

import Button from "./components/Button";
import Navbar from "./components/navbar";
import Table from "./components/Table";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      
    </Provider>


  );
}

export default App;
