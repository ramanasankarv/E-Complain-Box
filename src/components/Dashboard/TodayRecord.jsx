import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { recordUseStyles } from './styles/HomePageStyles';
import PanelHeader from '../../Shared/common/PanelHeader';
function TodayRecord(props) {
    const classes = recordUseStyles();

    return (
        <Grid container px={12} pt={8}>
            <PanelHeader title={"Statictics"}/>
            <Grid 
                py={4}
                container
                className={classes.grid}
                style={{backgroundColor:"#fff"}}
                >
                <Box className={classes.numbers} style={{color:"rgba(66,63,249,.6)"}}>
                    <FlagIcon px={2} style={{fontSize:"45px"}}/>
                    24
                    <Typography fontSize="20px" style={{color:"rgba(0,0,0,.6)"}}>
                        Raised
                    </Typography>
                </Box>
                <Box className={classes.numbers} style={{color:"rgba(35,169,75,.6)"}}>
                    <HourglassFullIcon px={2} style={{fontSize:"45px"}}/>
                    24
                    <Typography fontSize="20px" style={{color:"rgba(0,0,0,.6)"}}>
                        In Progress
                    </Typography>
                </Box>
                <Box className={classes.numbers} style={{color:"rgba(227,179,25,.6)"}}>
                    <AccessibleForwardIcon px={2} style={{fontSize:"45px"}}/>
                    24
                    <Typography fontSize="20px" style={{color:"rgba(0,0,0,.6)"}}>
                        Forwarded
                    </Typography>
                </Box>
                <Box className={classes.numbers} style={{color:"rgba(252,21,49,.6)"}}>
                    <CheckCircleIcon px={2} style={{fontSize:"45px"}}/>
                    24
                    <Typography fontSize="20px" style={{color:"rgba(0,0,0,.6)"}}>
                        Completed
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default TodayRecord;