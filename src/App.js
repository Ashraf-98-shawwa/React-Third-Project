import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import JobProvider from "./context/jobContext";

function App() {
  const { isAuthorized, setToken, setisAuthorized } = useAuthContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setisAuthorized(true);
    }
  }, [setToken, setisAuthorized]);

  return (
    <div className="App">
      <JobProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="/Login" />} />
            <Route
              path="/Login"
              element={isAuthorized ? <Navigate to="/Home" /> : <Login />}
            />
            <Route
              path="/Signup"
              element={isAuthorized ? <Navigate to="/Home" /> : <SignUp />}
            />
            <Route
              path="/Home"
              element={isAuthorized ? <Home /> : <Navigate to="/Login" />}
            />
          </Routes>
        </BrowserRouter>
      </JobProvider>
    </div>
  );
}

export default App;
