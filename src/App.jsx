import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import store from "./features/store";
import Button from "./components/Button";
import Navbar from "./components/navbar";
import Table from "./components/Table";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [],
    },
  ]);

  return (
    // <Provider store={store}>
    //   <RouterProvider router={router}></RouterProvider>
      
    // </Provider>
    <>
      <Navbar />
  <div className="container mx-auto p-15 space-x-6">
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="success">Success Button</Button>
    <Button variant="warning">Warning Button</Button>
    <Button variant="info">Info Button</Button>
      </div>
      <Table
        headers={["Amount", "Item", "Price", "Total"]}
        data={[
          [2, "Foul", 6, "12$"],
          [1, "Ta3meya", 10, "10$"],
          [3, "Eggs", 5, "15$"],
          [1, "Cheese", 12, "12$"],
        ]}
      />
    </>
  );
}

export default App;
