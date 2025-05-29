import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import type { RootState } from '../store/store';

const PrivateRouter = () => {
  const accessToken = useSelector((state: RootState) => state.userSlice.token);

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
