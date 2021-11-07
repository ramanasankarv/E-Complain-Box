import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import PanelHeader from "../../Shared/common/PanelHeader";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
function Aboutus(props) {
  return (
    <Container fixed py={2}>
      <Grid item container py={1} style={{ backgroundColor: "#2B7A78" }}>
        <PanelHeader title={"About Us "} />
      </Grid>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <div style={{ color: "#1F5B88", padding: "10px" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Box>
    </Container>
  );
}

export default Aboutus;
