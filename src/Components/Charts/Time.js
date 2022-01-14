import React from 'react';
import { getDayes, getTime } from '../../Utils/Utils';
import ReactApexChart from 'react-apexcharts'
import {

  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {  Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
const top = "top"
// export const options = {
//   responsive: true,
//   plugins: {
    // legend: {
    //   position: top,
    // },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
//   },
// };

const [labels, dataset] = getTime()

const series = [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }]
const options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }




export function Time() {
  return <div id="chart">
  <ReactApexChart options={options} series={series} type="area" height={350} />
</div>;
}
