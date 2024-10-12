import { useState } from 'react'
import './App.css'
import ReactChartkick from './components/chart-components/ReactChartkick.tsx'
import ReactChartjs2 from './components/chart-components/ReactChartjs2.tsx'
import D3 from './components/chart-components/D3.tsx'
import MUIX from './components/chart-components/MUIX.tsx'
import ReactCharts from './components/chart-components/ReactCharts.tsx'
import AntDesign from './components/chart-components/AntDesign.tsx'
import ReactGoogleCharts from './components/chart-components/ReactGoogleCharts.tsx'
import Conclusion from './components/Conclusion.tsx'

function App() {
  const tabs = ['react-chartkick', 'react-chartjs-2', 'D3', 'MUI X', 'react-charts', 'ant-design', 'react-google-charts', 'Вывод']
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const handleTabClick = (tab:string ) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="App">

        <div className="tab-container">
          {tabs.map(tab => (
            <div
              className={`tab ${tab === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              { tab }
            </div>
          ))}
        </div>

        <div className="content" style={{ display: activeTab === 'react-chartkick' ? 'block' : 'none' }}>
          <h1>react-chartkick (На основе Chart.js)</h1>
          <ReactChartkick/>
        </div>

        <div className="content" style={{ display: activeTab === 'react-chartjs-2' ? 'block' : 'none' }}>
          <h1>react-chartjs-2</h1>
          <ReactChartjs2/>
        </div>

        <div className="content" style={{ display: activeTab === 'D3' ? 'block' : 'none' }}>
          <h1>D3</h1>
          <D3/>
        </div>

        <div className="content" style={{ display: activeTab === 'MUI X' ? 'block' : 'none' }}>
          <h1>MUI X</h1>
          <MUIX/>
        </div>

        <div className="content" style={{ display: activeTab === 'react-charts' ? 'block' : 'none' }}>
          <h1>react-charts</h1>
          <ReactCharts/>
        </div>

        <div className="content" style={{ display: activeTab === 'ant-design' ? 'block' : 'none' }}>
          <h1>ant-design</h1>
          <AntDesign/>
        </div>

        <div className="content" style={{ display: activeTab === 'react-google-charts' ? 'block' : 'none' }}>
          <h1>React Google Charts</h1>
          <ReactGoogleCharts/>
        </div>

        <div className="content" style={{ display: activeTab === 'Вывод' ? 'block' : 'none' }}>
          <h1>Вывод</h1>
          <Conclusion/>
        </div>

      </div>
    </>
  )
}

export default App
