import React, { useState } from "react";
import "./Login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const redirectToSigninPage = () => {
    navigation("/signin");
  };
  return (
    <div className="container">
      <div className="login">
        <div className="leftPortion">
          <h2>facebook</h2>
          <p>
            Facebook helps you connect and share <br /> with the people in your
            life.
          </p>
        </div>
        <div className="rightPortion">
          <form action="#" className="form" onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Email address or phone number"
              className="email"
            />
            <div className="password-wrapper">
              <input
                type={!showPassword ? "text" : "password"}
                placeholder="Password"
                className="password"
              />

              {showPassword ? (
                <VisibilityOffIcon
                  className="password-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <VisibilityIcon
                  className="password-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

            <button className="btn" type="submit">
              Log in
            </button>
            <a href="/forgetPassword">Forgetten password?</a>
            <hr />
            <button onClick={redirectToSigninPage} className="btn create-btn">
              Create a new account
            </button>
          </form>
          <div className="createAPage">
            <span className="bold">Create a Page</span> for a celebrity, brand
            or business.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
