import * as React from "react";
import { Container,Box,Grid, Typography } from "@mui/material";
export default function AppFooter() {
  

  return (
      <React.Fragment>
        <Box 
            py={{xs:5,sm:10}}
            px={{xs:5,sm:10}}
            bgcolor="primary.main"
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid xs={12} sm={3}>
                        <Box>tusher</Box>
                        <Box>tusher</Box>
                        <Box>tusher</Box>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        tusher
                    </Grid>
                    <Grid xs={12} sm={3}>
                        tusher
                    </Grid>
                    <Grid xs={12} sm={3}>
                        tusher
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Grid xs={12} bgcolor="secondary.main" color="white" py={3} textAlign="center">
            <Typography variant="h5" component="h5">
                All Rights Reserved © 2021 E-ComplainBox.com
            </Typography>
        </Grid>
      </React.Fragment>
        
      
    // <Box sx={{
    //     height: 300,
    //     bgcolor: 'primary.dark',
    //     '&:hover': {
    //       backgroundColor: 'primary.main',
    //       opacity: [0.9, 0.8, 0.7],
    //     },
    //   }}>
        
    // </Box>
  );
}
