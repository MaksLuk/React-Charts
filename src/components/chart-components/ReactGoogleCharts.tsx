import { Chart } from 'react-google-charts'
import { createLineChartData4, createAreaChartData, createPieChartData4 } from '../../utils/chartUtils.ts'
import { useState } from 'react'

const lineOptions = {
  title: 'Line Chart Example',
  hAxis: { title: 'Time' },
  vAxis: { title: 'Popularity' },
  legend: 'none',
  animation: {
    duration: 1000,
    easing: "out",
  }
};

const areaOptions = {
  title: 'Area Chart Example',
  hAxis: { title: 'Title' },
  vAxis: { minValue: 0 },
  chartArea: { width: '70%', height: '80%' },
  animation: {
    duration: 1000,
    easing: "out",
  }
};

const columnOptions = {
  title: 'Column Chart Example',
  animation: {
    duration: 1000,
    easing: "out",
  }
};

const pieOptions = {
  title: 'Pie Chart Example',
  is3D: true,
};

const histogramOptions = {
  title: 'Histogram Chart Example',
  animation: {
    duration: 1000,
    easing: "out",
  }
};

const scatterOptions = {
  title: 'Scatter Chart Example',
  curveType: 'function',
  legend: { position: 'bottom' },
  animation: {
    duration: 1000,
    easing: "out",
  }
};

function ReactGoogleCharts() {
    const [lineChartData, setLineChartData] = useState(createLineChartData4())
    const [areaChartData, setAreaChartData] = useState(createAreaChartData())
    const [columnChartData, setColumnChartData] = useState(createPieChartData4())
    const [pieChartData, setPieChartData] = useState(createPieChartData4())
    const [histogramChartData, setHistogramChartData] = useState(createLineChartData4())
    const [scatterChartData, setScatterChartData] = useState(createAreaChartData())

    const handleLineChartButtonClick = () => {
      setLineChartData(createLineChartData4());
    };

    const handleAreaChartButtonClick = () => {
      setAreaChartData(createAreaChartData());
    };

    const handleColumnChartButtonClick = () => {
      setColumnChartData(createPieChartData4());
    };

    const handlePieChartButtonClick = () => {
      setPieChartData(createPieChartData4());
    };

    const handleHistogramChartButtonClick = () => {
      setHistogramChartData(createLineChartData4());
    };

    const handleScatterChartButtonClick = () => {
      setScatterChartData(createAreaChartData());
    };

    return (
        <>
          <div className='chart-container' style={{ float: 'left' }}>
            <div className='chart-header'>
              <h2 className='chart-title'>Линейный график (Line chart)</h2>
              <button className='create-chart-button' onClick={handleLineChartButtonClick}>Создать</button>
            </div>
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={lineChartData}
              options={lineOptions}
            />
          </div>

          <div className='chart-container' style={{ float: 'left' }}>
            <div className='chart-header'>
              <h2 className='chart-title'>Диаграмма площади (Area chart)</h2>
              <button className='create-chart-button' onClick={handleAreaChartButtonClick}>Создать</button>
            </div>
            <Chart
              chartType="AreaChart"
              width="100%"
              height="400px"
              data={areaChartData}
              options={areaOptions}
            />
          </div>

          <div className='chart-container' style={{ clear: 'both', float: 'left' }}>
            <div className='chart-header'>
              <h2 className='chart-title'>Гистограмма (Column chart)</h2>
              <button className='create-chart-button' onClick={handleColumnChartButtonClick}>Создать</button>
            </div>
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={columnChartData}
              options={columnOptions}
            />
          </div>

          <div className='chart-container' style={{ float: 'left' }}>
            <div className='chart-header'>
              <h2 className='chart-title'>Гистограмма 2 (Histogram)</h2>
              <button className='create-chart-button' onClick={handleHistogramChartButtonClick}>Создать</button>
            </div>
            <Chart
              chartType="Histogram"
              width="100%"
              height="400px"
              data={histogramChartData}
              options={histogramOptions}
            />
          </div>

          <div className='chart-container' style={{ clear: 'both', float: 'left' }}>
            <div className='chart-header'>
              <h2 className='chart-title'>Круговая диаграмма (Pie chart)</h2>
              <button className='create-chart-button' onClick={handlePieChartButtonClick}>Создать</button>
            </div>
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={pieChartData}
              options={pieOptions}
            />
          </div>

          <div className='chart-container' style={{ float: 'left' }}>
            <div className='chart-header'>
              <h2 className='chart-title'>Точечная диаграмма (Scatter chart)</h2>
              <button className='create-chart-button' onClick={handleScatterChartButtonClick}>Создать</button>
            </div>
            <Chart
              chartType="ScatterChart"
              width="100%"
              height="400px"
              data={scatterChartData}
              options={scatterOptions}
            />
          </div>
    
          <h1 className='h1' style={{ paddingTop: '50px' }}>Возможности библиотеки:</h1>
          <ul>
            <li>
              Все виды графиков создаются на основе одного компонента
            </li>
            <li>
              Много разных графиков, по документации 25 видов
            </li>
            <li>
              Широкие возможности для кастомизации графиков
            </li>
            <li>
              Простой график можно создать в одну строку, без сложностей
            </li>
            <li>
              Анимаций по умолчанию нет, но можно настраивать
            </li>
            <li>
              Сайт с документаций есть, но очень лагающий
            </li>
          </ul>
    
          <h1 className='h1'>Информация:</h1>
          <ul>
            <li>Лицензия MIT License</li>
            <li><a href='https://github.com/RakanNimer/react-google-charts'>GitHub</a></li>
            <li><a href='https://www.react-google-charts.com'>Сайт + Документация</a></li>
          </ul>
    
          <h1 className='h1'>Вывод:</h1>
          <p>
            Хорошая удобная библиотека, есть возможности для создания как простых, так и более сложных графиков.
          </p>
        </>
      )
}

export default ReactGoogleCharts;
