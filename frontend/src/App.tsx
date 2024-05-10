import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/common/ErrorPage/ErrorPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { routes } from "./lib/constants";
import Layout from "./components/common/Layout/Layout";
import ParticlesBackground from "./ParticlesBackground";
import { useAppSelector } from "./app/hooks";

const App = () => {
  const logged_in = useAppSelector((state) => state.auth.logged_in);

  let router: RouteObject[] = [
    {
      path: routes.home,
      element: <Layout />,
      children: [
        {
          index: true,
          element: logged_in ? <Home /> : <Navigate to={routes.login} />,
        },
        {
          path: routes.login,
          element: logged_in ? <Navigate to={routes.home} /> : <Login />,
        },
        {
          path: routes.signup,
          element: logged_in ? <Navigate to={routes.home} /> : <Signup />,
        },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ];

  let element = useRoutes(router);

  return (
    <div>
      <ParticlesBackground />
      <div className="app-wrapper">{element}</div>
    </div>
  );
};

export default App;
