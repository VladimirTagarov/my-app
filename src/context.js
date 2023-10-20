import React from "react";
import { useState, useEffect, useContext } from "react";

export const UserContext = React.createContext({});

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (!user) {
    console.log("No user was found");
    return;
  }

  return user;
};

export const AuthorizedProvider = (props) => {
  const [regUser, setRegUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const value = { regUser, setRegUser, isLogin, setIsLogin };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
