import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Carousel } from "react-bootstrap";
import { Products } from "../products/product.jsx";
import { AddComment } from "../comment/comment.jsx";
import icon1 from "../../imeges/icon-1.png";
import icon2 from "../../imeges/icon-2.png";
import icon3 from "../../imeges/icon-3.png";
import "./main.css";
import { useHistory } from "react-router";

export const Main = () => {
  const history = useHistory();
  const styleButton = {
    width: "60%",
    fontSize: "16px",
    backgroundColor: "#ffcd08",
    color: "black",
    border: "none",
    marginLeft: "20%"
  }
  return (
    <div>
      <div className="landing">
        <div className="landText">
          <h2 className="h2_Main">
            WELCOME TO - <br />
            MEGALODON
          </h2>
          <p className="pMain">
            We’re excited to have you on board! You’ve taken the first step
            towards achieving your fitness goals
          </p>
          <button
            className="button"
            onClick={() => {
              history.push("./register");
            }}
          >
            {" "}
            Join us{" "}
          </button>
          <button
            className="button1"
            onClick={() => {
              history.push("./aboutUs");
            }}
          >
            {" "}
            About us{" "}
          </button>
        </div>
      </div>

      <div className="featuresMain">
        <div className="titleMain">
          <h1>SET HIGH FITNESS GOALS</h1>
          <p>
            After you decide to start training we will make sure you get the
            best fitness program. Our sport experts and latest sports equipment
            are the winning combination.
          </p>
        </div>
        <div className="containerMain">
          <div className="featMain">
            <img src={icon1} alt="!!" />
            <h5>QUALITY EQUIPMENT</h5>
            <p>
              You won’t find any better one-hour fitness workout. You will lose
              fat while also building lean muscle .
            </p>
          </div>
          <div className="featMain">
            <img src={icon2} alt="!!" />

            <h5>UNIQUE TO YOUR NEEDS</h5>
            <p>
              Sport can help us feel fitter, healthier and mentally strong, and
              that is just the start of it. Sport can also be fun, especially
              when played as part of a team or with family or friends
            </p>
          </div>
          <div className="featMain">
            <img src={icon3} alt="!!" />
            <h5>HEALTHY NUTRITION PLAN</h5>
            <p>
              Eating a variety of foods and consuming less salt, sugars and
              saturated and industrially-produced trans-fats, are essential for
              healthy diet.
            </p>
          </div>
        </div>
      </div>
      <div className="Main-text-center">
        <div className="container">
          <div className="titleMain">
            <h1>OUR SERVICES </h1>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <Card
                className="cardS"
                style={{ textAlign: "left", height: "490px" }}
              >
                <Card.Img
                  variant="top"
                  src="https://www.challengeacad.com/wp-content/uploads/2021/05/personaltrainer_0.jpg"
                  height="250px"
                  width="350px"
                />
                <Card.Body>
                  <Card.Title>Trainers</Card.Title>
                  <Card.Text style={{ fontSize: "16px" }}>
                    Being educated while exercising is essential in maximizing
                    effectiveness and reducing risk of injury. A personal
                    trainer will teach you everything . join us now and be
                    amember of us !
                  </Card.Text>
                  <Button
                    style={styleButton}
                    variant="dark"
                    onClick={() => history.push("/Trainers")}
                  >
                    Find Your Trainer{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12">
              <Card
                className="cardS"
                style={{ textAlign: "left", height: "490px" }}
              >
                <Card.Img
                  variant="top"
                  src="https://assets.gqindia.com/photos/61e9413280921e2614920381/master/pass/top-image-01%20(35).jpg"
                  height="250px"
                  width="350px"
                />
                <Card.Body>
                  <Card.Title>Restaurants</Card.Title>
                  <Card.Text style={{ fontSize: "16px" }}>
                    The food you eat can eather be either the safest and most
                    powerful form of midicine OR the slowest form of poison Dont
                    forget that health needs healthy food, and more .
                  </Card.Text>
                  <Button
                    style={styleButton}
                    className="btnAll"
                    variant="dark"
                    onClick={() => history.push("/Restaurnats")}
                  >
                    Find Your Restaurant{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 col-sm-12">
              <Card
                className="cardS"
                style={{ textAlign: "left", height: "490px" }}
              >
                <Card.Img
                  variant="top"
                  src="https://www.raffles.com/assets/0/72/1930/1931/1945/c2ffca4f-123c-4907-81c9-13bb8a859540.jpg"
                  height="250px"
                  width="350px"
                />
                <Card.Body>
                  <Card.Title>Gyms</Card.Title>
                  <Card.Text style={{ fontSize: "16px" }}>
                    Joining a gym can help you stay motivated to exercise
                    consistently. This is a great way to build muscle, lose
                    weight, lower blood pressure, boost mental focus, and more .
                  </Card.Text>
                  <Button
                    style={styleButton}
                    variant="dark"
                    onClick={() => history.push("/Gyms")}
                  >
                    Find Your Gym
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="Main-Stories">
        <div className="container">
          <Carousel fade>
            <Carousel.Item className="line">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5>
                    “ If something stands between you and your success, move it.
                    Never be denied.”
                  </h5>
                </div>
                <img
                  className="d-block w-100"
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f298efbe2252631e7028543%2FA-woman-working-out-in-a-gym%2F960x0.jpg%3Ffit%3Dscale"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item className="line">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5>
                    “ Your diet is a bank account, Good food choices are good
                    investments.”
                  </h5>
                </div>
                <img
                  className="d-block w-100"
                  src="https://media.self.com/photos/5fe36191fa75923c77cd821f/4:3/w_2560%2Cc_limit/GettyImages-1128962609.jpg"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item className="line">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5>
                    “ Take a deep breath and believe in your trainer, they will
                    keep u motivated”
                  </h5>
                </div>
                <img
                  className="d-block w-100"
                  src="https://cdn.crello.com/api/media/medium/194375538/stock-photo-male-personal-trainer-helping-young"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item className="line">
              <div className="Slider-Show">
                <div className="fundmeText">
                  <h5>
                    “ Exercise is a celebration of what your body can do, Not a
                    punishment for what you ate.”{" "}
                  </h5>
                </div>
                <img
                  className="d-block w-100"
                  src="https://evofitness.at/wp-content/uploads/2018/09/EVO-2020-PP-February-Banner_19-1200x675.jpg"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <Products />

      <AddComment />
    </div>
  );
};