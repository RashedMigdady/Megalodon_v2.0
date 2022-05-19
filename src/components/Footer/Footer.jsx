import React from "react";
import "./footer.css";
import "./About";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { GoLocation } from "react-bootstrap";
import { GoLocation, GoMail } from "react-icons/go";
import { useHistory } from "react-router";

export const Footer = () => {
  const history = useHistory();
  return (
    <div class="footerfooter">
      <div class="contfooter">
        <div style={{ display: "grid" }}>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "80px", height: "80px", marginRight: "20px" }}
              onClick={() => {
                history.push("/home");
              }}
              src="https://github.com/RashedMigdady/Megalodon_v2.0/blob/main/src/components/auth/login/logo.png?raw=true"
              alt="Megalodon logo"
            />{" "}
            <p
              style={{
                paddingTop: "40px",
                marginRight: "30px",
                color: "white",
              }}
              onClick={() => {
                history.push("/home");
              }}
            >
              MEGALODON
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <GoLocation
              style={{
                height: "20px",
                width: "20px",
                marginRight: "20px",
                color: "yellow",
              }}
            />
            <p style={{ color: "white" ,paddingBottom:"2px" }}>Jordan, Amman</p>
          </div>
          <div style={{ display: "flex" }}>
            <GoMail
              style={{
                height: "20px",
                width: "20px",
                marginRight: "20px",
                color: "yellow",
              }}
            />
            <p style={{ color: "white" ,paddingBottom:"2px"}}>rashedmeg231@gmail.com</p>
          </div>
        </div>
        <div class="row-footerfooter">
          <div class="col-footerfooter">
            <h4
              className="footer_h4"
              onClick={() => {
                history.push("/boutUs");
              }}
            >
              About us
            </h4>
            <ul>
              <li>
                <a href="">our location</a>
              </li>

              <li>
                <a href="">careers</a>
              </li>
              <li>
                <a href="">our services</a>
              </li>
              <li>
                <a href="">statements</a>
              </li>
            </ul>
          </div>
          <div class="col-footerfooter">
            <h4 className="footer_h4">Contact Us </h4>
            <ul>
              <li>
                <a href="">Cookies</a>
              </li>
              <li>
                <a href="">statements</a>
              </li>
              <li>
                <a href="">Our Products</a>
              </li>
              <li>
                <a href="">Payment options</a>
              </li>
            </ul>
          </div>
          <div class="col-footerfooter">
            <h4
              className="footer_h4"
              onClick={() => {
                history.push("/ourPolicy");
              }}
            >
              Our Policy
            </h4>
            <ul>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Our Rules</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Gym Safety</a>
              </li>
            </ul>
          </div>
          <div class="col-footerfooter">
            <h4 className="footer_h4">Partners</h4>
            <ul>
              <li>
                <a href="">Our Members</a>
              </li>
              <li>
                <a href="">Gyms</a>
              </li>
              <li>
                <a href="">Resturants</a>
              </li>
              <li>
                <a href="">Trainers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
