import { useState } from 'react'
import { 
    createLineChartData2, 
    createPieChartData2, 
    createLineAndBarChartData, 
    createScatterChartData2, 
    createBubbleChartData 
} from '../../utils/chartUtils.ts'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineController,
  BarController
} from 'chart.js';
import { Line, Bar, Pie, Doughnut, Radar, Chart, Scatter, Bubble } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineController,
  BarController
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const barOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
};

const scatterOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
};

function ReactChartjs2() {
  const [lineChartData, setLineChartData] = useState(createLineChartData2());
  const [barChartData, setBarChartData] = useState(createLineChartData2());
  const [barChartData2, setBarChartData2] = useState(createLineChartData2());
  const [pieChartData, setPieChartData] = useState(createPieChartData2());
  const [doughnutChartData, setDoughnutChartData] = useState(createPieChartData2());
  const [radarChartData, setRadarChartData] = useState(createPieChartData2());
  const [lineAndBarChartData, setLineAndBarChartData] = useState(createLineAndBarChartData());
  const [scatterBarChartData, setScatterChartData] = useState(createScatterChartData2());
  const [bubbleBarChartData, setBubbleChartData] = useState(createBubbleChartData());

  const handleLineChartButtonClick = () => {
    setLineChartData(createLineChartData2());
  };

  const handleBarChartButtonClick = () => {
    setBarChartData(createLineChartData2());
  };

  const handleBarChart2ButtonClick = () => {
    setBarChartData2(createLineChartData2(4, 7));
  };

  const handlePieChartButtonClick = () => {
    setPieChartData(createPieChartData2());
  };

  const handleDoughnutChartButtonClick = () => {
    setDoughnutChartData(createPieChartData2());
  };

  const handleRadarChartButtonClick = () => {
    setRadarChartData(createPieChartData2(5, 10));
  };

  const handleLineAndBarChartButtonClick = () => {
    setLineAndBarChartData(createLineAndBarChartData());
  };

  const handleScatterChartButtonClick = () => {
    setScatterChartData(createScatterChartData2());
  };

  const handleBubbleChartButtonClick = () => {
    setBubbleChartData(createBubbleChartData());
  };

  return (
    <>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Линейный график (Line chart)</h2>
          <button className='create-chart-button' onClick={handleLineChartButtonClick}>Создать</button>
        </div>
        <Line options={options} data={lineChartData} />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Гистограмма (Bar chart)</h2>
          <button className='create-chart-button' onClick={handleBarChartButtonClick}>Создать</button>
        </div>
        <Bar options={options} data={barChartData} />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Гистограмма 2</h2>
          <button className='create-chart-button' onClick={handleBarChart2ButtonClick}>Создать</button>
        </div>
        <Bar options={barOptions} data={barChartData2} />
      </div>

      <div className='chart-container' style={{ clear: 'both', float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Круговая диаграмма (Pie chart)</h2>
          <button className='create-chart-button' onClick={handlePieChartButtonClick}>Создать</button>
        </div>
        <Pie options={options} data={pieChartData} />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>"Бублик" (Doughnut)</h2>
          <button className='create-chart-button' onClick={handleDoughnutChartButtonClick}>Создать</button>
        </div>
        <Doughnut options={options} data={doughnutChartData} />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Radar</h2>
          <button className='create-chart-button' onClick={handleRadarChartButtonClick}>Создать</button>
        </div>
        <Radar options={options} data={radarChartData} />
      </div>

      <div className='chart-container' style={{ clear: 'both', float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Точечная диаграмма (Scatter chart)</h2>
          <button className='create-chart-button' onClick={handleScatterChartButtonClick}>Создать</button>
        </div>
        <Scatter options={scatterOptions} data={scatterBarChartData} />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Пузырьковая диаграмма (Bubble chart)</h2>
          <button className='create-chart-button' onClick={handleBubbleChartButtonClick}>Создать</button>
        </div>
        <Bubble options={scatterOptions} data={bubbleBarChartData} />
      </div>

      <div className='chart-container' style={{ clear: 'both', float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Совмещение двух видов графиков</h2>
          <button className='create-chart-button' onClick={handleLineAndBarChartButtonClick}>Создать</button>
        </div>
        <Chart type='bar' options={options} data={lineAndBarChartData} />
      </div>

      <h1 className='h1' style={{ paddingTop: '50px' }}>Возможности библиотеки:</h1>
      <ul>
        <li>
          Широкий выбор графиков
        </li>
        <li>
          Много изменяемых свойств, можно править практически любое свойство
        </li>
        <li>
            Возможность устанавливать обработчики событий
        </li>
        <li>
            По умолчанию встроена анимация графиков
        </li>
      </ul>

      <h1 className='h1'>Информация:</h1>
      <ul>
        <li>Лицензия MIT Licensed</li>
        <li><a href='https://github.com/reactchartjs/react-chartjs-2?tab=readme-ov-file'>GitHub</a></li>
        <li>Официальный сайт отключен и не работает</li>
        <li><a href='https://codesandbox.io/examples/package/react-chartjs-2'>Примеры работы с библиотекой</a></li>
      </ul>

      <h1 className='h1'>Вывод:</h1>
      <p>
        Низкоуровневая библиотека, поддерживает большую вариативность и много видов графиков, которые можно совмещать друг с другом.
        Создание графика более громоздко, чем в других библиотеках (ну оно и понятно).
      </p>
    </>
  ) 
}

export default ReactChartjs2
