import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import './styles/styles.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function LoggedUserInfo({ auth }) {
    return (
        <Grid container mx={{ xs: 2, sm: 4, md: 8 }}>
            <Grid item md={12} sm={12} xs={12} my={12} py={5} className="avatar-container" boxShadow={8} borderRadius="20px">
                <Stack direction="row" spacing={2} className="avatar">
                    <Avatar
                        sx={{ width: 100, height: 100, bgcolor: "#3aafa8" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                    >
                        {auth.user.FullName.charAt(0)}
                    </Avatar>
                </Stack>
                <Grid container ml={3}>
                    <Typography>
                        <span>
                            Logged in as
                        </span>
                        <b> {auth.user.FullName}</b>
                    </Typography>
                </Grid>
                <Grid container ml={3}>
                    <Typography mt={3}>
                        <b>Role: </b>
                        <span>
                            {auth.user.UserRole}
                        </span>
                    </Typography>
                </Grid>
                <Grid container ml={3}>
                    <Typography>
                        <Typography>
                            <b>Email: </b>
                            <span>
                                {auth.user.Email}
                            </span>
                        </Typography>
                    </Typography>
                </Grid>
                <Grid container ml={3}>
                    <Typography>
                        <Typography>
                            <b>Contact: </b>
                            <span>
                                {auth.user.Mobile}
                            </span>
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}