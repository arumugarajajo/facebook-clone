import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Footer.css";
function Footer() {
  return (
    <div className="loginFooter">
      <div className="language">
        <ul>
          <li>
            <a href="#">English (UK)</a>
          </li>
          <li>
            <a href="#">தமிழ்</a>
          </li>
          <li>
            <a href="#">తెలుగు</a>
          </li>
          <li>
            <a href="#">ಕನ್ನಡ</a>
          </li>
          <li>
            <a href="#">اردو</a>
          </li>
          <AddIcon className="add" />
        </ul>
        <hr />
      </div>
      <div>Meta © 2024</div>
    </div>
  );
}

export default Footer;
