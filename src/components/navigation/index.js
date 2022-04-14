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
// import { serverAddress, HTTPServices } from "../../Helper/HTTPMethod.Helper";
import { useHistory } from "react-router";
import { MdAddShoppingCart } from "react-icons/md";
import { GetuserProfile } from '../../servicesMethods/UsersServices/usersServices';

const Navigation = () => {
  const state = useSelector((state) => {
    return {
      token: state.token.token,
    };
  });

  const [imageUser, setImageUser] = useState("");
  useEffect(async () => {
    const res = await GetuserProfile();
    if (res)
    console.log("x",typeof(res));
      // setImageUser(res.data[0]);

  }, []);

  const history = useHistory();
  return (
    <>
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
                src="https://github.com/RashedMigdady/Megalodon_v2.0/blob/main/src/components/auth/login/logo.png?raw=true"
                width="55%"
                height="55%"
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
                <NavDropdown.Item onClick={e => { history.push("/AllTrainers") }}>
                  <Link
                    to="/AllTrainers"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Trainers
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={e => { history.push("/ALLGyms") }}>
                  <Link
                    to="/ALLGyms"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    Gyms
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={e => { history.push("/AllRestaurnats") }}>
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
              {!state.token ? <Nav.Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Nav.Link> : <Nav.Link>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Profile
                </Link>
              </Nav.Link>}

              {!state.token ? <Nav.Link eventKey={2}>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register
                </Link>
              </Nav.Link> : <>
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
                </Nav.Link></>}
            </Nav>
          </Navbar.Collapse>
        </Container>
        {state.token ? <Image
          onClick={() => history.push('/profile')}
          src={imageUser && imageUser.image !== null ? imageUser && imageUser.image : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"}
          width="35px"
          height="35px"
          style={{
            borderRadius: "100%",
            marginRight: "25px",
            border: "solid gray 1px",
            cursor: "pointer",
          }}
        /> : <div></div>}
      </Navbar>
    </>
  );
};

export default Navigation;
