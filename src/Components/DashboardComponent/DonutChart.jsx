import { Box, Text } from "@chakra-ui/react";
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PolarAreaChart = () => {
     const chartData = {
          series: [40, 25, 35],
          options: {
               chart: {
                    type: 'polarArea', // Change the chart type to 'polarArea'
               },
               labels: ['First', 'Second', 'Third'],
          },
          colors: ['#FF5733', '#339CFF', '#33FF57'],
          stroke: {
               width: [3, 6, 4],
               colors: 'transparent',
          },
     };

     return (
          <Box id="polar-area-chart" p="4">
               <ReactApexChart options={chartData.options} series={chartData.series} type="polarArea" width="100%" height={300} />
               <div className="center-label">Center Text</div>
          </Box>
     );
};

export default PolarAreaChart;
