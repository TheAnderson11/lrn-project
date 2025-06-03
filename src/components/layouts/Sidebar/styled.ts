import { NavLink } from 'react-router';
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

export const LogoTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.logoTitle};
`;

export const NavSection = styled.ul`
  width: 100%;
  margin-bottom: 56px;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  &.active {
    color: #ffffff;
    border-radius: 5px;
    background-color: #1900d5;
  }
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
  font-size: 16px;
  font-weight: 500;
`;

export const UserSection = styled.ul`
  width: 100%;
  margin-top: 16px;
`;
