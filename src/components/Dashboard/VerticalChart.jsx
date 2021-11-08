import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PanelHeader from '../../Shared/common/PanelHeader';
import { Bar } from 'react-chartjs-2';
import { getComplainGroupData } from '../../redux/actions/auth';




const VerticalChart = ({ setLoaded }) => {
  const [totalData, setTotalData] = useState([])
  const [totalRasiedData, setTotalRasiedData] = useState([])
  const [totalInComplainData, setTotalInComplainData] = useState([])
  const [totalDoneData, setTotalDoneData] = useState([])
  const [dataChanged, setdataChanged] = useState(false)
  const [totalDepartments, setTotalDepartments] = useState([])

  useEffect(() => {
    console.log(setLoaded)
    getComplainGroupData().then((res) => {
      setTotalData(res)
      res.length && res.map(datas => {
        setTotalRasiedData((totalRasiedData) => [
          ...totalRasiedData,
          datas.totalRaiseComplains,
        ]);
        setTotalInComplainData((totalInComplainData) => [
          ...totalInComplainData,
          datas.totalWipComplains,
        ]);
        setTotalDoneData((totalDoneData) => [
          ...totalDoneData,
          datas.totalCompletedComplains,
        ]);
        setTotalDepartments((totalDepartments) => [
          ...totalDepartments,
          datas.DepartmentName ? datas.DepartmentName : datas.DepartmentNam,
        ]);
      })
      setLoaded(false);

    })

  }, [setTotalData]);



  const data = {
    labels: totalDepartments,
    datasets: [
      {
        label: 'Total Raise Complains',
        data: totalRasiedData,
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Total W ip Complains',
        data: totalInComplainData,
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Total Completed Complains',
        data: totalDoneData,
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  const options = {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }

  return (
    <Grid container px={12} pt={8}>
      <PanelHeader title={"Statictics"} />
      <Grid container style={{ background: "#fff" }}>
        <Bar data={data} options={options} style={{ width: "100%", maxHeight: "250px", fontWeight: "bolder" }} />
      </Grid>
    </Grid>
  )
};

export default VerticalChart;