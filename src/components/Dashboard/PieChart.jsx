import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import PanelHeader from '../../Shared/common/PanelHeader';
import { getComplainGroupData } from '../../redux/actions/auth';




const PieChart = () => {
  const [totalData, setTotalData] = useState([])
  const [totalRasiedData, setTotalRasiedData] = useState([])
  const [totalBorderColor, setTotalBorderColod] = useState([])
  const [totalBackgroundColor, setTotalBackgroundColor] = useState([])
  const [totalDepartments, setTotalDepartments] = useState([])
  useEffect(() => {
    getComplainGroupData().then((res) => {
      setTotalData(res)
      res.length && res.map(datas => {
        let firstnumber = Math.floor(Math.random() * 256);
        let secondnumber = Math.floor(Math.random() * 256);
        let thirdnumber = Math.floor(Math.random() * 256);

        let backgroundColor = `rgba(${firstnumber}, ${secondnumber}, ${thirdnumber}, 0.8)`;
        let borderColor = `rgba(${firstnumber}, ${secondnumber}, ${thirdnumber}, 1)`;

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

  }, [setTotalData]);




  const data = {
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
  return (
    <Grid container px={12} py={8}>
      <PanelHeader title={"Rasised Complains"} />
      <Grid container style={{ background: "#fff" }} py={4}>
        <Pie data={data} style={{ width: "100%", maxHeight: "300px", fontWeight: "bolder" }} />
      </Grid>
    </Grid>
  )
};

export default PieChart;