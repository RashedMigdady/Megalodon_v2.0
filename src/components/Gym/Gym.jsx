import React, { useState, useEffect } from "react";
import { serverAddress, HTTPServices, token } from "../../Helper/HTTPMethod.Helper";
import "./Gym.css";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { addSubscription } from "../../redux/action/cart";
import { Form } from "react-bootstrap";
import { getAllGyms } from '../../servicesMethods/GymsServices/gymsServices';
import { useTitle } from '../../Hooks/Title.Hook';
import { Spinner2 } from '../../ShareComponents/SpinnerComponent/Spinner2';
export const Gym = () => {
  useTitle('Gyms')
  const [allgyms, setAllGyms] = useState([]);
  const [search, setSearch] = useState("");
  // const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const all = JSON.parse(localStorage.getItem("subscription"));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const res = await getAllGyms();
    if (res)
    setAllGyms([...res]);
    setIsLoading(false);
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
        title: "You can't subsicribe in more than one gym",
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
      <Spinner2 isActive={isLoading} />
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
                    <img src={element && element.image} className="imgGym" />
                    <div className="childtwo">
                      <h5 className="NameOfTheGym">{element && element.name}</h5>
                      <h5 className="name2">
                        {" "}
                        Phone Number :{element && element.phoneNumber}{" "}
                      </h5>
                      <h5 className="name2">
                        {" "}
                        Monthly payment : {element && element.priceMonthly} $
                      </h5>
                      <h5 className="name2"> {element && element.description}</h5>
                      <h5
                        className="name2"
                        onClick={() => {
                          window.open(element && element.location, "_blank");
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
                      <h5 className="NameOfTheGym">{element && element.name}</h5>
                      <h5 className="name2">
                        {" "}
                        Phone Number :{element && element.phoneNumber}{" "}
                      </h5>
                      <h5 className="name2">
                        {" "}
                        Monthly payment : {element && element.priceMonthly} $
                      </h5>
                      <h5 className="name2"> {element && element.description}</h5>
                      <h5
                        className="name2"
                        onClick={() => {
                          window.open(element && element.location, "_blank");
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

                    <img src={element && element.image} className="imgGym" />
                  </div>
                )}
              </>
            );
          })}
    </div>
  );
};
