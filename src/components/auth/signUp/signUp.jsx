import React, { useRef, useState } from "react";
import "./signUp.css";
import { useHistory } from "react-router-dom";
import { Overlay, Tooltip } from "react-bootstrap";
import { Col, Container, Row, Image } from "react-bootstrap";
import { register } from '../../../servicesMethods/AuthServices/signupServices';
import { showError } from "../../../Helper/Toastify.Helper";
import { useTitle } from '../../../Hooks/Title.Hook';
import { TextField } from '@mui/material';


export const Register = () => {
  useTitle('Register')
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const userRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password.length < 6) {
      setShow(true);
    } else {
      const res = await register({ firstName, lastName, email, password });
      if (res && res.data && res.data.success)
        history.push("/login")
      else
        showError(res && res.data && res.data.message)
    }
    setIsLoading(false);
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

          <div className="inputBo">
            <TextField
              id="standard-basic"
              label="First name"
              variant="standard"
              value={firstName}
              onChange={(event => setFirstName(event.target.value))}
              type='text'
            />
          </div>
          <div className="inputBo">
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              value={lastName}
              onChange={(event => setLastName(event.target.value))}
              type='text'
            />
          </div>
          <div className="inputBo">
        
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              value={email}
              onChange={(event => setEmail(event.target.value))}
              type='email'
            />
          </div>
          <div className="inputBo">
             <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              value={password}
              onChange={(event => setPassword(event.target.value))}
              type='password'
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

          <div className="inputBo">
            <button className="submit" onClick={userRegister}>
              Sign up
            </button>
          </div>
          <div className="inputBo">
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
