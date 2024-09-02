import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import HomeIcon from "components/ui/icons/Home";
import AboutPage from "pages/AboutPage";
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import { ABOUT_PATH, AUTH_PATH } from "utils/constants";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    handle: {
      crumb: () => (
        <Link to="/">
          <div className="flex items-baseline">
            <HomeIcon /> Home
          </div>
        </Link>
      ),
    },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ABOUT_PATH,
        element: <AboutPage />,
        handle: { crumb: () => <Link to="/about">About</Link> },
      },
      {
        path: AUTH_PATH,
        element: <AuthPage />,
        handle: { crumb: () => <Link to="/auth">Auth</Link> },
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
