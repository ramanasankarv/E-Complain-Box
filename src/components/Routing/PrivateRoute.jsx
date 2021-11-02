import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {
    useEffect(() => {
        if (!auth.isAuthentication && auth.isAuthentication === "undefined") {
            history.push("/login");
        }
    }, []);
    return (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticated ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
        ></Route>
    );
}
const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);