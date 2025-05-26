import styled from 'styled-components';

export const SidebarRoot = styled.div`
  background-color: ${({ theme }) => theme.backgroundLayout};
  color: ${({ theme }) => theme.text};
  width: 247px;
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
  border-right: 1px solid ${({ theme }) => theme.divider};
`;

export const SiteLogoSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 24px 0 45px 0;
`;

export const NavSection = styled.ul`
  width: 100%;
  margin-bottom: 56px;
`;

export const Divider = styled.div`
  width: calc(100% + 32px);
  height: 1px;
  background-color: ${({ theme }) => theme.divider};
  border: none;
`;

export const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 40px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const UserSection = styled.ul`
  width: 100%;
  margin-top: 16px;
`;
