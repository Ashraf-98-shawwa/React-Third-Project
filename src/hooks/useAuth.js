import { useEffect, useState } from "react";

const useAuth = (url) => {
  const searchedValues = JSON.parse(localStorage.getItem("searchValues")) || [];

  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setisAuthorized] = useState(false);
  const [Errors, setErrors] = useState([]);
  const [Token, setToken] = useState("");
  const [username, setusername] = useState("");
  const [searchValue, setSearchValue] = useState(searchedValues);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setisAuthorized(true);
    }
  }, [setToken, setisAuthorized]);

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
    searchValue,
    setSearchValue,
  };
};

export default useAuth;
