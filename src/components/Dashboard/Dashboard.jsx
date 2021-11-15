import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import TodayRecord from './TodayRecord';
import { Fragment } from 'react';
import VerticalChart from './VerticalChart';
import PieChart from './PieChart';
import { connect } from 'react-redux';
import { useState } from 'react';
import Loader from '../../Shared/common/Loader';
import { useHistory } from "react-router-dom"
import "./styles/Dashboard.css"
import LoggedUserInfo from '../../Shared/common/LoggedUserInfo';
import DashboardTable from './DashboardTable';
import { getComplainGroupData } from '../../redux/actions/auth';

function Dashboard({ auth }) {
  const [totalData, setTotalData] = useState([])
  const [totalRasiedData, setTotalRasiedData] = useState([])
  const [totalInComplainData, setTotalInComplainData] = useState([])
  const [totalDoneData, setTotalDoneData] = useState([])
  const [totalBorderColor, setTotalBorderColod] = useState([])
  const [totalBackgroundColor, setTotalBackgroundColor] = useState([])
  const [dataChanged, setdataChanged] = useState(false)
  const [totalDepartments, setTotalDepartments] = useState([])
  const [loaded, setLoaded] = React.useState(true);
  let history = useHistory()
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
          setLoaded(false)
        })

      })
    }

  }, [setTotalData, auth.user]);
  const showTotalRaised = totalRasiedData.reduce((sum, data) => {
    return sum += data
  }, 0)
  const showTotalInProgress = totalInComplainData.reduce((sum, data) => {
    return sum += data
  }, 0)
  const showTotalDone = totalDoneData.reduce((sum, data) => {

    return sum += data
  }, 0)

  return loaded ?
    (<Grid container px={12} style={{ height: "100%" }}>
      <Loader />
    </Grid>) : (
      <Fragment>
        {
          auth.user ?
            (<LoggedUserInfo auth={auth} />)
            :
            ""
        }

        {/* {auth.user ? (<Grid container mt={12} pl={{ xs: 2, sm: 4, md: 8 }}><Typography style={{ fontWeight: "bold", fontSize: "20px" }}>Welcome {auth.user ? auth.user.FullName : ""}</Typography></Grid>
        ) : ""
        } */}
        <Grid container display="flex" alignItems="flex-start" mb={3}>
          <Grid container pl={{ xs: 2, sm: 4, md: 8 }} pr={{ xs: 2, sm: 4, md: 0 }} item md={8}>
            <DashboardTable />
            <TodayRecord showTotalRaised={showTotalRaised} showTotalInProgress={showTotalInProgress} showTotalDone={showTotalDone} />
            <VerticalChart />
          </Grid>
          <PieChart totalRasiedData={totalRasiedData}
            showTotalRaised={showTotalRaised}
            showTotalInProgress={showTotalInProgress}
            showTotalDone={showTotalDone}
            totalInComplainData={totalInComplainData}
            totalDoneData={totalDoneData}
            totalBackgroundColor={totalBackgroundColor}
            totalBorderColor={totalBorderColor}
            totalDepartments={totalDepartments}
          />
        </Grid>
      </Fragment >
    );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Dashboard);