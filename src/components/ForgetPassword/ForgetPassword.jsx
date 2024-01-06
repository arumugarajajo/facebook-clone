import Footer from "../Footer/Footer";
import "./ForgetPassword.css";
import { useNavigate } from "react-router-dom";
function ForgetPassword() {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="continer">
      <div className="forgetPassword">
        <div className="wrapper">
          <div className="findYourAccount">
            <h2>Find Your Account</h2>
            <hr />
          </div>
          <div className="email-mobile-textArea">
            <p>
              Please enter your email address or mobile number to search for
              your account.
            </p>
            <input type="text" placeholder="Email address or mobile number" />
            {/* <hr /> */}
          </div>
          <div className="btnArea">
            <div className="btns">
              <button
                id="cancel"
                onClick={() => {
                  redirectToLogin();
                }}
              >
                Cancel
              </button>
              <button id="search">Search</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgetPassword;
