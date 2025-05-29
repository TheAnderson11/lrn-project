import { createBrowserRouter } from 'react-router';
import AppProviders from '../app/providers';
import LoginPage from '../pages/Auth/login';
import RegisterPage from '../pages/Auth/register';
import News from '../pages/News';
import Selected from '../pages/Selected';
import Settings from '../pages/Settings';
import WatchList from '../pages/WatchList';
import PrivateRouter from './PrivateRouter';

export const routes = createBrowserRouter([
  {
    element: <PrivateRouter />,
    children: [
      {
        element: <AppProviders />,
        children: [
          { path: '/', element: <WatchList /> },
          { path: '/selected', element: <Selected /> },
          { path: '/news', element: <News /> },
          { path: '/settings', element: <Settings /> },
        ],
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
  {
    path: '*',
    element: <div>404 - Not Found</div>,
  },
]);
