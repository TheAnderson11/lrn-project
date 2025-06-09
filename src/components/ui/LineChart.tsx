import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
  type ChartOptions,
  type TooltipItem,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
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
  Title,
  Tooltip,
  TimeScale,
  Legend,
);
const LineChart = () => {
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
  }, [data, isSuccess, dispatch]);
  if (isLoading) return <Loader textValue="Loading..." textColor="red" />;
  if (isError || !data) return <div>Ошибка</div>;

  const oneDayInMs = 24 * 60 * 60 * 1000;
  const filteredPrices: [number, number][] = [];

  let lastTimestamp = 0;

  for (const [timestamp, price] of data.prices) {
    if (timestamp - lastTimestamp >= oneDayInMs) {
      filteredPrices.push([timestamp, price]);
      lastTimestamp = timestamp;
    }
  }

  const labels = filteredPrices.map(([timestamp]) => new Date(timestamp));

  const priceData = filteredPrices.map(([, price]) => price);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Price (USD)',
        data: priceData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bitcoin Price (USD)',
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems: TooltipItem<'line'>[]) => {
            const date = new Date(tooltipItems[0].parsed.x as number);
            return new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(date);
          },
        },
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMMM',
          },
        },
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price in USD',
        },
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default LineChart;
