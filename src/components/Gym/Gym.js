import React, { useState, useEffect } from "react";
import { host, HTTPServices } from "../../Helper/HTTPMethod.Helper";
import "./Gym.css";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { addSubscription } from "../../redux/action/cart";
import { Form } from "react-bootstrap";
export const Gym = () => {
  const [allgyms, setAllGyms] = useState([]);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const all = JSON.parse(localStorage.getItem("subscription"));

  useEffect(() => {
    HTTPServices
      .get("http://localhost:5000/gym")
      .then((res) => {
        setAllGyms([...res.data.result]);
      })
      .catch((error) => {});
  }, []);

  const addSubsGym = (element) => {
    if (!token) {
      swal({
        title: "You have to login first so you can subscribe",
        icon: "error",
        button: "OK",
      });
    } else if (localStorage.getItem("gym") !== null) {
      swal({
        title: "You cant subsicribe in more than one gym",
        text: "go to your cart if you want to replace you subsicribtion  ",
        icon: "error",
        button: "OK",
      });
    } else {
      localStorage.setItem("gym", JSON.stringify(element));
      dispatch(addSubscription(element));
      all.push(element);
      localStorage.setItem("subscription", JSON.stringify(all));
      swal({
        title: "Success !! ",
        text: "  Your Fitness Home Is Here !! \n Go To Your Cart To Pay and Confirm Your Subsicribtion ",
        icon: "success",
        button: "OK",
      });
    }
  };

  return (
    <div className="bigDiv">
      <Form>
        <Form.Group className="searchGym" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="  search...,name"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Form.Group>
      </Form>
      {allgyms &&
        allgyms
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((element, index) => {
            return (
              <>
                {index % 2 == 0 ? (
                  <div key={index} className="OneGym">
                    <img src={element.image} className="imgGym" />
                    <div className="childtwo">
                      <h5 className="NameOfTheGym">{element.name}</h5>
                      <h5 className="name2">
                        {" "}
                        Phone Number :{element.phoneNumber}{" "}
                      </h5>
                      <h5 className="name2">
                        {" "}
                        Monthly payment : {element.priceMonthly} $
                      </h5>
                      <h5 className="name2"> {element.description}</h5>
                      <h5
                        className="name2"
                        onClick={() => {
                          window.open(element.location, "_blank");
                        }}
                      >
                        {" "}
                        📍 LOCATION
                      </h5>
                      <button
                        className="subscribeBtn"
                        onClick={() => {
                          addSubsGym(element);
                        }}
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="OneGym">
                    <div className="childtwo">
                      <h5 className="NameOfTheGym">{element.name}</h5>
                      <h5 className="name2">
                        {" "}
                        Phone Number :{element.phoneNumber}{" "}
                      </h5>
                      <h5 className="name2">
                        {" "}
                        Monthly payment : {element.priceMonthly} $
                      </h5>
                      <h5 className="name2"> {element.description}</h5>
                      <h5
                        className="name2"
                        onClick={() => {
                          window.open(element.location, "_blank");
                        }}
                      >
                        {" "}
                        📍 LOCATION
                      </h5>
                      <button
                        className="subscribeBtn"
                        onClick={() => {
                          addSubsGym(element);
                        }}
                      >
                        Subscribe Now
                      </button>
                    </div>

                    <img src={element.image} className="imgGym" />
                  </div>
                )}
              </>
            );
          })}
    </div>
  );
};
