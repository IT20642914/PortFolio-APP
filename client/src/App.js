import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
// import Home from "./pages/Home";
import CareerAdmin from "./pages/CareerAdmin/CareerAdmin";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import SideNavBar from "./components/SideNav/SideNavBar";
import UserManagement from "./pages/UserManagement/UserManagement";
function App() {

  const ADminLayoutRoutes = ({ children }) => (
    <>
     <SideNavBar />
      {children}
    </>
  );
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  name="Login" element={<Login />} /> 
      <Route path="/signup"  name="SignUp" element={<SignUp />} />
      <Route path="/jobs" name="jobs" element={<Jobs />} />
      {/* Admin routes */}
           <Route path="/adminJobs" name="adminJobs" element={<ADminLayoutRoutes><CareerAdmin/></ADminLayoutRoutes>}/>
           <Route path="/UserManagement" name="adminJobs" element={<ADminLayoutRoutes><UserManagement/></ADminLayoutRoutes>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
