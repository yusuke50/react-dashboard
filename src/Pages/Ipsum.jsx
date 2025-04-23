import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const dataPoints = [65, 59, 80, 81, 56];

const lineData = {
  labels,
  datasets: [
    {
      label: 'Line Chart',
      data: dataPoints,
      borderColor: '#6366f1',
      backgroundColor: '#6366f1',
    },
  ],
};

const areaData = {
  labels,
  datasets: [
    {
      label: 'Area Chart',
      data: dataPoints,
      fill: true,
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
    },
  ],
};

const barData = {
  labels,
  datasets: [
    {
      label: 'Bar Chart',
      data: dataPoints,
      backgroundColor: '#f59e0b',
    },
  ],
};

const gaugeData = {
  labels: ['Progress', 'Remaining'],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['#22c55e', '#e5e7eb'],
      borderWidth: 0,
    },
  ],
};

const gaugeOptions = {
  rotation: -90,
  circumference: 180,
  cutout: '70%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
};

const Ipsum = () => {
  return (
    <>
      <h1>Ipsum</h1>
      <div className='p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6'>
        <div className='card bg-base-100 shadow'>
          <div className='card-body'>
            <h2 className='card-title'>Line Chart</h2>
            <Line data={lineData} />
          </div>
        </div>

        <div className='card bg-base-100 shadow'>
          <div className='card-body'>
            <h2 className='card-title'>Area Chart</h2>
            <Line data={areaData} />
          </div>
        </div>

        <div className='card bg-base-100 shadow'>
          <div className='card-body'>
            <h2 className='card-title'>Bar Chart</h2>
            <Bar data={barData} />
          </div>
        </div>

        <div className='card bg-base-100 shadow items-center'>
          <div className='card-body'>
            <h2 className='card-title'>Gauge Chart</h2>
            <div className='w-48 mx-auto'>
              <Doughnut data={gaugeData} options={gaugeOptions} />
            </div>
            <p className='text-center mt-2 text-xl font-bold text-success'>
              70%
            </p>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Ipsum;
