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
import { auth,storage } from "../../firebase";
import axios from "axios";
// import setAuthToken from "../utills/setAuthToken" https://e-complainbox.herokuapp.com
const client = axios.create({
  baseURL: "https://e-complainbox.herokuapp.com",
  json: true,
});

const register =
  ({ fullname, email, password, mobile }, history) =>
  async (dispatch) => {
    try {
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
        method: "post",
        url: "/registration",
        headers: {
          AuthToken: generateToken,
        },
        data: data,
      });
      console.log(response.data.message);
      localStorage.setItem("token", generateToken);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data.message,
      });
      //push('/email-verification');
      history.push("/email-verification");
    } catch (error) {
      console.log(error);
    }
  };
const login =
  ({ email, password }, history) =>
  async (dispatch) => {
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

    let idToken =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmYmRmMjQxZTdjM2E2NTEzNTYwNmRkYzFmZWQyYzU1MjI2MzBhODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyc3QtcHJvamVjdC0yOWRkMSIsImF1ZCI6ImZpcnN0LXByb2plY3QtMjlkZDEiLCJhdXRoX3RpbWUiOjE2MzQ5MjQzMDUsInVzZXJfaWQiOiJScXJhMGd0aEk0UmlnY3lxRVZHZEowYnd0VkYzIiwic3ViIjoiUnFyYTBndGhJNFJpZ2N5cUVWR2RKMGJ3dFZGMyIsImlhdCI6MTYzNDkyNTE0MCwiZXhwIjoxNjM0OTI4NzQwLCJlbWFpbCI6InJhbWFuYXNhbmthcnZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInJhbWFuYXNhbmthcnZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.bvChf2MvgobFjw5SL0dSpNGcFyVhFQcEQLU83m1axsk_k_bgpoI8dCA8I_PvCujihltXWXeNpnRJXxUffsk_51o8o06y9GVzrduL1-nOvuNNFFvv7XEJK1RFol746EU2Pk6tJVnSL2ZOxFqAQONxw6kpHNj3xdcskK1s3iv7kHroBbs15F0M_y_19_yGS0cVzkO31HCRUhbF43cwyiw6gQV3XAlwhQjPfcYOzDZQq5jwSy08_OFgLLcdqp9UT4t4bq-zthUkWa6WFCo57vqZLYjVEdQsipl4FFhkcYfWW8sJlHxBzby83ZRf10uktJg3mZRi0hnJZmSy3y10Qz0SJw";

    if (isValidPhone) {
      let data = {
        mobile: email,
      };
      const res = await client({
        method: "post",
        url: "/getemailbymobile",
        headers: {
          AuthToken: idToken,
        },
        data: data,
      });

      email = res.data.userEmail;
    }
    try {
      await auth.signInWithEmailAndPassword(email, password);
      const generateToken = await auth.currentUser.getIdToken(true);
      localStorage.setItem("token", generateToken);
      let data = {
        email: email,
      };
      const response = await client({
        method: "post",
        url: "/userdata",
        headers: {
          AuthToken: generateToken,
        },
        data: data,
      });
      console.log(response.data.user[0]);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.user[0],
      });
      console.log(response);
      if (localStorage.getItem("userIsEmailVerified") == "No") {
        history.push("/email-verification");
      } else if (localStorage.getItem("userIsMobileVerified") == "No") {
        history.push("/mobile-verification");
      } else {
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };

const emailverifications =
  ({ OTP }) =>
  async (dispatch) => {
    try {
      let data = {
        email: localStorage.getItem("userEmail"),
        docId: localStorage.getItem("userID"),
        otp: OTP,
      };
      const response = await client({
        method: "post",
        url: "/emailverification",
        headers: {
          AuthToken: localStorage.getItem("token"),
        },
        data: data,
      });
      if (response.data.message == "success") {
        localStorage.setItem("userIsEmailVerified", "Yes");
        window.location.href = "/mobile-verification";
      } else {
        //('Invalid OTP!');
        //dispatch(setAlert("Invalid OTP", "danger"));
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

const mobileverifications =
  ({ OTP }) =>
  async (dispatch) => {
    try {
      let data = {
        email: localStorage.getItem("userEmail"),
        docId: localStorage.getItem("userID"),
        otp: OTP,
      };
      const response = await client({
        method: "post",
        url: "/mobileverification",
        headers: {
          AuthToken: localStorage.getItem("token"),
        },
        data: data,
      }).then(function (response) {
        console.log(response.data.message);
        if (response.data.message == "success") {
          localStorage.setItem("userIsMobileVerified", "Yes");
          window.location.href = "/dashboard";
        } else {
          //dispatch(setAlert("Invalid OTP", "danger"));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

const loadUser = () => async (dispatch) => {
  // if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  // }
  try {
    let data = {
      email: localStorage.getItem("userEmail"),
    };
    const response = await client({
      method: "post",
      url: "/userdata",
      headers: {
        AuthToken: localStorage.getItem("token"),
      },
      data: data,
    });
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

const imageupload = ({ files,city,department, complainType, severity, subject,description },urls, setUrls, history)=> async (dispatch) => {
  const promises = [];
  //image=files;
  files.map((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
  });

  await Promise.all(promises)
      .then(() => {
        console.log(urls);
      })
      .catch((err) => console.log(err));
      console.log(urls)
      let data = {
        city: city,
        department: department,
        description:description,
        subject: subject,
        userid: localStorage.getItem("userID"),
        urls: urls,
        token: localStorage.getItem("token"),
      };

      client({
        method: "post",
        url: "/createcomplaint",
        headers: {
          AuthToken: localStorage.getItem("token"),
        },
        data: data,
      }).then(()=>{
        history.push('/dashboard')
      });
};

export {
  register,
  loadUser,
  login,
  logout,
  emailverifications,
  mobileverifications,
  imageupload,
};
