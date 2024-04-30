import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
// import Home from "./pages/Home";
import CareerAdmin from "./pages/CareerAdmin/CareerAdmin";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" name="home" element={<Home />} /> */}
        <Route path="/jobs" name="jobs" element={<Jobs />} />
        <Route path="/adminJobs" name="adminJobs" element={<CareerAdmin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
