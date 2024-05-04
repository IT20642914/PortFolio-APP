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
import FeedbackUserView from "./pages/FeedbackUserView/FeedbackUserView";
import NavBar from "./components/shared/NavBar/NavBar";
import ClientReservation from "./pages/ClientReservation/ClientReservation";
import AdminReservation from "./pages/AdminReservation/AdminReservation";
import Footer from "./components/shared/Footer/Footer";
function App() {

  const ADminLayoutRoutes = ({ children }) => (
    <>
     <SideNavBar />
      {children}
     
    </>
  );
 const UserLayoutRoutes = ({ children }) => (
    <>
      <NavBar />
      {children}
      <Footer/>
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


            <Route path="/reservations" name="reservations" element={<ClientReservation/>} />

            {/* Feedback routes */}
           <Route path="/feedbackUser" name="UserFeedbacks" element={<UserLayoutRoutes><FeedbackUserView/></UserLayoutRoutes>}/>
              
            {/* Admin routes */}
            
           <Route path="/feedbackManagement" name="adminJobs" element={<ADminLayoutRoutes><FeedbackManagement/></ADminLayoutRoutes>}/>
           <Route path="/adminJobs" name="adminJobs" element={<ADminLayoutRoutes><CareerAdmin/></ADminLayoutRoutes>}/>
           <Route path="/UserManagement" name="adminJobs" element={<ADminLayoutRoutes><UserManagement/></ADminLayoutRoutes>}/>
           <Route path="/adminReservations" name="adminReservations" element={<ADminLayoutRoutes><AdminReservation/></ADminLayoutRoutes>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
