import { AreaChart } from '../../components/ui/AreaChart';
import { useAppSelector } from '../../store/hooks';
import { formatCurrency } from '../../utils/formatCurrency';
import {
  AverageBlock,
  ChartBlock,
  CustomerReturnBlock,
  MainContainer,
  OrderBlock,
  RecentInvoiceBlock,
  RightPanel,
  SalesBlock,
  TitleBold,
  TitleSemiBold,
  TopProductBlock,
  WrapperDiv,
} from './styled';

const WatchList = () => {
  const { prices } = useAppSelector(state => state.coinGeckoSlice);
  const lastPrice = prices.length ? prices[prices.length - 1][1] : null;
  const formattedPrice = lastPrice ? formatCurrency(lastPrice, 'USD') : 'Loading...';
  return (
    <WrapperDiv>
      <MainContainer>
        <AverageBlock>
          <TitleSemiBold>Average Revenue</TitleSemiBold>
          <ChartBlock>
            <TitleBold>{formattedPrice}</TitleBold>
            <AreaChart />
          </ChartBlock>
        </AverageBlock>

        <CustomerReturnBlock>
          <TitleSemiBold>Customer Return</TitleSemiBold>
          <ChartBlock>
            <TitleBold>{formattedPrice}</TitleBold>
            <AreaChart />
          </ChartBlock>
        </CustomerReturnBlock>

        <OrderBlock>
          <TitleSemiBold>Revenue vs Order</TitleSemiBold>
          <h3>{formattedPrice}</h3>
          <AreaChart />
        </OrderBlock>

        <RecentInvoiceBlock>
          <TitleBold>Recent Invoice</TitleBold>
          <h3>{formattedPrice}</h3>
          <AreaChart />
        </RecentInvoiceBlock>
      </MainContainer>

      <RightPanel>
        <SalesBlock>
          <TitleBold>Sales by Category</TitleBold>
          <h3>{formattedPrice}</h3>
          <AreaChart />
        </SalesBlock>

        <TopProductBlock>
          <TitleBold>Top Products</TitleBold>
          <h3>{formattedPrice}</h3>
          <AreaChart />
        </TopProductBlock>
      </RightPanel>
    </WrapperDiv>
  );
};

export default WatchList;
