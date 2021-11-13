import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PanelHeader from '../../Shared/common/PanelHeader';
import { Bar } from 'react-chartjs-2';
import { getComplainGroupData } from '../../redux/actions/auth';
import { connect } from "react-redux"
import Loader from '../../Shared/common/Loader';


const VerticalChart = ({ auth }) => {
  const [totalData, setTotalData] = useState([])
  const [totalRasiedData, setTotalRasiedData] = useState([])
  const [totalInComplainData, setTotalInComplainData] = useState([])
  const [totalDoneData, setTotalDoneData] = useState([])
  const [loaded, setLoaded] = useState(true)
  const [totalDepartments, setTotalDepartments] = useState([])

  useEffect(() => {
    if (auth.user) {
      getComplainGroupData(auth.user.id).then((res) => {
        res.length && res.map(datas => {
          setLoaded(true)
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
          setLoaded(false)
        })
      })
    }
  }, [setTotalData, auth.user, setLoaded]);


  const data = {
    labels: totalDepartments,
    datasets: [
      {
        label: 'Total Raise Complains',
        data: totalRasiedData,
        backgroundColor: 'rgb(66,63,249,.6)',
        stack: 'Stack 0',

      },
      {
        label: 'Total W ip Complains',
        data: totalInComplainData,
        backgroundColor: 'rgb(35,169,75,.6)',
        stack: 'Stack 1',

      },
      {
        label: 'Total Completed Complains',
        data: totalDoneData,
        backgroundColor: 'rgb(252,21,49,.6)',
        stack: 'Stack 2',

      },
    ],
  };
  const options = {
    scales: {
      y: {
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      },
      x: {
        stacked: true
      }
    }
  };

  return (
    <Grid container mt={5} boxShadow={10} borderRadius="20px" >
      <PanelHeader title={"Statictics"} />
      {loaded ?
        (
          <Grid container px={12} my={12} >
            <Loader />
          </Grid>
        ) :
        (
          <Grid container style={{ background: "#fff", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }} px={3} py={2}>
            <Bar data={data} options={options} style={{ fontWeight: "bolder" }} />
          </Grid>
        )}
    </Grid>
  )
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(VerticalChart);