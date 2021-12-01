import React from "react";
import "./footer.css";
import "./About";
import { useHistory } from "react-router";

export const Footer = () => {
  const history = useHistory();
  return (
    <div class="footerfooter">
      <div class="contfooter">
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
