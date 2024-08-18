import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
const useAuth = () => {
  const { authInfo } = useContext(AuthContext);
  console.log(authInfo);
  return authInfo;
};

export default useAuth;
