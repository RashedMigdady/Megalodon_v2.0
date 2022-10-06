import style from "./newTrainer.module.css";
import React, { useEffect, useState } from "react";
import { addNewTrainer } from '../../../servicesMethods/TrainersServices/trainersServices';

export default function NewTrainer() {
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

  const createNewTrainer = async () => {
    const res = await addNewTrainer({ firstName, lastName, phoneNumber, location, image, sport, priceMonthly, description, experience });
    if(res)
    setMessage(res);
  };
  return (
    <div className={style.newUser}>
      <h1 className={style.newUserTitle}>New Trainer</h1>
      <form className={style.newUserForm}>
        <div className={style.newUserItem}>
          <label>First Name</label>
          <input
            type="text"
            placeholder="John"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Smith"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="12345678"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Location</label>
          <input
            type="text"
            placeholder="Location URL"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Sport</label>
          <input
            type="text"
            placeholder="Your Sport"
            onChange={(e) => {
              setSport(e.target.value);
            }}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Experience</label>
          <input
            type="number"
            placeholder="Years of Experience"
            onChange={(e) => {
              setExperience(e.target.value);
            }}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Price Monthly</label>
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => {
              setPriceMonthly(e.target.value);
            }}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Image</label>
          <input
            type="text"
            placeholder="Image URL"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Description</label>
          <textarea
            rows="10"
            cols="50"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
      </form>
      <button className={style.newUserButton} onClick={createNewTrainer}>
        Create
      </button>
      <p>{message}</p>
    </div>
  );
}
