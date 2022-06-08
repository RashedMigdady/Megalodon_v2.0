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
import {AiOutlineEye} from 'react-icons/ai';
import { showError } from "../../../Helper/Toastify.Helper";
export const Login = () => {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  const userLogin = async (e) => {
    e.preventDefault();
    await HTTPServices
      .post(`${serverAddress}/login/login`, {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("token", token);
        localStorage.setItem("savedData", JSON.stringify([]));
        localStorage.setItem("subscription", JSON.stringify([]));
        dispatch(setToken(res.data.token));
        dispatch(addSubscription([]));
        // dispatch(addToCart([]));
        if (res.data.role === "admin") {
          history.push("/dashboard");
        } else {
          history.push("/home");
        }
      })

      .catch((error) => {
        if (error) {
          showError('Email or Password incorrect, please try again')
        }
      });
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

  const onFailure = (res) => {};

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

          <div className="inputBx">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <AiOutlineEye/>
          </div>

          <div className="inputBx">
            <button className="" onClick={userLogin}>
              Sign In
            </button>
          </div>
          <div className="inputBx">
            <div>
              <p style={{display:"flex" , marginLeft:"30%"}}>
                <a style={{ fontSize:"15px"}}> Forget your  </a><a onClick={restPassword} style={{fontSize:"15px" , textDecoration:"underline" , marginLeft:"5px"}}>{" "} Password?</a>{" "}
              </p>
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
    </div>
  );
};
