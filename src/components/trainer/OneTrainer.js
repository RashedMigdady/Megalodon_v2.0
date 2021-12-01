import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./OneTrainer.css";
import Place from "@mui/icons-material/Place";
import Phone from "@mui/icons-material/Phone";
import SportsScore from "@mui/icons-material/SportsScore";
import StarBorder from "@mui/icons-material/StarBorder";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { addSubscription } from "../../redux/action/cart";

export const OneTrainer = () => {
  const [trainer, setTrainer] = useState(0);
  const token = localStorage.getItem("token");
  let trainerId = useParams().id;
  const dispatch = useDispatch();
  const all = JSON.parse(localStorage.getItem("subscription"));

  useEffect(async () => {
    await axios
      .get(`https://c3megalodon.herokuapp.com/trainer/${trainerId}`)
      .then((res) => {
        setTrainer(res.data.Trainer);
      })
      .catch((err) => {});
  }, []);

  const addSubsecribtionTrainer = async (elem) => {
    if (!token) {
      swal({
        title: "You have to login first so you can subscribe",
        icon: "error",
        button: "OK",
      });
    } else if (localStorage.getItem("trainer") !== null) {
      swal({
        title: "You cant subsicribe with more than one trainer",
        text: "go to your cart if you want to replace you subsicribtion  ",
        icon: "error",
        button: "OK",
      });
    } else {
      localStorage.setItem("trainer", JSON.stringify(elem));
      dispatch(addSubscription(elem));
      all.push(elem);
      localStorage.setItem("subscription", JSON.stringify(all));
      swal({
        title: "Success !! ",
        text: "You Now Have The Perfect Personal Trainer  !! \n  Go To Your Cart To Pay and Confirm Your Subsicribtion ",
        icon: "success",
        button: "OK",
      });
    }
  };

  return (
    <div className="big-div">
      <div className="col-xs-12">
        <div className="gym-block-img">
          <img src={trainer && trainer[0].image} alt="" className="gym-img" />
        </div>
        <div className="gym-block-bottm">
          <h3 className="gym-block__title">Contact</h3>
          <ul className="list--gym-address">
            <li className="list__item">
              <h5
                className="text-link"
                onClick={() => {
                  window.open(trainer[0].location, "_blank");
                }}
              >
                <div className="location-Class">
                  {" "}
                  <Place />
                </div>
                Location
              </h5>
            </li>
            <li className="list__phon">
              <div className="phon-Class">
                {" "}
                <Phone />
              </div>
              Phone {": "}
              <a className="phone-link">{trainer && trainer[0].phoneNumber}</a>
            </li>

            <li className="list-sport">
              <div className="Sports-Score-Class">
                {" "}
                <SportsScore />
              </div>
              Sport {": "}
              <a className="sport-ltem">{trainer && trainer[0].sport}</a>
            </li>
            <li className="list-experience">
              <div className="StarBorder-Class">
                {" "}
                <StarBorder />
              </div>
              Experience {": "}
              <a className="experience-ltem">
                {trainer && trainer[0].experience} Years
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-xs-14">
        <h2 className="Theading">
          {trainer && trainer[0].firstName + " " + trainer[0].lastName}
        </h2>
        <div className="pt-bio">
          <p className="prgTra">{trainer && trainer[0].description}</p>
          <button
            className="btnTrainner"
            onClick={() => {
              addSubsecribtionTrainer(trainer && trainer[0]);
            }}
          >
            {" "}
            Subscribe Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
