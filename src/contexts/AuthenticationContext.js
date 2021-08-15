import React, { useState, createContext } from "react";
// eslint-disable-next-line
import { login, signup } from "../api/api";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  };

  const authenticate = async (username, password) => {
    //const result = login(username, password);

    const result = {
      message: "User successfully logged in.",
      token:
        "BEARER eyJhbGciOiJIUzI1NiJ9.Mjc4Mjk1MjQwMzE.udr2pqWiHyVwfp3MwjbgpHSH7ZZzERRGqgzeDHqSVx4",
    };

    if (result.token) {
      setToken(result.token);
      setIsAuthenticated(true);
      setUserName(username);
    } else {
      console.log(result);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    return result.code === 201 ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
