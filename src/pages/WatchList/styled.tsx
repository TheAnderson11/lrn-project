import styled from 'styled-components';

export const WrapperDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding: 32px;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 950px;
  flex-wrap: wrap;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const AverageBlock = styled.div`
  width: 422px;
  height: 185px;
  border-radius: 12px;
  margin-right: 33px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
`;

export const CustomerReturnBlock = styled.div`
  width: 422px;
  height: 185px;
  padding: 20px 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
`;

export const OrderBlock = styled.div`
  width: 875px;
  height: 271px;
  padding: 20px 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
`;

export const RecentInvoiceBlock = styled.div`
  width: 875px;
  height: 390px;
  padding: 20px 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
`;

export const SalesBlock = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 12px;
  padding: 20px 16px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
`;

export const TopProductBlock = styled.div`
  width: 100%;
  height: 645px;
  padding: 20px 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
`;

export const TitleBold = styled.h1<{ $textSize?: string; $fontWeight?: number }>`
  font-size: ${({ $textSize }) => $textSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ theme }) => theme.logoTitle};
`;

export const TitleSmall = styled.p<{ $textSize?: string; $fontWeight?: number }>`
  font-size: ${({ $textSize }) => $textSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ theme }) => theme.logoTitle};
`;

export const ChartBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 390px;
  height: 100px;
`;

export const ChartBlockTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChartBlockChange = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 8px;
`;

export const PriceChangeBlock = styled.div<{ $bckground: boolean }>`
  display: flex;
  align-items: center;
  width: 66px;
  height: 26px;
  padding: 4px 8px;
  background-color: ${({ $bckground }) => ($bckground ? '#A9FFA7' : '#FFA7A7')};
  color: black;
  border-radius: 4px;
`;

export const NumberChange = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: black;
`;
