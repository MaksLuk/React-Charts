import { AxisOptions, Chart } from "react-charts";
import React from "react";
import useDemoConfig from "../useDemoConfig";

function ReactCharts() {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      <p>
        <a href="https://react-charts.tanstack.com/examples/simple">На сайте</a> можно посмотреть примеры всех графиков.
        По факту библиотека не сама удобная: у них есть общий компонент <b>Chart</b>, в который передаётся огромный объект конфига.
        Даже в низкоуровневой react-chartjs-2, который является по-сути Chart.js для React, 
        для создания графика <b>не надо</b> создавать отдельный файл с объявлением конфига на 170+ строк.
        При этом если обернуть объект Chart в обычный div, то он сжимается до высоты в 1 пиксель (ширина на весь экран).
        Для "обёртки" графика надо создавать также отдельный компонент.
        Мне даже пришлось помещать этот текст наверх страницы, так как график по какой-то причине вступил с ним в сингулярность, 
        накладывался на текст и увеличивался соразмерно margin-top и padding-top. 
        <b>Вобщем тот же функционал (и даже больше) можно получить в других представленных здесь библиотеках гораздо проще.</b>
      </p>
      <h3>Чисто пример из их гита</h3>
      <button onClick={randomizeData}>Randomize Data</button>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />

    </>
  );

}
  
export default ReactCharts
  