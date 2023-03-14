import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import JobProvider from "./context/jobContext";
import Filter from "./pages/Filter";
import Profile from "./pages/Profile";
import JobDetails from "./pages/JobDetails";

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
            <Route
              path="/Filter"
              element={isAuthorized ? <Filter /> : <Navigate to="/Login" />}
            />
            <Route
              path="/Profile"
              element={isAuthorized ? <Profile /> : <Navigate to="/Login" />}
            />
            <Route path="/Redirect" element={<Navigate to="/Profile" />} />
            <Route
              path="/JobDetails/:id"
              element={isAuthorized ? <JobDetails /> : <Navigate to="/Login" />}
            />
          </Routes>
        </BrowserRouter>
      </JobProvider>
    </div>
  );
}

export default App;
