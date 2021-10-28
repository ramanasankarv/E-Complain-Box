import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3030',
  json: true
})


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  

  function signup(email, password,phone,fullname,callback) {
    return auth.createUserWithEmailAndPassword(email, password).then(function(user) {
      var user = auth.currentUser;
      let data={
        fullname:fullname,
        email:email,
        password:password,
        mobile:phone
      }
      auth.currentUser.getIdToken(true).then((idToken) => {
        client({
          method: 'post',
          url: '/registration',
          headers: {
            'AuthToken': idToken
          },
          data: data
        }).then((res) => {
          console.log(res);
          callback("success");
          //return "success";
          //this.response = res.data.message
        }).catch((error) => {
          this.response = error
        })
      }).catch((error) => {
        callback("fail");
        this.response = "Error getting auth token"
      });
       
    }, function(error) {
      console.log(error);
      callback("fail");
      //return "fail";
    });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
