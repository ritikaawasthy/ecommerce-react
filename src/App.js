import "./App.css";
// import logo from "./logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SignupPage, LandingPage, LoginPage} from "./pages/index.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
       <Route path="/" element={<LandingPage/>} />
       <Route path="signup" element={<SignupPage />} />
       <Route path="signin" element={<LoginPage />} />
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
