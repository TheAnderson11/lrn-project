import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useGetCoinHistoryQuery } from '../../store/api/coinGeckoApi';
import { useAppDispatch } from '../../store/hooks';

import { setCoinGecko } from '../../store/slices/coinGeckoSlice';
import Loader from './Loading';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
  Title,
);

export const AreaChart = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, isSuccess } = useGetCoinHistoryQuery({
    coinId: 'bitcoin',
    currency: 'usd',
    days: '90',
  });
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(
        setCoinGecko({
          prices: data.prices,
          market_caps: data.market_caps,
          total_volumes: data.total_volumes,
        }),
      );
    }
  }, [data, isSuccess, useAppDispatch]);

  if (isLoading) return <Loader textValue="Loading..." textColor="red" />;
  if (isError || !data) return <div>Ошибка</div>;

  const prices = data.prices;

  const oneDayInMs = 24 * 60 * 60 * 1000;
  const filteredPrices: [number, number][] = [];

  let lastTimestamp = 0;

  for (const [timestamp, price] of prices) {
    if (timestamp - lastTimestamp >= oneDayInMs) {
      filteredPrices.push([timestamp, price]);
      lastTimestamp = timestamp;
    }
  }

  const labels = filteredPrices.map(([timestamp]) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}`;
  });

  const priceData = filteredPrices.map(([, price]) => price);

  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'BTC/USD',
        data: priceData,
        borderColor: '#232323',
        backgroundColor: '#C1EF00',
      },
    ],
  };

  const minPrice = Math.min(...priceData);
  const maxPrice = Math.max(...priceData);

  const padding = (maxPrice - minPrice) * 0.1;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        min: minPrice - padding,
        max: maxPrice + padding,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '145px', height: '111px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};
