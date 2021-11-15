import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import { useHistory } from "react-router";
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useEffect } from "react";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';

const AppToolbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  let history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {

  })

  const logout = () => {
    props.logout(history);
    history.push('/login')
  }


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";


  const renderMenu = (
    <Menu
      style={{
        top: "6px"
      }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link style={{ textDecoration: "none", color: "#000" }}><LockOpenIcon mr={1} style={{ fontSize: "16px", marginBottom: "-1px" }} />Login</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><VpnKeyIcon mr={1} style={{ fontSize: "16px", marginBottom: "2px" }} />Registration</MenuItem>
      <MenuItem onClick={handleMenuClose}><ExitToAppIcon mr={1} style={{ fontSize: "16px", marginBottom: "2px" }} />Logout</MenuItem>
      <MenuItem onClick={handleMenuClose}><PersonIcon mr={1} style={{ fontSize: "16px", marginBottom: "2px" }} />Profile</MenuItem>
    </Menu >
  );

  const mobileMenuId = "primary-search-account-menu-mobile";


  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><LockOpenIcon mr={1} style={{ fontSize: "16px", marginBottom: "2px" }} />Login</MenuItem>
      <MenuItem onClick={handleMenuClose}><VpnKeyIcon mr={1} style={{ fontSize: "16px", marginBottom: "2px" }} />Registration</MenuItem>
      <MenuItem onClick={handleMenuClose}><ExitToAppIcon mr={1} style={{ fontSize: "16px", marginBottom: "2px" }} />Logout</MenuItem>
      <MenuItem onClick={handleMenuClose}><PersonIcon mr={1} style={{ fontSize: "16px", marginBottom: "2px" }} />Profile</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} bgcolor="#fff">
      <AppBar position="static" color="secondary" style={{ color: "#fff" }}>
        <Toolbar bgcolor="#fff">
          <Link to="/" style={{ display: "flex", color: "#fff", textDecoration: "none", alignItems: "center", fontWeight: "bold" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              E-ComplaintBox
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "block" } }}>

            <Link to="/" variant="contained" size="small" color="success" style={{ color: "#fff", textDecoration: "none", alignItems: "center", fontWeight: "regular", marginRight: "10px" }}>
              Home
            </Link>
            <Link to="/about-us" variant="contained" size="small" color="success" style={{ color: "#fff", textDecoration: "none", alignItems: "center", fontWeight: "regular", marginRight: "10px" }}>
              About Us
            </Link>
            <Link to="/contactus" variant="contained" size="small" color="success" style={{ color: "#fff", textDecoration: "none", alignItems: "center", fontWeight: "regular", marginRight: "10px" }}>
              Contact Us
            </Link>

            {!localStorage.getItem("token") ? (
              < React.Fragment >
                <Button variant="contained" size="small" color="success" style={{ borderRadius: "30px", background: "#23A94B", color: "#fff", marginRight: "10px" }} component={Link} to={'/login'}>
                  Login
                </Button>
                <Button variant="contained" color="success" size="small" component={Link} to={'/register'} style={{ borderRadius: "30px", background: "#23A94B", color: "#fff", marginRight: "10px" }}>
                  Registration
                </Button>
              </React.Fragment>
            ) : props.auth.isAuthenticated && (props.auth.user.UserRole !== "SuperAdmin" && props.auth.user.UserRole !== "Department Employee") ? (
              <React.Fragment>
                <Link to="/raise" variant="contained" size="small" color="success" style={{ color: "#fff", textDecoration: "none", alignItems: "center", fontWeight: "bold", marginRight: "10px" }}>
                  Raise Complain
                </Link>
                <Link to="/dashboard" variant="contained" size="small" color="success" style={{ color: "#fff", textDecoration: "none", alignItems: "center", fontWeight: "bold", marginRight: "10px" }}>
                  Complains
                </Link>
                <Link to="/dashboard" variant="contained" size="small" color="success" style={{ color: "#fff", textDecoration: "none", alignItems: "center", fontWeight: "bold", marginRight: "10px" }}>
                  Dashboard
                </Link>
                <Button variant="contained" size="small" color="success" style={{ borderRadius: "30px", background: "#23A94B", color: "#fff", marginRight: "10px" }} onClick={logout}>
                  Logout
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/dashboard" variant="contained" size="small" color="success" style={{ color: "#fff", textDecoration: "none", alignItems: "center", fontWeight: "bold", marginRight: "10px" }}>
                  Complains
                </Link>
                <Link to="/dashboard" variant="contained" size="small" color="success" style={{ color: "#fff", textDecoration: "none", alignItems: "center", fontWeight: "bold", marginRight: "10px" }}>
                  Dashboard
                </Link>
                <Button variant="contained" size="small" color="success" style={{ borderRadius: "30px", background: "#23A94B", color: "#fff", marginRight: "10px" }} onClick={logout}>
                  Logout
                </Button>
              </React.Fragment>
            )

            }

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box >
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(AppToolbar);
