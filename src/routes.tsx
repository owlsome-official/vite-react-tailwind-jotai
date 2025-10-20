import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomePage />,
        // or using> Component: App,
        // or using> lazy: () => import("./App"),
      },
      {
        path: "/about",
        Component: AboutPage,
      },
    ],
  },
]);

export default router;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     handle: {
//       crumb: () => (
//         <Link to="/">
//           <div className="flex items-baseline">
//             <HomeIcon /> Home
//           </div>
//         </Link>
//       ),
//     },
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: ABOUT_PATH,
//         element: <AboutPage />,
//         handle: { crumb: () => <Link to="/about">About</Link> },
//       },
//       {
//         path: AUTH_PATH,
//         element: <AuthPage />,
//         handle: { crumb: () => <Link to="/auth">Auth</Link> },
//       },
//     ],
//   },
//   { path: "*", element: <NotFoundPage /> },
// ]);
