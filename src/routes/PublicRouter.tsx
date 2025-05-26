import { Navigate, Outlet } from 'react-router';

const PublicRouter = () => {
  const user = true;
  return !user ? <Outlet /> : <Navigate to="/watchlist" />;
};

export default PublicRouter;
