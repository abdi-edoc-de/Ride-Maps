import React from 'react';
import { getDayes, getTime ,getTimeCost} from '../../Utils/Utils';
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
const [_, datat] = getTimeCost()
const series = [{
    name: 'Cost per Hour',
    data: datat
  }, {
    name: 'Number of order per hour',
    data:dataset
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
      categories:labels
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
