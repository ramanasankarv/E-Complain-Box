import React, { Fragment } from "react";
import AppToolbar from "./Shared/Layouts/Toolbar/Toolbar";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Login from "./components/Login/Login";
import AppFooter from "./Shared/Layouts/Footer/Footer";
import {  Grid } from "@mui/material";
import Register from "./components/Registration/Register";
import Homepage from "./components/Homepage/Homepage";
import RaiseComplaints from "./components/RaiseComplain/RaiseComplaints";
const App = () => {

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#3AAFA9',
    },
    secondary: {
      light: '#0066ff',
      main: '#0c0921',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    text:{
      secondary:{
        main:"#ffffff"
      }
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  
});
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Fragment>              
                    <AppToolbar/>
                    <Grid minHeight="70vh" container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="#DEF2FA"
                    >
                        <Switch>
                            <Route exact path="/login" component={Login}/> 
                            <Route exact path="/register" component={Register}/> 
                            <Route exact path="/raise" component={RaiseComplaints}/> 
                            <Route exact path="/" component={Homepage}></Route>
                        </Switch>
                    </Grid>
                    <AppFooter/>
                </Fragment>
            </ThemeProvider>
        </Router> 
    );
};

export default App;