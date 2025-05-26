import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layouts/Layout';
import type { RootState } from '../store/store';
import { darkTheme, lightTheme } from '../styles/theme';

const AppProviders = () => {
  const mode = useSelector((state: RootState) => state.themeSwitcher.mode);
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
};

export default AppProviders;
