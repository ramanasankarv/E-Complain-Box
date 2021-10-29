import { Grid, Typography,Box } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Homepage(props) {
    return (
        <Grid container>
            <Grid container>
                <Grid item md={8} sm={7}>

                </Grid>
                <Grid item md={4} sm={5}>
                    <Typography variant="h4"> 
                        E-complain Box
                    </Typography>
                    <Typography variant="h6">
                        File complain in 
                    </Typography>
                    <Typography variant="h6">
                        Any Government
                    </Typography>
                    <Typography variant="h6">
                        Any Department
                    </Typography>
                </Grid>
            </Grid>
            <Grid container py={5} px={5}  bgcolor="#fff">
                <Grid container>
                    <Typography style={{width:"100%"}} variant="h5" align="center">
                        Raise your complain in just 3 steps
                    </Typography>
                </Grid>
                <Grid container  style={{textAlign:"center"}}>
                    <Grid item md={4} sm={4} xs={12}>
                        <Box>
                            <KeyboardArrowDownIcon/>
                            <Typography>
                                Sign up & create your profile
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <Box>
                            <KeyboardArrowDownIcon/>
                            <Typography>
                                Verify your profile
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <Box>
                        <KeyboardArrowDownIcon/>
                            <Typography>
                                Raise complain & check feedback
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container py={5}>
                <Grid container>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box>
                            <KeyboardArrowDownIcon/>
                            <Typography>
                                Sign up & create your profile
                            </Typography>
                            <Typography variant="h6">
                                Sign up & create your profile
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box>
                            <KeyboardArrowDownIcon/>
                            <Typography>
                                Sign up & create your profile
                            </Typography>
                            <Typography variant="h6">
                                Sign up & create your profile
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box>
                            <KeyboardArrowDownIcon/>
                            <Typography>
                                Verify your profile
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box>
                        <KeyboardArrowDownIcon/>
                            <Typography>
                                Raise complain & check feedback
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    );
}

export default Homepage;