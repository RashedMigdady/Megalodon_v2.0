import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OneTrainer.css";
import Place from "@mui/icons-material/Place";
import Phone from "@mui/icons-material/Phone";
import SportsScore from "@mui/icons-material/SportsScore";
import StarBorder from "@mui/icons-material/StarBorder";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { addSubscription } from "../../redux/action/cart";
import { getTrainerById } from '../../servicesMethods/TrainersServices/trainersServices';
import { Spinner } from '../../ShareComponents/SpinnerComponent/Spinner';
import DefaultImageUser from '../../imeges/Default-user.png';

export const OneTrainer = () => {
  const [trainer, setTrainer] = useState(0);
  const token = localStorage.getItem("token");
  let trainerId = useParams().id;
  const dispatch = useDispatch();
  const all = JSON.parse(localStorage.getItem("subscription"));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const res = await getTrainerById(trainerId);
    if (res)
      setTrainer(res);
    setIsLoading(false);
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
      <Spinner isActive={isLoading} />
      <div className="col-xs-12">
        <div className="gym-block-img">
          <img src={trainer && trainer.image ? trainer.image : DefaultImageUser} alt="" className="gym-img" />
        </div>
        <div className="gym-block-bottm">
          <h3 className="gym-block__title">Contact</h3>
          <ul className="list--gym-address">
            <li className="list__item">
              <h5
                className="text-link"
                onClick={() => {
                  window.open(trainer.location, "_blank");
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
              <a className="phone-link">{trainer && trainer.phoneNumber}</a>
            </li>

            <li className="list-sport">
              <div className="Sports-Score-Class">
                {" "}
                <SportsScore />
              </div>
              Sport {": "}
              <a className="sport-ltem">{trainer && trainer.sport}</a>
            </li>
            <li className="list-experience">
              <div className="StarBorder-Class">
                {" "}
                <StarBorder />
              </div>
              Experience {": "}
              <a className="experience-ltem">
                {trainer && trainer.experience} Years
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-xs-14">
        <h2 className="Theading">
          {trainer && trainer.firstName + " " + trainer.lastName}
        </h2>
        <div className="pt-bio">
          <p className="prgTra">{trainer && trainer.description}</p>
          <button
            className="btnTrainner"
            onClick={() => {
              addSubsecribtionTrainer(trainer && trainer);
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
