import { Login } from "../auth/login";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { useHistory } from "react-router";
import { MdAddShoppingCart } from "react-icons/md";

const Navigation = () => {
  const state = useSelector((state) => {
    return {
      token: state.token.token,
    };
  });
  const token = localStorage.getItem("token");

  const [imageUser, setImageUser] = useState("");
  useEffect(() => {
    axios
      .get("https://c3megalodon.herokuapp.com/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setImageUser(result.data[0]);
      })
      .catch((err) => {});
  }, []);

  const history = useHistory();
  return (
    <>
      {!state.token ? (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
          style={{ height: "80px" }}
        >
          <Container>
            <Navbar.Brand>
              <Link to="/home">
                <Image
                  className="logo"
                  src="/logo.png"
                  width="45%"
                  height="45%"
                  onClick={() => history.push("/home")}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link
                    to="/review"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Review
                  </Link>
                </Nav.Link>
                <NavDropdown title="Our Sections" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link
                      to="/AllTrainers"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      Trainers
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/ALLGyms"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      Gyms
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/AllRestaurnats"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      Restaurants
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link>
                  <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
          style={{ height: "80px" }}
        >
          <Container>
            <Navbar.Brand>
              <Image
                className="logo"
                src="/logo.png"
                width="45%"
                height="45%"
                onClick={() => history.push("/home")}
                style={{ cursor: "pointer" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link
                    to="/review"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Review
                  </Link>
                </Nav.Link>
                <NavDropdown title="Our Sections" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link
                      to="/AllTrainers"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      Trainers
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/ALLGyms"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      Gyms
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/AllRestaurnats"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      Restaurants
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link>
                  <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Profile
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link
                    to="/logout"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Logout
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/cart"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Cart
                  </Link>
                  <MdAddShoppingCart size="1.2em" color="white" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
           
          </Container>{" "}
          {imageUser && imageUser.image !== null ? (
            <Image
              onClick={(e) => history.push("/profile")}
              src={imageUser && imageUser.image}
              width="35px"
              height="35px"
              style={{
                borderRadius: "100%",
                marginRight: "25px",
                border: "solid gray 1px",
                cursor: "pointer",
              }}
            />
          ) : (
            <Image
              onClick={(e) => history.push("/profile")}
              src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
              width="35px"
              height="35px"
              style={{
                borderRadius: "100%",
                marginRight: "25px",
                border: "solid gray 1px",
                cursor: "pointer",
              }}
            />
          )}
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
