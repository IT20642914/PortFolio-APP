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
import MyFeedBacks from "./pages/MyFeedBacks/MyFeedBacks";

import PortfolioAdmin from './components/PortfolioAdmin';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import AddImage from './pages/AddImage';
import UserUi from './pages/UserUI';
import Home from './pages/Home';
import Portfolio from './pages/User_UI/U_Pages/Portfolio';
import Admin from './pages/User_UI/U_Pages/Admin';
import Gallery from './pages/User_UI/U_Pages/Gallery';
import Services from './pages/User_UI/U_Pages/services';
import EditForm from './components/EditForm';
import Email from './components/email';
import Servisespage from './pages/servisespage';
import Vchat from './pages/User_UI/U_Pages/vchat';

import UserMediaContent from './pages/UserMediaContent/UserMediaContent';
import MediaManagement from "./pages/MediaManagement/MediaManagement";
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
      {/* <Route path="/jobs" name="jobs" element={<Jobs />} /> */}
      <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/add" element={<CreatePost />} />
        <Route path="/addimage" element={<AddImage />} />
        <Route path="/UserUi" element={<UserUi />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/email" element={<Email/>} />
        <Route path="/vchat" element={<Vchat />} />
        <Route path="/servicespage" element={<Servisespage />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/editpost/:id" element={<EditForm />} />
        <Route path="/userui/:bio" component={UserUi} />
        <Route path="/userui/:bio" component={UserUi} /> */}
         <Route path="/jobs" element={<UserLayoutRoutes><Jobs/></UserLayoutRoutes>} />

         <Route path="/home" element={<UserLayoutRoutes><Home/></UserLayoutRoutes>} />
        <Route path="/portfolios" element={<UserLayoutRoutes><Portfolio/></UserLayoutRoutes>} />
      <Route path="/services" element={<UserLayoutRoutes><Services/></UserLayoutRoutes>} />
      <Route path="/Gallery" element={<UserLayoutRoutes><Gallery/></UserLayoutRoutes>} />
      <Route path="/add" element={<UserLayoutRoutes><CreatePost/></UserLayoutRoutes>} />
      <Route path="/addimage" element={<UserLayoutRoutes><AddImage/></UserLayoutRoutes>} />
      <Route path="/UserUi" element={<UserLayoutRoutes><UserUi/></UserLayoutRoutes>} />
      <Route path="/admin" element={<UserLayoutRoutes><Admin/></UserLayoutRoutes>} />
      <Route path="/email" element={<UserLayoutRoutes><Email/></UserLayoutRoutes>} />
      <Route path="/vchat" element={<UserLayoutRoutes><Vchat/></UserLayoutRoutes>} />
      <Route path="/servicespage" element={<UserLayoutRoutes><Servisespage/></UserLayoutRoutes>} />
      <Route path="/post/:id" element={<UserLayoutRoutes><PostDetails/></UserLayoutRoutes>} />
      <Route path="/editpost/:id" element={<UserLayoutRoutes><EditForm/></UserLayoutRoutes>} />
      <Route path="/userui/:bio" element={<UserLayoutRoutes><UserUi/></UserLayoutRoutes>} />
      <Route path="/userui/:bio" element={<UserLayoutRoutes><UserUi/></UserLayoutRoutes>} />
        <Route path="/home" name="home" element={<UserLayoutRoutes><Home/></UserLayoutRoutes>}/>
          
          {/* mediaRoutes */}
        <Route path="/media" name="media" element={<UserLayoutRoutes><UserMediaContent/></UserLayoutRoutes>}/>

         
             {/* <Route path="/media" element={<Dashboard />} /> */}
            {/* <Route path="/media/view" element={<MediaList />} />
            <Route path="/media/add" element={<Add />} />
            <Route path="/media/update/:id" element={<UpdateContent />} />
            <Route path="/media/get/:id" element={<SingleMedia />} /> */}



            {/* UserRoutes*/}
           <Route path="/feedbackUser" name="UserFeedbacks" element={<UserLayoutRoutes><FeedbackUserView/></UserLayoutRoutes>}/>
           <Route path="/myFeedBacks" name="UserFeedbacks" element={<UserLayoutRoutes><MyFeedBacks/></UserLayoutRoutes>}/>
           <Route path="/reservations" name="reservations" element={<UserLayoutRoutes><ClientReservation/></UserLayoutRoutes>}/>
         
           
                       
                {/* Admin routes */}
           <Route path="/MediaManagement" name="MediaManagement" element={<ADminLayoutRoutes><MediaManagement/></ADminLayoutRoutes>}/>
           <Route path="/feedbackManagement" name="adminJobs" element={<ADminLayoutRoutes><FeedbackManagement/></ADminLayoutRoutes>}/>
           <Route path="/adminJobs" name="adminJobs" element={<ADminLayoutRoutes><CareerAdmin/></ADminLayoutRoutes>}/>
           <Route path="/UserManagement" name="adminJobs" element={<ADminLayoutRoutes><UserManagement/></ADminLayoutRoutes>}/>
           <Route path="/PortfolioAdmin" name="PortfolioAdmin" element={<ADminLayoutRoutes><PortfolioAdmin/></ADminLayoutRoutes>}/>
       
          <Route path="/adminReservations" name="adminReservations" element={<ADminLayoutRoutes><AdminReservation/></ADminLayoutRoutes>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

