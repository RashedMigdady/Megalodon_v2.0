import "./login.css";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../redux/action/loginToken";
import { addToCart } from "../../../redux/action/cart";
import { addSubscription } from "../../../redux/action/cart";
import swal from "sweetalert";
import { Col, Container, Row, Image } from "react-bootstrap";
import { serverAddress, HTTPServices } from "../../../Helper/HTTPMethod.Helper";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { showError } from "../../../Helper/Toastify.Helper";
import { useTitle } from '../../../Hooks/Title.Hook';
import { Button, TextField } from '@mui/material';
import { Spinner } from '../../../ShareComponents/SpinnerComponent/Spinner';
export const Login = () => {
  useTitle('Login');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [typeOfPasswordInput, setTypeOfPasswordInput] = useState('password');
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  const userLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await HTTPServices
      .post(`${serverAddress}/login/`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("savedData", JSON.stringify([]));
        localStorage.setItem("subscription", JSON.stringify([]));
        dispatch(setToken(res.data.token));
        dispatch(addSubscription([]));
        // dispatch(addToCart([]));
        if (res.data.role === "admin") {
          history.replace("/dashboard");
        } else {
          history.replace("/home");
        }
      })
      .catch((error) => {
        if (error) {
          showError('Email or Password incorrect, please try again')
        }
      });
    setIsLoading(false);
  };

  const onSuccess = async (res) => {
    await HTTPServices
      .post(`${serverAddress}/login/loginGoogle`, {
        tokenId: res.tokenId,
      })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("savedData", JSON.stringify([]));
          localStorage.setItem("subscription", JSON.stringify([]));
          dispatch(setToken(res.data.token));
          dispatch(addSubscription([]));
          //dispatch(addToCart([]));
          history.push("/home");
        } else throw Error;
      })
      .catch((err) => {
        showError('Email or Password incorrect, please try again')
      });
  };

  const onFailure = (res) => { };

  const restPassword = () => {
    swal({
      text: 'Please Enter your email".',
      content: "input",
      button: {
        text: "Send",
        closeModal: false,
      },
    }).then((email) => {
      if (!email) {
        swal.close();
        return;
      }

      HTTPServices
        .post(`${serverAddress}/login/restPass`, {
          email,
        })
        .then((results) => {
          swal({
            title: "Success",
            text: "Please check your email to get new password",
            icon: "success",
          });
        })

        .catch((err) => {
          if (err.response.data.success.status === 404) {
            swal("Oh noes!", `email doesn't exist`, "error");
          } else {
            swal("Oh noes!", "The request failed!", "error");
            swal.stopLoading();
            swal.close();
          }
        });
    });
  };

  return (
    <div className="section">
      <Spinner isActive={isLoading}/>
      <div className="imgBx">
        <img
          src="https://www.reviewsxp.com/blog/wp-content/uploads/2019/08/Best-gyms-in-jaipur-e1565704535975.jpg"
          alt="broken"
        />
      </div>
      <div className="contentBx">
        <div className="formBx">

          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="https://github.com/RashedMigdady/Megalodon_v2.0/blob/main/src/components/auth/login/logo.png?raw=true" rounded className="imgLogin" />
              </Col>
            </Row>
          </Container>
          <h2>LOGIN</h2>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={email}
            onChange={(event => setEmail(event.target.value))}
            type='email'
          />

          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            value={password}
            onChange={(event => setPassword(event.target.value))}
            type={typeOfPasswordInput}
          />
          <span className='eye-password'>
            {showPassword ?
              <AiOutlineEye
                onClick={() => { setShowPassword(false); setTypeOfPasswordInput('password'); }}
              /> :
              <AiOutlineEyeInvisible
                onClick={() => { setShowPassword(true); setTypeOfPasswordInput('text') }}
              />}
          </span>

          <div className="Button-login">
            <Button variant="outlined" color='warning' onClick={userLogin}>Login</Button>
          </div>
          <div className='forgot-password'>
            <span>Forgot <a className='forgot-button' onClick={restPassword} >{" "} password?</a>{" "}</span>
          </div>
          <div className="with-gmail">
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
