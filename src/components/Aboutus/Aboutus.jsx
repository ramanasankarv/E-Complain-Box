import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import PanelHeader from '../../Shared/common/PanelHeader';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
function Aboutus(props) {
    return (
<Container fixed py={2}>
<Grid item container py={2} style={{ backgroundColor: "#2B7A78" }}>
                <PanelHeader title={"About Us "} />
            </Grid>
        <Box sx={{ bgcolor: '#ffffff', height: '10vh' }} />
        
      </Container>


    );
}


export default Aboutus;