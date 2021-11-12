import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PanelHeader from '../../Shared/common/PanelHeader';
import { Bar } from 'react-chartjs-2';
import { getComplainGroupData } from '../../redux/actions/auth';
import { connect } from "react-redux"



const VerticalChart = ({ auth }) => {
  const [totalData, setTotalData] = useState([])
  const [totalRasiedData, setTotalRasiedData] = useState([])
  const [totalInComplainData, setTotalInComplainData] = useState([])
  const [totalDoneData, setTotalDoneData] = useState([])
  const [dataChanged, setdataChanged] = useState(false)
  const [totalDepartments, setTotalDepartments] = useState([])

  useEffect(() => {
    if (auth.user) {
      getComplainGroupData(auth.user.id).then((res) => {
        res.length && res.map(datas => {
          setTotalData(res)
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
      })
    }
  }, [setTotalData, auth.user]);



  const data = {
    labels: totalDepartments,
    datasets: [
      {
        label: 'Total Raise Complains',
        data: totalRasiedData,
        backgroundColor: 'rgb(66,63,249,.6)',
      },
      {
        label: 'Total W ip Complains',
        data: totalInComplainData,
        backgroundColor: 'rgb(35,169,75,.6)',
      },
      {
        label: 'Total Completed Complains',
        data: totalDoneData,
        backgroundColor: 'rgb(252,21,49,.6)',
      },
    ],
  };
  const options = {
    scales: {
      xAxes: [

        {
          ticks: {
            min: 0
          },
          stacked: true,

        }
      ],
      yAxes: [{
        stacked: true,
        display: true,
        ticks: {
          suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
          // OR //
          beginAtZero: true   // minimum value will be 0.
        }
      }]

    }
  }

  return (
    <Grid container mx={{ xs: 2, sm: 10, md: 12 }} mt={5} boxShadow={10} borderRadius="20px">
      <PanelHeader title={"Statictics"} />
      <Grid container style={{ background: "#fff", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }} px={3} py={2}>
        <Bar data={data} options={options} style={{ width: "100%", maxHeight: "300px", fontWeight: "bolder" }} />
      </Grid>
    </Grid>
  )
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(VerticalChart);