import { createBrowserRouter } from 'react-router';
import LoginPage from '../pages/Auth/login';
import RegisterPage from '../pages/Auth/register';
import Root from '../pages/Root';
import WatchList from '../pages/WatchList';
import PrivateRouter from './PrivateRouter';

export const routes = createBrowserRouter([
  {
    element: <PrivateRouter />,
    children: [
      {
        path: '/',
        element: <Root />,
        children: [{ path: 'watchlist', element: <WatchList /> }],
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);
