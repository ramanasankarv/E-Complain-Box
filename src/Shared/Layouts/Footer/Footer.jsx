import * as React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
export default function AppFooter() {

    return (
        <React.Fragment>
            <Box
                py={{ xs: 5, sm: 10 }}
                px={{ xs: 5, sm: 10 }}
                bgcolor="primary.main"
            >
                <Container maxWidth="lg">
                    <Grid item container spacing={5} style={{ color: "#fff", fontWeight: "bold" }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" mb={2}>E-Complain-Box</Typography>
                            <Box mb={1}>About us</Box>
                            <Box>Contact Us</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" mb={2}>Need Help?</Typography>
                            <Box>Customer Support</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" mb={2}>Join Us</Typography>
                            <Box mb={1}>Sign In</Box>
                            <Box>Sign Up</Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" mb={2}>Privacy & You</Typography>
                            <Box mb={1}>Terms Condition</Box>
                            <Box>Privacy Policy</Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Grid item xs={12} bgcolor="secondary.main" color="white" py={3} textAlign="center">
                <Typography variant="h6" component="h6" style={{ fontStyle: "italic", fontSize: "15px" }}>
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
