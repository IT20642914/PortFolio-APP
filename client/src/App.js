import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
// import Home from "./pages/Home";
import CareerAdmin from "./pages/CareerAdmin/CareerAdmin";
import Login from "./pages/Login/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  name="Login" element={<Login />} />
        <Route path="/jobs" name="jobs" element={<Jobs />} />
        <Route path="/adminJobs" name="adminJobs" element={<CareerAdmin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
