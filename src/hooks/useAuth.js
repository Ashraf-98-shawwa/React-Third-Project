import { useState } from "react";

const useAuth = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setisAuthorized] = useState(false);
  const [Errors, setErrors] = useState([]);
  const [Token, setToken] = useState("");
  const [username, setusername] = useState("");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken("");
    setusername("");
    setisAuthorized(false);
  };

  return {
    isAuthorized,
    setisAuthorized,
    isLoading,
    setIsLoading,
    Errors,
    setErrors,
    Token,
    setToken,
    username,
    setusername,
    logout,
  };
};

export default useAuth;
