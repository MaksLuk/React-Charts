function Conclusion() {
  
  return (
    <>
      <p>
        Краткая сводка по каждой из рассмотренных библиотек:
      </p>
      <ul>
        <li>
          <b>react-chartkick</b> - высокоуровнения не перенасыщенная функционалом библиотека,
          можно создавать простые графики, приятно работать. есть возможности для кастомизации, но не широкие.
        </li>
        <li>
          <b>react-chartjs-2</b> - более Низкоуровневая библиотека, имеет широкие возможности для кастомизации графиков.
        </li>
        <li>
          <b>@mui/x-charts, react-google-charts</b> - обе библиотеки достаточно удобны для создания простых графиков,
          имеют широкие возможности для кастомизации. React Google Charts имеет чуть более широкие возможности.
        </li>
        <li>
          <b>D3</b> - библиотека не была рассмотрена детально, но судя по примерам больше подходит для визуализции больших данных,
          графиков из научной сферы.
        </li>
      </ul>
      <p>
        Отдельно стоит отметить библиотеки примитивов https://airbnb.io/visx/, https://recharts.org,
        на основании которых можно создать свою библиотеку для создания графиков, либо использовать
        для создания более кастомизированных графиков.
      </p>
    </>
  )

}
  
export default Conclusion
  