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

export const TitleBold = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.logoTitle};
`;

export const TitleSemiBold = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.logoTitle};
`;

export const ChartBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
