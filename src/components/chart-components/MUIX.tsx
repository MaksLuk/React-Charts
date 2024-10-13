import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { createLineChartData3, createPieChartData3, createScatterChartData3 } from '../../utils/chartUtils.ts'

import img1 from '/img.png'

function MUIX() {
  const [lineChartData, setLineChartData] = useState(createLineChartData3());
  const [areaChartData, setAreaChartData] = useState(createLineChartData3());
  const [barChartData, setBarChartData] = useState(createLineChartData3());
  const [barChartData2, setBarChartData2] = useState(createLineChartData3());
  const [barChartData3, setBarChartData3] = useState(createLineChartData3());
  const [pieChartData, setPieChartData] = useState(createPieChartData3());
  const [pieChartData2, setPieChartData2] = useState(createPieChartData3());
  const [pieChartData3, setPieChartData3] = useState([createPieChartData3(),createPieChartData3()]);
  const [scatterChartData, setScatterChartData] = useState([createScatterChartData3(),createScatterChartData3()]);

  const handleLineChartButtonClick = () => {
    setLineChartData(createLineChartData3());
  };

  const handleAreaChartButtonClick = () => {
    setAreaChartData(createLineChartData3());
  };

  const handleBarChartButtonClick = () => {
    setBarChartData(createLineChartData3());
  };

  const handleBarChartButtonClick2 = () => {
    setBarChartData2(createLineChartData3());
  };

  const handleBarChartButtonClick3 = () => {
    setBarChartData3(createLineChartData3());
  };

  const handlePieChartButtonClick = () => {
    setPieChartData(createPieChartData3());
  };

  const handlePieChartButtonClick2 = () => {
    setPieChartData2(createPieChartData3());
  };

  const handlePieChartButtonClick3 = () => {
    setPieChartData3([createPieChartData3(),createPieChartData3()]);
  };

  const handleScatterChartButtonClick3 = () => {
    setScatterChartData([createScatterChartData3(),createScatterChartData3()]);
  };
  
  return (
    <>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Линейный график (Line chart)</h2>
          <button className='create-chart-button' onClick={handleLineChartButtonClick}>Создать</button>
        </div>
        <LineChart
            xAxis={[{ data: lineChartData[0] }]}
            series={[{data: lineChartData[1],},]}
            width={500}
            height={300}
        />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Диаграмма площади (Area chart - тот же Line)</h2>
          <button className='create-chart-button' onClick={handleAreaChartButtonClick}>Создать</button>
        </div>
        <LineChart
            xAxis={[{ data: areaChartData[0] }]}
            series={[
                { data: areaChartData[1], area: true },
                { data: areaChartData[2], area: true },
            ]}
            width={500}
            height={300}
        />
      </div>

      <div className='chart-container' style={{ clear: 'both', float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Гистограмма (Bar chart)</h2>
          <button className='create-chart-button' onClick={handleBarChartButtonClick}>Создать</button>
        </div>
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: barChartData[0] }, { data: barChartData[1] }, { data: barChartData[2] }]}
            width={500}
            height={300}
        />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Гистограмма 2</h2>
          <button className='create-chart-button' onClick={handleBarChartButtonClick2}>Создать</button>
        </div>
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[
                { data: barChartData2[0], stack: 'stack1' }, 
                { data: barChartData2[1], stack: 'stack2' }, 
                { data: barChartData2[2], stack: 'stack1' }
            ]}
            width={500}
            height={300}
        />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Гистограмма 3</h2>
          <button className='create-chart-button' onClick={handleBarChartButtonClick3}>Создать</button>
        </div>
        <BarChart
            yAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: barChartData3[0] }, { data: barChartData3[1] }, { data: barChartData3[2] }]}
            layout='horizontal'
            width={500}
            height={300}
        />
      </div>

      <div className='chart-container' style={{ clear: 'both', float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Круговая диаграмма (Pie chart)</h2>
          <button className='create-chart-button' onClick={handlePieChartButtonClick}>Создать</button>
        </div>
        <PieChart
            series={[{ data: pieChartData },]}
            width={500}
            height={300}
        />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Круговая диаграмма 2</h2>
          <button className='create-chart-button' onClick={handlePieChartButtonClick2}>Создать</button>
        </div>
        <PieChart
            series={[
                {
                    data: pieChartData2,
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -45,
                    endAngle: 225,
                    cx: 150,
                    cy: 150,
                }
            ]}
            width={500}
            height={300}
        />
      </div>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Круговая диаграмма 3</h2>
          <button className='create-chart-button' onClick={handlePieChartButtonClick3}>Создать</button>
        </div>
        <PieChart
            series={[
                {
                  innerRadius: 0,
                  outerRadius: 80,
                  id: 'platform-series',
                  data: pieChartData3[0],
                },
                {
                  innerRadius: 100,
                  outerRadius: 120,
                  id: 'OS-series',
                  data: pieChartData3[1],
                },
            ]}
            width={500}
            height={300}
        />
        <p>* Тут надо много данных создать для красоты и работоспособности, просто показал сам факт существования подобных графиков</p>
      </div>

      <div className='chart-container' style={{ clear: 'both', float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Точечная диаграмма (Scatter chart)</h2>
          <button className='create-chart-button' onClick={handleScatterChartButtonClick3}>Создать</button>
        </div>
        <ScatterChart
            series={[
                {
                  label: 'Series A',
                  data: scatterChartData[0],
                },
                {
                  label: 'Series B',
                  data: scatterChartData[1],
                },
              ]}
            width={500}
            height={300}
        />
      </div>

      <h1 className='h1' style={{ paddingTop: '50px' }}>Возможности библиотеки:</h1>
      <ul>
        <li>
          Много возможностей для кастомизации практически всех свойств и элементов графика
        </li>
        <li>
          Возможность задавать обработчики событий
        </li>
        <li>
          Можно создавать довольно сложные диаграммы из больших наборов датасетов
        </li>
        <li>
          Встроенная анимация
        </li>
        <li>
          Все возможности (их много) описаны в документации
        </li>
        <li>
          <div>Но нам видимо не подойдёт</div> <img src={img1} />
        </li>
      </ul>

      <h1 className='h1'>Информация:</h1>
      <ul>
        <li>Лицензия MIT License</li>
        <li><a href='https://github.com/mui/mui-x'>GitHub</a></li>
        <li><a href='https://mui.com'>Сайт + Документация</a></li>
      </ul>

      <h1 className='h1'>Вывод:</h1>
      <p>
        Удобная библиотека, можно как в несколько строк создавать базовые графики, так и делать более сложные диаграммы. 
      </p>
    </>
  )

}
  
export default MUIX
