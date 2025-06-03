import { useState } from 'react';
import { AreaChart } from '../../components/ui/AreaChart';
import { ChartMainContent, ChartMedia, ChartSmall, WrapperDiv } from './styled';

const WatchList = () => {
  const [price, setPrice] = useState<string>('');
  return (
    <WrapperDiv>
      <ChartSmall>
        <h1>Watchlist</h1>
        <ChartMainContent>
          <h3>$ {price ? price : 'Loading...'}</h3>
          <AreaChart onPriceUpdate={setPrice} width={127.5} height={80} />
        </ChartMainContent>
      </ChartSmall>
      <ChartSmall>
        <h1>Watchlist</h1>
        <ChartMainContent>
          <h3>$ {price ? price : 'Loading...'}</h3>
          <AreaChart onPriceUpdate={setPrice} width={127.5} height={80} />
        </ChartMainContent>
      </ChartSmall>
      <ChartMedia>
        <h1>Watchlist</h1>
        <h3>Price: {price ? price : 'Loading...'}</h3>
        <AreaChart onPriceUpdate={setPrice} width={843} height={189} />
      </ChartMedia>
    </WrapperDiv>
  );
};

export default WatchList;
