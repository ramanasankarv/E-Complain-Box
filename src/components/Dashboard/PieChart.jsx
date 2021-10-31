import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import PanelHeader from '../../Shared/common/PanelHeader';
const data = {
  labels: ['Health', 'Tax', 'Transport', 'Women', 'Irrigation', 'Agriculture', 'Home', 'Police', 'Tourism', 'Culture'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 23, 30, 480, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 143, 64, 0.8)',
        'rgba(123, 159, 64, 0.8)',
        'rgba(255, 213, 64, 0.8)',
        'rgba(145, 159, 64, 0.8)',
        'rgba(255, 159, 134, 0.8)',
        'rgba(255, 12, 64, 0.8)',

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 143, 64, 0.2)',
        'rgba(255, 143, 64, 0.2)',
        'rgba(255, 143, 64, 0.2)',
        'rgba(255, 143, 64, 0.2)',
        'rgba(255, 143, 64, 0.2)',

      ],
      borderWidth: 1,
    },
  ],
};


const PieChart = () => (
  <Grid container px={12} py={8}>
    <PanelHeader title={"Register"} />
    <Grid container style={{ background: "#fff" }} py={4}>
      <Pie data={data} style={{ width: "100%", maxHeight: "300px", fontWeight: "bolder" }} />
    </Grid>
  </Grid>
);

export default PieChart;