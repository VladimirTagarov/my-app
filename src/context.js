import React from "react";
import { useState, useContext } from "react";

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
  const [nameUser, setNameUser] = useState(null);

  const value = {
    regUser,
    setRegUser,
    isLogin,
    setIsLogin,
    nameUser,
    setNameUser,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
