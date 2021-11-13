import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { recordUseStyles } from './styles/DashboardStyle';
import PanelHeader from '../../Shared/common/PanelHeader';
import { getComplainGroupData } from '../../redux/actions/auth';
import { connect } from "react-redux"

function TodayRecord({ auth }) {
    const [totalData, setTotalData] = useState([])
    const [totalRasiedData, setTotalRasiedData] = useState([])
    const [totalInComplainData, setTotalInComplainData] = useState([])
    const [totalDoneData, setTotalDoneData] = useState([])
    const [dataChanged, setdataChanged] = useState(false)
    const [totalDepartments, setTotalDepartments] = useState([])
    useEffect(() => {
        if (auth.user) {
            getComplainGroupData(auth.user.id).then((res) => {
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




    const classes = recordUseStyles();

    return (
        <Grid container mt={5}>
            <Grid
                container
                spacing={2}
            >
                <Grid item md={4} sm={12} xs={12} my={2} style={{ color: "rgba(66,63,249,.6)" }}>
                    <Box className={classes.numbers}>
                        <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <FlagIcon px={2} style={{ fontSize: "40px" }} />
                            <Typography variant="h6" style={{ fontSize: "40px", lineHeight: "0" }}>{showTotalRaised}</Typography>
                        </Box>
                        <Typography fontSize="20px" style={{ color: "rgba(0,0,0,.6)" }}>
                            Raised
                        </Typography>
                    </Box>

                </Grid>
                <Grid item md={4} sm={12} xs={12} my={2} style={{ color: "rgba(35,169,75,.6)" }}>
                    <Box className={classes.numbers}>

                        <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <HourglassFullIcon px={2} style={{ fontSize: "40px" }} />
                            <Typography variant="h6" style={{ fontSize: "40px", lineHeight: "0" }}>{showTotalInProgress}</Typography>
                        </Box>
                        <Typography fontSize="20px" style={{ color: "rgba(0,0,0,.6)" }}>
                            In Progress
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={12} xs={12} my={2} style={{ color: "rgba(252,21,49,.6)" }} >
                    <Box className={classes.numbers}>

                        <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <CheckCircleIcon px={2} style={{ fontSize: "40px" }} />
                            <Typography variant="h6" style={{ fontSize: "40px", lineHeight: "0" }}>{showTotalDone}</Typography>
                        </Box>
                        <Typography fontSize="20px" style={{ color: "rgba(0,0,0,.6)" }}>
                            Completed
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Grid >
    );
}
const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps)(TodayRecord);