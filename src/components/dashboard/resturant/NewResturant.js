import style from "../trainer/newTrainer.module.css";
import React, { useEffect, useState } from "react";
import { serverAddress, HTTPServices } from "../../../Helper/HTTPMethod.Helper";
import { createNewRestaurant } from '../../../servicesMethods/RestaurantsServices/RestaurantsServices';


export default function NewResturant() {
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [image, setImage] = useState();
  const [monthlyPrice, setMonthlyPrice] = useState();
  const rate = 5;
  const [message, setMessage] = useState("");

  const addNewRestaurant = async () => {
    const res = await createNewRestaurant({ name, location, image, monthlyPrice, rate, });
    if(res)
    setMessage(res);
  };
  return (
    <div className={style.newUser}>
      <h1 className={style.newUserTitle}>New Restaurant</h1>
      <form className={style.newUserForm}>
        <div className={style.newUserItem}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Burger"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Price</label>
          <input
            type="text"
            placeholder="price"
            onChange={(e) => {
              setMonthlyPrice(e.target.value);
            }}
          />
        </div>

        <div className={style.newUserItem}>
          <label>Location</label>
          <textarea
            rows="5"
            cols="50"
            placeholder="Location URL"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          ></textarea>
        </div>

        <div className={style.newUserItem}>
          <label>Image</label>
          <textarea
            rows="5"
            cols="50"
            placeholder="Image URL"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          ></textarea>
        </div>
      </form>
      <button className={style.newUserButton} onClick={addNewRestaurant}>
        Create
      </button>
      <p>{message}</p>
    </div>
  );
}
