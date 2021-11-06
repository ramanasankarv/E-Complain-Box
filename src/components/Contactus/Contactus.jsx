import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import PanelHeader from "../../Shared/common/PanelHeader";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
function Contactus(props) {
  return (
    <Container fixed py={2}>
      <Grid item container py={1} style={{ backgroundColor: "#2B7A78" }}>
        <PanelHeader title={"Contact Us "} />
      </Grid>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <div style={{ color: "#1F5B88", padding: "10px" }}>
          <p>
            We are always availble for you to listen you.
          </p>
<p><b>Write Email to us:</b></p>
          <p>
            admin@ecomplainbox.com
          </p>
          <p><b>Our Toll Free Number is:</b></p>
          <p>+91-9999999999</p>
        </div>
      </Box>
    </Container>
  );
}

export default Contactus;
