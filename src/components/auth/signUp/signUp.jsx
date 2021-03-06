import React, { useRef, useState } from "react";
import "./signUp.css";
import { useHistory } from "react-router-dom";
import { Overlay, Tooltip } from "react-bootstrap";
import { Col, Container, Row, Image } from "react-bootstrap";
import { register } from '../../../servicesMethods/AuthServices/signupServices';
import { showError } from "../../../Helper/Toastify.Helper";


export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const history = useHistory();

  const userRegister = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setShow(true);
    } else {
      const res = await register({ firstName, lastName, email, password });
      if (res && res.data && res.data.success)
        history.push("/login")
      else
        showError(res && res.data && res.data.message)
    }
  };

  return (
    <div className="section2">
      <div className="imgBox">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_10/3455164/210308-gym-masks-bd-2x1.jpg          "
          alt=""
        />
      </div>
      <div className="contentBox">
        <div className="formBox">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="https://github.com/RashedMigdady/Megalodon_v2.0/blob/main/src/components/auth/login/logo.png?raw=true" rounded className="imgSignUp" />
              </Col>
            </Row>
          </Container>
          <h2>Create Account</h2>

          <div className="inputBox">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <input
              ref={target}
              onClick={() => setShow(!show)}
              type="Password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Overlay
              className="tooltip"
              target={target.current}
              show={show}
              placement="left"
            >
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  must be 6 to 15 characters long.
                </Tooltip>
              )}
            </Overlay>
          </div>

          <div className="inputBox">
            <button className="submit" onClick={userRegister}>
              Sign up
            </button>
          </div>
          <div className="inputBox">
            <p>
              Do You have an account? <a href="/login" style={{ color: "black", textDecoration: "underline" }}> Login</a>{" "}
            </p>
          </div>
          <ul className="scil"></ul>
        </div>
      </div>
    </div>
  );
}
