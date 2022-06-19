import React, { useEffect, useState } from "react";
import { token } from "../../Helper/HTTPMethod.Helper";
import { useParams } from "react-router-dom";
import "./oneResturant.css";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { addSubscription } from "../../redux/action/cart";
import Carousel from "react-bootstrap/Carousel";
import { FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { getRestaurantById } from '../../servicesMethods/RestaurantsServices/RestaurantsServices';
import { DameDataResturants } from "../../DameData";
export const OneResturant = () => {
  const [resturant, setResturant] = useState(0);
  let restaurantId = useParams().id;
  const dispatch = useDispatch();
  const all = JSON.parse(localStorage.getItem("subscription"));

  useEffect(async () => {
    const res = await getRestaurantById(restaurantId);
    if (res)
      setResturant(res);
      else
      setResturant([DameDataResturants[restaurantId - 1]])
  }, []);

  const addSubsecRestaurant = async (elem) => {
    if (!token) {
      swal({
        title: "You have to login first so you can subscribe",
        icon: "error",
        button: "OK",
      });
    } else if (localStorage.getItem("restaurant") !== null) {
      swal({
        title: "You cant subsicribe in more than one restaurant",
        text: "go to your cart if you want to replace you subsicribtion  ",
        icon: "error",
        button: "OK",
      });
    } else {
      localStorage.setItem("restaurant", JSON.stringify(elem));
      dispatch(addSubscription(elem));
      all.push(elem);
      localStorage.setItem("subscription", JSON.stringify(all));
      swal({
        title: "Success !! ",
        text: "Your Food Is Healthy Now , go to your cart to Pay and Confirm your Subsicribtion ",
        icon: "success",
        button: "OK",
      });
    }
  };

  return (
    <div className="container">
      <div className="container_carousel">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
              height="500px"
              width="400px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5379707/pexels-photo-5379707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Second slide"
              height="500px"
              width="400px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Third slide"
              height="500px"
              width="400px"
              borderRadius="3px"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="resturant_1">
        <ul className="list_main" style={{ textAlign: "left" }}>
          <li className="name" style={{ fontSize: "30px" }}>
            {resturant && resturant[0].name}
          </li>
          <li className="name">
            restaurant located in Jordan, serving a selection of Healthy that
            delivers across Al Kursi Al Salhien and Al Jandaweel Their best
            selling dishes are Chicken Mushroom although they have a variety of
            dishes and meals to choose from like Main Dishes They have been
            reviewed 961 times by our users .
          </li>
          <li
            style={{ color: "#E8B900" }}
            className="name"
            onClick={() => {
              window.open(resturant[0].location, "_blank");
            }}
          >
            <FaMapMarkerAlt /> LOCATION
          </li>
          <li className="name">
            Price {": "}
            {resturant && resturant[0].monthlyPrice} JD
          </li>

          <button
            className="resButton"
            onClick={() => {
              addSubsecRestaurant(resturant && resturant[0].id);
            }}
          >
            Subscribe Now{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};
