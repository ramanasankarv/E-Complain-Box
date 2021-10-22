import { Box, Grid, Typography,Paper } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import FlagIcon from '@mui/icons-material/Flag';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    numbers:{
        boxShadow: "3px 5px 8px 2px #888888;",
        width:"18%",
        height:"100px",
        background:"#fff",
        borderRadius:"10px",
        padding:"10px",
        textAlign:"center",
        alignItems:"center",
        fontSize:"35px",
        fontWeight:"bolder"
    },
    grid:{
        display:"flex",
        justifyContent:"space-around"
    }
  });


const lightTheme = createTheme({ palette: { mode: 'light' } });
function TodayRecord(props) {
    const classes = useStyles();

    return (
        <Grid container px={12} pt={8}>
            <Grid container py={2} style={{backgroundColor:"#2B7A78"}}>
                <Typography px={2} style={{color:"#fff",fontWeight:"bolder"}}>
                    Todays Records
                </Typography>
            </Grid>
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