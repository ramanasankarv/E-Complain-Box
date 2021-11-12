import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import PanelHeader from '../../Shared/common/PanelHeader';
import { getComplainGroupData } from '../../redux/actions/auth';
import { connect } from "react-redux"




const PieChart = ({ auth }) => {
  const [totalData, setTotalData] = useState([])
  const [totalRasiedData, setTotalRasiedData] = useState([])
  const [totalInData, setTotalInData] = useState([])
  const [totalDoneData, setTotalDoneData] = useState([])
  const [totalBorderColor, setTotalBorderColod] = useState([])
  const [totalBackgroundColor, setTotalBackgroundColor] = useState([])
  const [totalDepartments, setTotalDepartments] = useState([])


  useEffect(() => {
    if (auth.user) {
      getComplainGroupData(auth.user.id).then((res) => {
        setTotalData(res)
        res.length && res.map(datas => {
          let firstnumber = Math.floor(Math.random() * 256);
          let secondnumber = Math.floor(Math.random() * 256);
          let thirdnumber = Math.floor(Math.random() * 256);
          let backgroundColor = `rgba(${firstnumber}, ${secondnumber}, ${thirdnumber}, 0.8)`;
          let borderColor = `rgba(${firstnumber}, ${secondnumber}, ${thirdnumber}, 1)`;
          setTotalDoneData((totalDoneData) => [
            ...totalDoneData,
            datas.totalCompletedComplains,
          ]);
          setTotalInData((totalInData) => [
            ...totalInData,
            datas.totalWipComplains,
          ]);
          setTotalRasiedData((totalRasiedData) => [
            ...totalRasiedData,
            datas.totalRaiseComplains,
          ]);
          setTotalBackgroundColor((totalBackgroundColor) => [
            ...totalBackgroundColor,
            backgroundColor,
          ]);
          setTotalBorderColod((totalBorderColor) => [
            ...totalBorderColor,
            borderColor,
          ]);
          setTotalDepartments((totalDepartments) => [
            ...totalDepartments,
            datas.DepartmentName ? datas.DepartmentName : datas.DepartmentNam,
          ]);
        })

      })
    }
  }, [setTotalData, auth.user]);




  const showTotalRaised = totalRasiedData.reduce((sum, data) => {
    return sum += data
  }, 0)
  const showTotalIn = totalInData.reduce((sum, data) => {
    return sum += data
  }, 0)
  const showTotalDone = totalDoneData.reduce((sum, data) => {
    return sum += data
  }, 0)



  const data1 = {
    labels: totalDepartments,
    datasets: [
      {
        label: '# of Total raised complain',
        data: totalRasiedData,
        backgroundColor: totalBackgroundColor,
        borderColor: totalBorderColor,
        borderWidth: 1,
      },
    ],
  };


  const data2 = {
    labels: totalDepartments,
    datasets: [
      {
        label: '# of Total In Progress complain',
        data: totalInData,
        backgroundColor: totalBackgroundColor,
        borderColor: totalBorderColor,
        borderWidth: 1,
      },
    ],
  };


  const data3 = {
    labels: totalDepartments,
    datasets: [
      {
        label: '# of Total In Progress complain',
        data: totalDoneData,
        backgroundColor: totalBackgroundColor,
        borderColor: totalBorderColor,
        borderWidth: 1,
      },
    ],
  };
  return (
    <Grid container item md={4} px={{ xs: 2, sm: 4, md: 8 }}>
      <Grid container item boxShadow={10} borderRadius="20px" mt={{ xs: 5, sm: 5, md: 0 }}>
        <PanelHeader title={"Rasised Complains"} />
        <Grid container py={4} style={{ display: "flex", justifyContent: "center", background: "#fff", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
          {showTotalRaised === 0 ?
            <Typography variant="subtitle1" style={{ textAlign: "center" }} align="center">No Data To Show</Typography>
            :
            <Pie data={data1} style={{ width: "100%", maxHeight: "400px", fontWeight: "bolder" }} />
          }
        </Grid>
      </Grid>
      <Grid container item boxShadow={10} borderRadius="20px" mt={{ xs: 5, sm: 5, md: 5 }}>
        <PanelHeader title={"In Progress Complains"} />
        <Grid container py={4} style={{ display: "flex", justifyContent: "center", background: "#fff", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
          {showTotalIn === 0 ?
            <Typography variant="subtitle1" style={{ textAlign: "center" }} align="center">No Data To Show</Typography>
            :
            <Pie data={data2} style={{ width: "100%", maxHeight: "400px", fontWeight: "bolder" }} />
          }
        </Grid>
      </Grid>
      <Grid container item boxShadow={10} borderRadius="20px" mt={{ xs: 5, sm: 5, md: 5 }}>
        <PanelHeader title={"Completed Complains"} />
        <Grid container py={4} style={{ display: "flex", justifyContent: "center", background: "#fff", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
          {showTotalDone === 0 ?
            <Typography variant="subtitle1" style={{ textAlign: "center" }} align="center">No Data To Show</Typography>
            :
            <Pie data={data3} style={{ width: "100%", maxHeight: "400px", fontWeight: "bolder" }} />
          }
        </Grid>
      </Grid>
    </Grid>

  )
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PieChart);