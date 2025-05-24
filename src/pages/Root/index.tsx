import { Outlet } from 'react-router';
import Layout from '../../components/layouts';

const Root = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Root;
