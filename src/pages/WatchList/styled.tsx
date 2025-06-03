import styled from 'styled-components';

export const WrapperDiv = styled.div`
  display: grid;
  grid-template-columns: 421.5px 421.5px;
  grid-auto-rows: 185px;
  gap: 32px;
  max-width: 875px;
  box-sizing: border-box;
`;

export const ChartSmall = styled.div`
  width: 421.5px;
  height: 185px;
  background-color: #3c3c3c;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px 16px;
`;

export const ChartMainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChartMedia = styled.div`
  width: 875px;
  height: 271px;
  background-color: #3c3c3c;
  border-radius: 8px;
  overflow: hidden;
  grid-column: span 2;
`;
