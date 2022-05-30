import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApexCharts from 'apexcharts'
import NavComponent from './Components/NavComponent';
import GraphComponent from './Components/GraphComponent';
import FooterComponent from './Components/FooterComponent';
import { useEffect } from 'react'
import Graphdata from './Components/Graphdata';
import Overview from './Components/Overview';

function App() {
  
  return (
    
    <div className="App">
       <NavComponent />
       <Overview />
       <FooterComponent/>
    </div>

  );
}

export default App;
