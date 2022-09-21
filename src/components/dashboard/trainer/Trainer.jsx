import { LocationSearching, PhoneAndroid } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import style from "./trainer.module.css";
import React, { useEffect, useState } from "react";
import { getTrainerById, updateTrainer } from '../../../servicesMethods/TrainersServices/trainersServices';

export const Trainer = () => {
  let trainerId = useParams().trainerId;
  const [Trainer, setTrainer] = useState({ image: "ds" });
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState();
  const [image, setImage] = useState();
  const [sport, setSport] = useState();
  const [priceMonthly, setPriceMonthly] = useState();
  const [description, setDescription] = useState();
  const [experience, setExperience] = useState();
  const [message, setMessage] = useState("");

  const updateTrainers = async () => {
    const res = await updateTrainer(trainerId, { firstName, lastName, phoneNumber, location, image, sport, priceMonthly, description, experience });
    if (res)
      setMessage(res);
  };

  useEffect(async () => {
    const res = await getTrainerById(trainerId);
    if (res)
      setTrainer(res);
  }, []);

  return (
    <div className={style.user}>
      <div className={style.userTitleContainer}>
        <h1 className={style.userTitle}>Edit Trainer</h1>
        <Link to="/dashboard/newUser">
          <button className={style.userAddButton}>Create</button>
        </Link>
      </div>
      <div className={style.userContainer}>
        <div className={style.userShow}>
          <div className={style.userShowTop}>
            <img src={Trainer.image} alt="" className={style.userShowImg} />
            <div className={style.userShowTopTitle}>
              <span className={style.userShowUsername}>
                {Trainer.firstName} {Trainer.lastName}
              </span>
              <span className={style.userShowUserTitle}>{Trainer.sport}</span>
            </div>
          </div>
          <div className={style.userShowBottom}>
            <span className={style.userShowTitle}>Details</span>
            <div className={style.userShowInfo}>
              <span className={style.userShowInfoTitle}>
                Experience: {Trainer.experience}
              </span>
            </div>
            <div className={style.userShowInfo}>
              <span className={style.userShowInfoTitle}>
                Price Monthly: {Trainer.priceMonthly}$
              </span>
            </div>
            <span className={style.userShowTitle}>Contact Details</span>
            <div className={style.userShowInfo}>
              <PhoneAndroid className={style.userShowIcon} />
              <span className={style.userShowInfoTitle}>
                {Trainer.phoneNumber}
              </span>
            </div>
            <div className={style.userShowInfo}>
              <LocationSearching className={style.userShowIcon} />
              <span className={style.userShowInfoTitle}>
                {Trainer.location}
              </span>
            </div>
          </div>
        </div>
        <div className={style.userUpdate}>
          <span className={style.userUpdateTitle}>Edit</span>
          <form className={style.userUpdateForm}>
            <div className={style.userUpdateLeft}>
              <div className={style.userUpdateItem}>
                <label>Frist Name</label>
                <input
                  type="text"
                  defaultValue={Trainer.firstName}
                  className={style.userUpdateInput}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className={style.userUpdateItem}>
                <label>Last Name</label>
                <input
                  type="text"
                  defaultValue={Trainer.lastName}
                  className={style.userUpdateInput}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className={style.userUpdateItem}>
                <label>Phone Number</label>
                <input
                  type="number"
                  defaultValue={Trainer.phoneNumber}
                  className={style.userUpdateInput}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
              <div className={style.userUpdateItem}>
                <label>Location</label>
                <input
                  type="text"
                  defaultValue={Trainer.location}
                  className={style.userUpdateInput}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>
              <div className={style.userUpdateItem}>
                <label>Description</label>
                <textarea
                  rows="10"
                  cols="50"
                  defaultValue={Trainer.description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className={style.userUpdateItem}>
              <div className={style.userUpdateItem}>
                <label>Sport</label>
                <input
                  type="text"
                  defaultValue={Trainer.sport}
                  className={style.userUpdateInput}
                  onChange={(e) => {
                    setSport(e.target.value);
                  }}
                />
              </div>
              <div className={style.userUpdateItem}>
                <label>Price Monthly</label>
                <input
                  type="number"
                  defaultValue={Trainer.priceMonthly}
                  onChange={(e) => {
                    setPriceMonthly(e.target.value);
                  }}
                  className={style.userUpdateInput}
                />
              </div>
              <div className={style.userUpdateItem}>
                <label>Experience</label>
                <input
                  type="number"
                  defaultValue={Trainer.experience}
                  className={style.userUpdateInput}
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                />
              </div>
              <div className={style.userUpdateItem}>
                <label>Image</label>
                <input
                  type="text"
                  defaultValue={Trainer.image}
                  className={style.userUpdateInput}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
          <div className={style.centerB}>
            <button className={style.userUpdateButton} onClick={updateTrainers}>
              Update
            </button>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
