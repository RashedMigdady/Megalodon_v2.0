import style from "../trainer/trainer.module.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { LocationSearching } from "@material-ui/icons";
import { serverAddress, HTTPServices } from "../../../Helper/HTTPMethod.Helper";
import { getRestaurantById, UpdateRestaurant } from '../../../servicesMethods/RestaurantsServices/RestaurantsServices';

export default function Resturant() {
  const [resturant, setResturant] = useState();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [image, setImage] = useState();
  const [monthlyPrice, setMonthlyPrice] = useState();
  const rate = 5;
  const [message, setMessage] = useState("");
  let restaurantId = useParams().restaurantId;
  const updateRestaurant = async () => {
    const res = UpdateRestaurant(restaurantId, { name, location, image, monthlyPrice, rate });
    setMessage(res);
  };
  useEffect(async () => {
    const res = await getRestaurantById(restaurantId);
    setResturant(res);
  }, []);
  return (
    <div className={style.user}>
      <div className={style.userTitleContainer}>
        <h1 className={style.userTitle}>Edit Resturant</h1>
        <Link to="/dashboard/newRestaurant">
          <button className={style.userAddButton}>Create</button>
        </Link>
      </div>
      <div className={style.userContainer}>
        <div className={style.userShow}>
          <div className={style.userShowTop}>
            <img
              src={resturant && resturant.image}
              alt=""
              className={style.userShowImg}
            />
            <div className={style.userShowTopTitle}>
              <span className={style.userShowUsername}>
                {resturant && resturant.name}
              </span>
            </div>
          </div>
          <div className={style.userShowBottom}>
            <span className={style.userShowTitle}>Details</span>
            <div className={style.userShowInfo}>
              <span className={style.userShowInfoTitle}>
                Price Monthly: {resturant && resturant.monthlyPrice}$
              </span>
            </div>
            <span className={style.userShowTitle}>Contact Details</span>
            <div className={style.userShowInfo}>
              <LocationSearching className={style.userShowIcon} />
              <textarea
                style={{ border: "none" }}
                rows="8"
                cols="50"
                defaultValue={resturant && resturant.location}
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
                  defaultValue={resturant && resturant.name}
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
                  cols="50"
                  defaultValue={resturant && resturant.location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className={style.userUpdateItem}>
                <div className={style.userUpdateItem}>
                  <label>Price Monthly</label>
                  <input
                    type="number"
                    defaultValue={resturant && resturant.monthlyPrice}
                    onChange={(e) => {
                      setMonthlyPrice(e.target.value);
                    }}
                    className={style.userUpdateInput}
                  />
                </div>

                <div className={style.userUpdateItem}>
                  <label>Image</label>
                  <textarea
                    rows="4"
                    cols="50"
                    defaultValue={resturant && resturant.image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <div className={style.centerB}>
            <button
              className={style.userUpdateButton}
              onClick={updateRestaurant}
            >
              Update
            </button>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
