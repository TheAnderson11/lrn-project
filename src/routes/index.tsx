import { createBrowserRouter } from 'react-router';
import AppProviders from '../app/providers';
import LoginPage from '../pages/Auth/login';
import RegisterPage from '../pages/Auth/register';
import WatchList from '../pages/WatchList';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export const routes = createBrowserRouter([
  {
    element: <PrivateRouter />,
    children: [
      {
        element: <AppProviders />,
        children: [{ path: '/', element: <WatchList /> }],
      },
    ],
  },
  {
    element: <PublicRouter />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404 - Not Found</div>,
  },
]);
