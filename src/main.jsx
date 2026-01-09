import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import BookDetails from "./components/BookDetails.jsx";
import AddBook from "./components/AddBook.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import bookStore from "./utils/bookStore.js";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <BrowseBooks />,
      },
      {
        path: "/books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={bookStore}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
