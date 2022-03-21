import { LocationSearching, PhoneAndroid } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import style from "../trainer/trainer.module.css";
import React, { useEffect, useState } from "react";
import { serverAddress, HTTPServices } from "../../../Helper/HTTPMethod.Helper";

export default function Gym() {
  let gymId = useParams().gymId;
  const [gym, setGym] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState();
  const [image, setImage] = useState();
  const [priceMonthly, setPriceMonthly] = useState();
  const [description, setDescription] = useState();

  const [message, setMessage] = useState("");

  const updateGym = async () => {
    await HTTPServices
      .put(`http://localhost:5000/gym/${gymId}`, {
        name,
        phoneNumber,
        location,
        image,
        priceMonthly,
        description,
      })
      .then((res) => {
        setMessage(res.data.message);
      });
  };

  useEffect(async () => {
    await HTTPServices
      .get(`http://localhost:5000/gym/${gymId}`)
      .then((res) => {
        setGym(res.data.result[0]);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={style.user}>
      <div className={style.userTitleContainer}>
        <h1 className={style.userTitle}>Edit Gym</h1>
        <Link to="/dashboard/newGym">
          <button className={style.userAddButton}>Create</button>
        </Link>
      </div>
      <div className={style.userContainer}>
        <div className={style.userShow}>
          <div className={style.userShowTop}>
            <img src={gym && gym.image} alt="" className={style.userShowImg} />
            <div className={style.userShowTopTitle}>
              <span className={style.userShowUsername}>{gym && gym.name}</span>
            </div>
          </div>
          <div className={style.userShowBottom}>
            <span className={style.userShowTitle}>Details</span>

            <div className={style.userShowInfo}>
              <span className={style.userShowInfoTitle}>
                Price Monthly: {gym && gym.priceMonthly}$
              </span>
            </div>
            <span className={style.userShowTitle}>Contact Details</span>
            <div className={style.userShowInfo}>
              <PhoneAndroid className={style.userShowIcon} />
              <span className={style.userShowInfoTitle}>
                {gym && gym.phoneNumber}
              </span>
            </div>
            <div className={style.userShowInfo}>
              <LocationSearching className={style.userShowIcon} />
              <textarea
                style={{ border: "none" }}
                rows="8"
                cols="30"
                defaultValue={gym && gym.location}
              ></textarea>
            </div>
          </div>
        </div>
        <div className={style.userUpdate}>
          <span className={style.userUpdateTitle}>Edit</span>
          <form className={style.userUpdateForm}>
            <div className={style.userUpdateLeft}>
              <div className={style.userUpdateItem}>
                <label>Name</label>
                <input
                  type="text"
                  defaultValue={gym && gym.name}
                  className={style.userUpdateInput}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div
                className={style.userUpdateItem}
                style={{ marginTop: "20px" }}
              >
                <label>Location</label>
                <textarea
                  rows="4"
                  cols="30"
                  defaultValue={gym && gym.location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className={style.userUpdateItem}>
                <label>Description</label>
                <textarea
                  rows="4"
                  cols="30"
                  defaultValue={gym && gym.description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className={style.userUpdateItem}>
              <div className={style.userUpdateItem}>
                <label>Price Monthly</label>
                <input
                  type="number"
                  defaultValue={gym && gym.priceMonthly}
                  onChange={(e) => {
                    setPriceMonthly(e.target.value);
                  }}
                  className={style.userUpdateInput}
                />
              </div>
              <div className={style.userUpdateItem}>
                <label>Phone Number</label>
                <input
                  type="number"
                  defaultValue={gym && gym.phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className={style.userUpdateInput}
                />
              </div>

              <div className={style.userUpdateItem}>
                <label>Image</label>
                <textarea
                  rows="4"
                  cols="30"
                  defaultValue={gym && gym.image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </form>
          <div className={style.centerB}>
            <button className={style.userUpdateButton} onClick={updateGym}>
              Update
            </button>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
