import React, { useDebugValue, useEffect, useState } from 'react'
import './Graphdata.css'
import axios from "axios";
import Chart from "react-apexcharts";
import BarGraph from './BarGraph';

const mockData = {
  options: {
    
    chart: {
      id: "area",
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: []
    }
  },
  series: [
    {
      name: "series", 
      data: []
    }
  ]
}
const URL = "https://api-dev.mintd.in/api/v1/customer/user/portfolio-performance";
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoxLCJpZCI6MzQ5LCJjcmVhdGVkIjoiMjAyMi0wNS0zMCAwNTozMzowNC4wODQzOTkiLCJleHAiOjE2NTM5NzUxODR9.G6BfOvlmoNOeiEorfeVeuK2vikHg3glWoB2d14UTlmE';
export default function Graphdata({duration}) {
  const [value, setValue] = useState('');
  const [graphData, setGraphData] = useState()


  const fetchData = async () => {

    setGraphData();
    // return
    const data = { filter_id: duration }
    try {
      const response = await axios.post(URL, data, {
        headers: {
          'authorization': `Bearer ${TOKEN}`,

        }
      })
      if(response){
        const { data } = response.data;
        const cloneData = JSON.parse(JSON.stringify(mockData));
        cloneData.options.xaxis.categories = data.categories;
        cloneData.series[0].data = data.data.map(item => item.toFixed());
        setGraphData(cloneData);
      }
      

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [duration])

  return (
    <div className='chart'>
      {console.log(value)}
      {graphData && <BarGraph  graphData={graphData}/>}
      
    </div>
  )
}
