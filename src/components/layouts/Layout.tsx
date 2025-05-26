import type { ReactNode } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import { ContentDiv, LayoutRoot, WrapperContent } from './styled';

interface layoutProps {
  children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <LayoutRoot>
      <Sidebar />
      <WrapperContent>
        <Header />
        <ContentDiv>
          <h1>Main-content</h1>
          {children}
        </ContentDiv>
      </WrapperContent>
    </LayoutRoot>
  );
};

export default Layout;
