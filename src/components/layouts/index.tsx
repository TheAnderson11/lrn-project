import type { ReactNode } from 'react';
import SiteLogo from '../../assets/logo.svg';
import styles from './styles.module.css';

interface layoutProps {
  children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.sideBar}>
        <ul>
          <li>
            <img src={SiteLogo} alt="logosite" />
          </li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
