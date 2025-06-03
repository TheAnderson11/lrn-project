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
  type ScriptableContext,
} from 'chart.js';
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useGetCoinHistoryQuery } from '../../store/api/coingecko';

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
interface CoinChartProps {
  onPriceUpdate: (price: string) => void;
  width: number;
  height: number;
}

export const AreaChart = ({ onPriceUpdate, width, height }: CoinChartProps) => {
  const { data, isLoading, isError } = useGetCoinHistoryQuery({
    coinId: 'bitcoin',
    currency: 'usd',
    days: '7',
  });
  useEffect(() => {
    if (data && data.prices.length > 0) {
      const lastPrice = data.prices[data.prices.length - 1][1];
      const formattedPrice = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 5,
      }).format(lastPrice);
      onPriceUpdate(formattedPrice);
    }
  }, [data, onPriceUpdate]);

  if (isLoading) return <div>Загрузка...</div>;
  if (isError || !data) return <div>Ошибка</div>;

  const labels = data.prices.map((p: [number, number]) => {
    const date = new Date(p[0]);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  });

  const priceData = data.prices.map((p: [number, number]) => p[1]);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'BTC/USD',
        data: priceData,
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          // chartArea ещё может быть undefined на первом рендере
          if (!chartArea) return 'rgba(75,192,192,0.2)';

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, '#C1EF00'); // верх
          gradient.addColorStop(1, '#232323'); // низ
          return gradient;
        },
        fill: true,
      },
    ],
  };

  const minPrice = Math.min(...priceData);
  const maxPrice = Math.max(...priceData);

  const padding = (maxPrice - minPrice) * 0.1;

  const options = {
    responsive: false,
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
    <Line
      data={chartData}
      options={{
        ...options,
        responsive: false,
        maintainAspectRatio: false,
      }}
      width={width}
      height={height}
    />
  );
};
