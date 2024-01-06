import "./App.css";
import Login from "./components/LoginAndSignin/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
