import {
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    CLEAR_PROFILE,
    GET_PROFILE,
} from "./types";
// import { setAlert } from "./alert";
import { auth } from "../../firebase";
import axios from "axios";
// import setAuthToken from "../utills/setAuthToken"
const client = axios.create({
    baseURL: "http://localhost:3030",
    json: true,
});

// const register = ({fullname,email,password,mobile}) =>{
//     return async dispatch=>{
//         try{
//             debugger
//             const registrationInfo = await auth.createUserWithEmailAndPassword(email, password);
//             const generateToken = await auth.currentUser.getIdToken(true);
//             console.log(registrationInfo)
//             console.log(generateToken)
//             let data = {
//                 fullname:fullname,
//                 email:email,
//                 password:password,
//                 mobile:mobile,
//                 token:generateToken
//             }
//             const config = {
//                 headers: {
//                     'AuthToken': generateToken
//                 }
//             }
//             const response = await axios.post("http://localhost:3030/registration",data,config).then(res=>{
//                 if(res.status==200){
//                     dispatch({
//                         type: REGISTER_SUCCESS,
//                         payload:data
//                     })
//                 }
//             })

//             //dispatch(loadUser())

//         }
//         catch(error){
//             console.log(error);
//         }
//     }
//     // try {
//     //     const response = await axios.post('/api/user/register', body, config);
//     //     console.log(response);
//     //     dispatch({
//     //         type: REGISTER_SUCCESS,
//     //         payload: response.data
//     //     })
//     //     dispatch(loadUser())

//     // } catch (error) {
//     //     const errors = error.response.data.errors
//     //     let err = '';
//     //     if (error.response.data.error) {
//     //         err = error.response.data.error
//     //     }
//     //     if (errors) {
//     //         errors.forEach(error => {
//     //             dispatch(setAlert(error.msg, 'danger'))
//     //         });
//     //     }
//     //     if (err && err !== '') {
//     //         dispatch(setAlert(err, 'danger'))
//     //     }
//     //     dispatch({
//     //         type: REGISTER_FAILED,
//     //     })
//     // }
// }
const register = ({ fullname, email, password, mobile }) => async (dispatch) => {

    try {
        debugger;
        const registrationInfo = await auth.createUserWithEmailAndPassword(
            email,
            password
        );
        const generateToken = await auth.currentUser.getIdToken(true);
        console.log(registrationInfo);
        console.log(generateToken);
        let data = {
            fullname: fullname,
            email: email,
            password: password,
            mobile: mobile,
            token: generateToken,
        };

        const config = {
            headers: {
                "Content-Type": "application/json",
                AuthToken: generateToken,
            },
        };

        const response = await axios.post(
            "http://localhost:3030/registration",
            data,
            config
        );

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log(error);
        // const { errors } = error.response.data
        // dispatch({
        //     type: Types.REGISTER_USER_FAIL,
        //     payload: errors
        // })
    }
};
const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            "Content-type": "Application/json",
        },
    };
    const newUser = {
        email,
        password,
    };
    const body = JSON.stringify(newUser);
    try {
        const response = await axios.post("/api/user/login", body, config);
        console.log(response);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data,
        });

        //dispatch(loadUser)
    } catch (error) {
        const errors = error.response.data.errors;
        let err = "";
        if (error.response.data.error) {
            err = error.response.data.error;
        }
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "danger"));
            });
        }
        if (err && err !== "") {
            console.log(err);

            dispatch(setAlert(err, "danger"));
        }
        dispatch({
            type: LOGIN_FAILED,
        });
    }
};
const loadUser = () => async (dispatch) => {
    // if (localStorage.token) {
    //     setAuthToken(localStorage.token);
    // }
    try {
        const response = await axios.get("/api/auth");
        dispatch({
            type: USER_LOADED,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};
const logout = () => async (dispatch) => {
    dispatch({
        type: CLEAR_PROFILE,
    });
    dispatch({
        type: LOGOUT,
    });
};

export { register, loadUser, login, logout };
