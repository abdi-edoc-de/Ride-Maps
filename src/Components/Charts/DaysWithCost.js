
import React from 'react'
import ReactApexChart from "react-apexcharts";
import { getDayes, getDaysCost, getTime } from '../../Utils/Utils';
export const DaysWithCost = () => {

    const [dataset,labels] = getDaysCost()      
     const series= [{
          name: 'Cost',
          data: dataset     }]

        const options = {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val ;
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            categories:labels,
            position: 'top',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: true,
              formatter: function (val) {
                return val;
              }
            }
          
          },
          title: {
            text: 'Sum of Cost per day',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        }

    return (
       <div id="chart">
  <ReactApexChart options={options} series={series} type="bar" height={350} />
</div>
    )
}

// export default TimeCost
