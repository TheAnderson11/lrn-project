import price_down from '../../assets/trend-down.svg';
import price_up from '../../assets/trend-up.svg';
import { AreaChart } from '../../components/ui/AreaChart';
import LineChart from '../../components/ui/LineChart';
import { useAppSelector } from '../../store/hooks';
import {
  AverageBlock,
  ChartBlock,
  ChartBlockChange,
  ChartBlockTitle,
  CustomerReturnBlock,
  MainContainer,
  NumberChange,
  OrderBlock,
  PriceChangeBlock,
  RecentInvoiceBlock,
  RightPanel,
  SalesBlock,
  TitleBold,
  TitleSmall,
  TopProductBlock,
  WrapperDiv,
} from './styled';

const WatchList = () => {
  const { prices } = useAppSelector(state => state.coinGeckoSlice);

  const firstPrice = prices.length ? prices[0][1] : null; // цена открытия
  const lastPrice = prices.length ? prices[prices.length - 1][1] : null;

  let priceChangePercent = null;

  if (prices.length >= 2) {
    const first = prices[0][1];
    const last = prices[prices.length - 1][1];
    priceChangePercent = (((last - first) / first) * 100).toFixed(2);
  }
  const bckground = Number(priceChangePercent) > 0;
  return (
    <WrapperDiv>
      <MainContainer>
        <AverageBlock>
          <TitleBold $textSize="20px" $textWeight={600}>
            Average Revenue
          </TitleBold>
          <ChartBlock>
            <ChartBlockTitle>
              <TitleBold $textSize="32px" $textWeight={700}>
                ${firstPrice?.toFixed(2)}
              </TitleBold>
              <ChartBlockChange>
                {Number(priceChangePercent) > 0 ? (
                  <PriceChangeBlock $bckground={bckground}>
                    <img src={price_up} alt="price_up" style={{ paddingRight: '3px' }} />
                    <NumberChange>{priceChangePercent}%</NumberChange>
                  </PriceChangeBlock>
                ) : (
                  <PriceChangeBlock $bckground={bckground}>
                    <img src={price_down} alt="price_down" />
                    {priceChangePercent}
                  </PriceChangeBlock>
                )}

                <TitleSmall $textSize="14px" $textWeight={400}>
                  ${lastPrice?.toFixed(2)}
                </TitleSmall>
              </ChartBlockChange>
            </ChartBlockTitle>
            <AreaChart />
          </ChartBlock>
        </AverageBlock>

        <CustomerReturnBlock>
          <TitleSmall>Customer Return</TitleSmall>
          <ChartBlock>
            <AreaChart />
          </ChartBlock>
        </CustomerReturnBlock>

        <OrderBlock>
          <TitleSmall>Revenue vs Order</TitleSmall>
          <LineChart />
        </OrderBlock>

        <RecentInvoiceBlock>
          <TitleBold>Recent Invoice</TitleBold>
          <AreaChart />
        </RecentInvoiceBlock>
      </MainContainer>

      <RightPanel>
        <SalesBlock>
          <TitleBold>Sales by Category</TitleBold>

          <AreaChart />
        </SalesBlock>

        <TopProductBlock>
          <TitleBold>Top Products</TitleBold>

          <AreaChart />
        </TopProductBlock>
      </RightPanel>
    </WrapperDiv>
  );
};

export default WatchList;
