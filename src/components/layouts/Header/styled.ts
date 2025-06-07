import styled from 'styled-components';

export const HeaderRoot = styled.div`
  width: 100%;
  height: 88px;
  background-color: ${({ theme }) => theme.backgroundLayout};
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.divider};
`;

export const HeaderLogBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 32px;
`;

export const SiteLogoBlock = styled.div<{ $activeMenuBar: boolean }>`
  display: ${({ $activeMenuBar }) => ($activeMenuBar ? 'none' : 'flex')};
  align-items: center;
  margin-right: 25px;
`;

export const HeaderWelcome = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-right: 25px;
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;

export const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: ${({ theme }) => theme.divider};
  margin: 0 28px;
  align-self: center;
`;

export const SearchDiv = styled.div`
  position: relative;
  margin-right: 48px;
  cursor: pointer;
`;
