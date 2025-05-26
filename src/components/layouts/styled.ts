import styled from 'styled-components';

export const LayoutRoot = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
`;

export const ContentDiv = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.backgroundMain};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  overflow: auto;
`;
