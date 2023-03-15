import React, { lazy, Suspense } from "react";
import JobProvider from "./context/jobContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { CircularProgress } from "@mui/material";
import ErrorBoundary from "./components/ErrorBoundary";


const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Filter = lazy(() => import("./pages/Filter"));
const Profile = lazy(() => import("./pages/Profile"));
const JobDetails = lazy(() => import("./pages/JobDetails"));



function App() {
  const { isAuthorized } = useAuthContext();
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
 
};
  
  return (
    <div className="App">
      <JobProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <Suspense
              fallback={<CircularProgress style={style} color="success" />}
            >
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
                  element={
                    isAuthorized ? <Profile /> : <Navigate to="/Login" />
                  }
                />
                <Route path="/Redirect" element={<Navigate to="/Profile" />} />
                <Route
                  path="/RedirectFilter"
                  element={<Navigate to="/Filter" />}
                />
                <Route
                  path="/JobDetails/:id"
                  element={
                    isAuthorized ? <JobDetails /> : <Navigate to="/Login" />
                  }
                />
                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      </JobProvider>
    </div>
  );
}

export default App;
