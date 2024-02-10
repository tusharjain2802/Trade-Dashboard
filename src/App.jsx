import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Connect from './Connect'
import {useState} from 'react'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {
  const [login,setLogin] = useState(false);
  const [balance,setBalance] = useState(0);
  return (
    <>
      {login ? (
        <RouterProvider router={router} />
      ):(
        <Connect setLogin={setLogin} setBalance2={setBalance} />
      )}
    </>
  );
}

export default App;
