import { useState } from 'react'
import { LineChart, AreaChart, PieChart, ColumnChart, BarChart, ScatterChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { createLineChartData, createPieChartData, createScatterChartData } from '../../utils/chartUtils.ts'

function ReactChartkick() {
  const [lineChartData, setLineChartData] = useState<{ [key: string]: number }>(createLineChartData());
  const [areaChartData, setAreaChartData] = useState<{ [key: string]: number }>(createLineChartData());
  const [pieChartData, setPieChartData] = useState(createPieChartData());
  const [columnChartData, setColumnChartData] = useState(createPieChartData());
  const [barChartData, setBarChartData] = useState(createPieChartData());
  const [scatterChartData, setScatterChartData] = useState(createScatterChartData());

  const handleLineChartButtonClick = () => {
    setLineChartData(createLineChartData());
  };

  const handleAreaChartButtonClick = () => {
    setAreaChartData(createLineChartData());
  };

  const handlePieChartButtonClick = () => {
    setPieChartData(createPieChartData());
  };

  const handleColumnChartButtonClick = () => {
    setColumnChartData(createPieChartData());
  };

  const handleBarChartButtonClick = () => {
    setBarChartData(createPieChartData());
  };

  const handleScatterChartButtonClick = () => {
    setScatterChartData(createScatterChartData());
  };
  
  return (
    <>
      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Линейный график (Line chart)</h2>
          <button className='create-chart-button' onClick={handleLineChartButtonClick}>Создать</button>
        </div>
        <LineChart data={lineChartData} />
      </div>

      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Диаграмма площади (Area chart)</h2>
          <button className='create-chart-button' onClick={handleAreaChartButtonClick}>Создать</button>
        </div>
        <AreaChart data={areaChartData} />
      </div>

      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Круговая диаграмма (Pie chart)</h2>
          <button className='create-chart-button' onClick={handlePieChartButtonClick}>Создать</button>
        </div>
        <PieChart data={pieChartData} />
      </div>

      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Столбчатая диаграмма (Column chart)</h2>
          <button className='create-chart-button' onClick={handleColumnChartButtonClick}>Создать</button>
        </div>
        <ColumnChart data={columnChartData} />
      </div>

      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Гистограмма (Bar chart)</h2>
          <button className='create-chart-button' onClick={handleBarChartButtonClick}>Создать</button>
        </div>
        <BarChart data={barChartData} />
      </div>

      <div className='chart-container' style={{ float: 'left' }}>
        <div className='chart-header'>
          <h2 className='chart-title'>Точечная диаграмма (Scatter chart)</h2>
          <button className='create-chart-button' onClick={handleScatterChartButtonClick}>Создать</button>
        </div>
        <ScatterChart data={scatterChartData} />
      </div>

      <h1 className='h1' style={{ paddingTop: '50px' }}>Возможности библиотеки:</h1>
      <ul>
        <li>
          Передача значения в виде массива, объекта, колбека, useState, endpoint. Возможность установить интервал перезагрузки графика
        </li>
        <li>
          <div className='li-with-chart'>
            <div style={{ marginTop: '20px', marginRight: '30px' }}>Указание размера, осей, максимальных и минимальных значений, цветов</div>
            <LineChart data={barChartData} width="100px" height="100px" colors={["#b00", "#666"]} />
          </div>
        </li>
        <li>
          Подписи осей, графиков, сокрытие и показ легенды, изменение позиции легенды, отключение сглаживания линии графика
        </li>
        <li>
          <div className='li-with-chart'>
            <div style={{ marginTop: '35px', marginRight: '30px' }}>Добавление нескольких датасетов (не на всех графиках)</div>
            <LineChart 
              data={[{name: '1', data: pieChartData},{name: '2', data: barChartData}]} 
              legend={false} width="250px" height="100px" colors={["#b00", "#666"]} 
            />
            <ColumnChart 
              data={[{name: '1', data: pieChartData},{name: '2', data: barChartData}]} 
              legend={false} width="250px" height="100px" colors={["#b00", "#666"]} 
            />
            <BarChart 
              data={[{name: '1', data: pieChartData},{name: '2', data: barChartData}]} 
              legend={false} width="250px" height="100px" colors={["#b00", "#666"]} 
            />
            <AreaChart 
              data={[{name: '1', data: pieChartData},{name: '2', data: barChartData}]} 
              legend={false} width="250px" height="100px" colors={["#b00", "#666"]} 
            />
          </div>
        </li>
        <li>
          <div className='li-with-chart'>
            <div style={{ marginTop: '35px', marginRight: '30px' }}>Кастомизация круговой диаграммы (пончик)</div>
            <PieChart data={pieChartData} donut={true} legend={false} width="100px" height="100px" colors={["#b00", "#666"]} />
          </div>
        </li>
        <li>
          Суффиксы/префиксы у значений, округление, обрезка, другие фишки <i>Chart.js, Highcharts</i>
        </li>
        <li>
          <div className='li-with-chart'>
            <div style={{ marginTop: '35px', marginRight: '30px' }}>Надписи при отсутствии и загрузке данных</div>
            <LineChart empty="Тут ничего нет..." width="200px" height="100px" />
          </div>
        </li>
        <li>
          <div className='li-with-chart'>
            <div style={{ marginTop: '35px', marginRight: '30px' }}>Можно разрешить скаичивание графиков</div>
            <LineChart data={barChartData} download={true} width="300px" height="100px" />
          </div>
        </li>
        <li>
          Заявлена возможность "сложить" столбцы гистограммы или столбчатой диаграммы, но на деле это свойство не работает.
        </li>
        <li>
          Заявлена возможность передать свойства напрямую в Chart.js, чтобы изменить цвет фона (например). Не работает.
        </li>
      </ul>

      <h1 className='h1'>Информация:</h1>
      <ul>
        <li>Лицензия MIT License</li>
        <li><a href='https://github.com/ankane/react-chartkick?tab=readme-ov-file'>GitHub</a></li>
        <li><a href='https://chartkick.com/react'>Сайт + Документация</a></li>
        <li>Поддержка React, Vue, JS, Ruby, Python, Elixir, Clojure</li>
      </ul>

      <h1 className='h1'>Вывод:</h1>
      <p>
        Неплохая не перенасыщенная функционалом высокоуровневая библиотека, позволяет в одну строку создать простой график.
        Заявлена возможность более детальной кастомизации графиков путём передачи свойств напрямую в Chart.js,
        но пример из документации не работает.
      </p>
    </>
  )

}
  
export default ReactChartkick
  
