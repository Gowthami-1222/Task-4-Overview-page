import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function BarGraph({ graphData }) {


    const { options, series } = graphData
    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                width="100%"
                  />
        </div>
    )
}
