import React, { useState } from "react";
import "./Signin.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [showPassword, setShowPassword] = useState(true);
  const [customGender, setcustomGender] = useState(true);
  const navigate = useNavigate();
  const handleCustomGender = () => {
    setcustomGender(true);
  };
  const redirectToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="signin">
      <div className="wrapper">
        <form action="#" className="signinForm">
          <div className="header">
            <div className="headerLeft">
              <span className="heading">Sign up</span>
              <span>Its quick and easy</span>
            </div>
            <div className="headerRight">
              <CloseIcon
                onClick={() => {
                  redirectToLoginPage();
                }}
              />
            </div>
          </div>
          <hr />
          <div className="inputArea">
            <div className="nameDetails">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Surname" />
            </div>
            <div className="mobilePasswordArea">
              <div className="mobile">
                <input
                  type="email"
                  placeholder="Mobile number or email address"
                />
              </div>
              <div className="passwordField">
                <input
                  type={!showPassword ? "text" : "password"}
                  placeholder="New password"
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
            </div>
            <div className="dateOfBirth">
              <div className="header">
                <p>
                  Date of birth
                  <span>
                    <HelpIcon className="icon" />
                  </span>
                </p>
              </div>
              <div className="dateFields">
                {/* Day selection */}
                <select className="dateArea" name="day" id="day">
                  {[...Array(31).keys()].map((day) => (
                    <option key={day + 1} value={day + 1}>
                      {day + 1}
                    </option>
                  ))}
                </select>

                {/* Month selection */}
                <select className="dateArea" name="month" id="month">
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>

                {/* Year selection */}
                <select
                  className="dateArea"
                  name="year"
                  id="year"
                  defaultValue="2000"
                >
                  {[...Array(45).keys()].map((year) => (
                    <option key={year + 1980} value={year + 1980}>
                      {year + 1980}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="genderField">
              <div className="header">
                <p>
                  Gender
                  <span>
                    <HelpIcon className="icon" />
                  </span>
                </p>
              </div>
              <div className="genderDetails">
                <div className="genderArea">
                  <label htmlFor="custom">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="gender"
                    onClick={() => handleCustomGender()}
                  />
                </div>
                <div className="genderArea">
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="gender"
                    onClick={() => handleCustomGender()}
                  />
                </div>

                <div className="genderArea custom">
                  <label htmlFor="custom">Custom</label>
                  <input
                    type="radio"
                    name="gender"
                    value="custom"
                    className="gender"
                    onClick={() => setcustomGender(!customGender)}
                  />
                </div>
              </div>
              {customGender ? (
                ""
              ) : (
                <div className="customerGender">
                  <select
                    name="customerGenderFields"
                    id="customerGenderFields"
                    className="customerGenderFields"
                  >
                    <option value="" disabled selected>
                      Select an option
                    </option>
                    <option value="she">She : Wish her a happy birthday</option>
                    <option value="He">He : Wish him a happy birthday</option>
                    <option value="They">
                      They : Wish them a happy birthday
                    </option>
                  </select>
                  <p>Your pronoun is visible to everyone.</p>
                  <input
                    type="text"
                    placeholder="Gender (Optional)"
                    className="genderCustomerText"
                  />
                </div>
              )}
            </div>
            <div className="info">
              <p>
                People who use our service may have uploaded your contact
                information to Facebook.
                <span className="link"> Learn more. </span>
              </p>
            </div>
            <div className="privacyPolicy">
              <p>
                By clicking Sign Up, you agree to our <span>Terms, </span>
                <span className="link">Privacy Policy </span>
                and
                <span className="link"> Cookies Policy.</span>
                You may receive SMS notifications from us and can opt out at any
                time.
              </p>
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
