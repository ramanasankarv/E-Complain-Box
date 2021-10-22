import { Grid,Typography } from '@mui/material';
import React from 'react';
import { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Health', 'Tax', 'Transport', 'Women', 'Irrigation', 'Agriculture','Home','Police','Tourism','Culture', 'Mines'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3,23,30,480,,50],
      backgroundColor: [
        'rgba(255, 102, 2, 0.8)',
        'rgba(255, 102, 2, 0.8)',
        'rgba(255, 102, 2, 0.8)',
        'rgba(255, 102, 2, 0.8)',
        'rgba(255, 102, 2, 0.8)',
        'rgba(255, 102, 2, 0.8)',
        'rgba(255, 102, 2, 0.8)',
        'rgba(255, 102, 2, 0.8)',
        'rgba(255, 102, 2, 0.8)',
        'rgba(255, 102, 2, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',

      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalChart = () => (
    <Grid container px={12} pt={8}>
        <Grid container py={2} style={{backgroundColor:"#2B7A78"}}>
            <Typography px={2} style={{color:"#fff",fontWeight:"bolder"}}>
                Todays Records
            </Typography>
        </Grid>
        <Grid container style={{background:"#fff"}}>
            <Bar data={data} options={options} style={{width:"100%",maxHeight:"250px",fontWeight:"bolder"}}/>
        </Grid>
    </Grid>
);

export default VerticalChart;