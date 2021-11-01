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

//import { setAlert } from "./alert";
import { auth } from "../../firebase";
import axios from "axios";
// import setAuthToken from "../utills/setAuthToken" https://e-complainbox.herokuapp.com
const client = axios.create({
    baseURL: "https://e-complainbox.herokuapp.com",
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
        //debugger;
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

        const response = await client({
            method: 'post',
            url: '/registration',
            headers: {
                'AuthToken': generateToken
            },
            data: data
        })
        console.log(response.data.message);
        localStorage.setItem("token", generateToken);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data.message,
        });
        //push('/email-verification');
        window.location.href = '/email-verification';
    } catch (error) {
        console.log(error);
    }
};
const login = ({email, password}) => async (dispatch) => {
    const config = {
        headers: {
            "Content-type": "Application/json",
        },
    };
    const newUser = {
        email,
        password,
    };
    const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement

    let isValidPhone = phoneRegex.test(email); //

    let idToken="eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmYmRmMjQxZTdjM2E2NTEzNTYwNmRkYzFmZWQyYzU1MjI2MzBhODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyc3QtcHJvamVjdC0yOWRkMSIsImF1ZCI6ImZpcnN0LXByb2plY3QtMjlkZDEiLCJhdXRoX3RpbWUiOjE2MzQ5MjQzMDUsInVzZXJfaWQiOiJScXJhMGd0aEk0UmlnY3lxRVZHZEowYnd0VkYzIiwic3ViIjoiUnFyYTBndGhJNFJpZ2N5cUVWR2RKMGJ3dFZGMyIsImlhdCI6MTYzNDkyNTE0MCwiZXhwIjoxNjM0OTI4NzQwLCJlbWFpbCI6InJhbWFuYXNhbmthcnZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJhbWFuYXNhbmthcnZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.bvChf2MvgobFjw5SL0dSpNGcFyVhFQcEQLU83m1axsk_k_bgpoI8dCA8I_PvCujihltXWXeNpnRJXxUffsk_51o8o06y9GVzrduL1-nOvuNNFFvv7XEJK1RFol746EU2Pk6tJVnSL2ZOxFqAQONxw6kpHNj3xdcskK1s3iv7kHroBbs15F0M_y_19_yGS0cVzkO31HCRUhbF43cwyiw6gQV3XAlwhQjPfcYOzDZQq5jwSy08_OFgLLcdqp9UT4t4bq-zthUkWa6WFCo57vqZLYjVEdQsipl4FFhkcYfWW8sJlHxBzby83ZRf10uktJg3mZRi0hnJZmSy3y10Qz0SJw";

    if(isValidPhone){
        let data={
            mobile:email
        }
        const res = await client({
            method: 'post',
            url: '/getemailbymobile',
            headers: {
              'AuthToken': idToken
            },
            data: data
        });

        email = res.data.userEmail;
    }
    try {
        const login = await auth.signInWithEmailAndPassword(email, password);

        const generateToken = await auth.currentUser.getIdToken(true);
        localStorage.setItem("token", generateToken);
        let data={
            email:email
        }
        const response = await client({
            method: 'post',
            url: '/userdata',
            headers: {
                'AuthToken': generateToken
            },
            data: data
        })
        console.log(response.data.user[0]);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data.user[0],
        });
        console.log(response);
        if(localStorage.getItem("userIsEmailVerified")=="No"){
            window.location.href = '/email-verification';
        } else if(localStorage.getItem("userIsMobileVerified")=="No"){
            window.location.href = '/mobile-verification';   
        } else{
            window.location.href = '/dashboard';
        }

    } catch (error){
        console.log(error)
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
   
const emailverifications = ({OTP}) => async (dispatch) =>{
    try {
        let data ={
            email: localStorage.getItem("userEmail"),
            docId: localStorage.getItem("userID"),
            otp: OTP,
        }
        const response = await client({
            method: 'post',
            url: '/emailverification',
            headers: {
                'AuthToken': localStorage.getItem("token")
            },
            data: data
        })
        if(response.data.message=="success"){
            localStorage.setItem("userIsEmailVerified", "Yes"); 
            window.location.href = '/mobile-verification';   
        }else{
            //('Invalid OTP!');
            //dispatch(setAlert("Invalid OTP", "danger"));
        }
        console.log(response);
    } catch (error){
        console.log(error)  
    }
};

const mobileverifications = ({OTP}) => async (dispatch) =>{
    try {
        let data ={
            email: localStorage.getItem("userEmail"),
            docId: localStorage.getItem("userID"),
            otp: OTP,
        }
        const response = await client({
            method: 'post',
            url: '/mobileverification',
            headers: {
                'AuthToken': localStorage.getItem("token")
            },
            data: data
        }).then(function (response) {
            console.log(response.data.message)
            if(response.data.message=="success"){
                localStorage.setItem("userIsMobileVerified", "Yes"); 
                window.location.href = '/dashboard';   
            }else{
                //dispatch(setAlert("Invalid OTP", "danger"));    
            }
        });
    } catch (error){
        console.log(error)  
    }
};

const loadUser = () => async (dispatch) => {
    // if (localStorage.token) {
    //     setAuthToken(localStorage.token);
    // }
    try {
        let data={
            email:localStorage.getItem("userEmail")
        }
        const response = await client({
            method: 'post',
            url: '/userdata',
            headers: {
                'AuthToken': localStorage.getItem("token")
            },
            data: data
        })
        console.log(response.data.user[0]);
        dispatch({
            type: USER_LOADED,
            payload: response.data.user[0],
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};
const logout = () => async (dispatch) => {
    await auth.signOut();
    dispatch({
        type: CLEAR_PROFILE,
    });
    dispatch({
        type: LOGOUT,
    });
};

export { register, loadUser, login, logout, emailverifications, mobileverifications };
