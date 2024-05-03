import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
// import Home from "./pages/Home";
import CareerAdmin from "./pages/CareerAdmin/CareerAdmin";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import SideNavBar from "./components/SideNav/SideNavBar";
import UserManagement from "./pages/UserManagement/UserManagement";

import Dashboard from './components/ContentDashboard';
import Add from './components/Add';
import MediaList from './components/MediaList';
import UpdateContent from './components/UpdateContent';
import SingleMedia from "./components/viewone";
import FeedbackManagement from "./pages/FeedbackManagement/FeedbackManagement";
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

            {/* mediaRoutes */}
             <Route path="/media" element={<Dashboard />} />
            <Route path="/media/view" element={<MediaList />} />
            <Route path="/media/add" element={<Add />} />
            <Route path="/media/update/:id" element={<UpdateContent />} />
            <Route path="/media/get/:id" element={<SingleMedia />} />


            {/* Admin routes */}
            
           <Route path="/feedbackManagement" name="adminJobs" element={<ADminLayoutRoutes><FeedbackManagement/></ADminLayoutRoutes>}/>

           <Route path="/adminJobs" name="adminJobs" element={<ADminLayoutRoutes><CareerAdmin/></ADminLayoutRoutes>}/>
           <Route path="/UserManagement" name="adminJobs" element={<ADminLayoutRoutes><UserManagement/></ADminLayoutRoutes>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
