import React, { useState, useEffect } from "react";
import "./restaurants.css";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";
import { getAllRestaurants } from '../../servicesMethods/RestaurantsServices/RestaurantsServices';

export const Resturants = () => {
  const [resturants, setResturants] = useState([]);
  const [search, setSearch] = useState("");
  const history = useHistory();

  useEffect(async () => {
    const res = getAllRestaurants();
    setResturants([...res]);
  }, []);

  return (
    <div>
      <div className="titleMain" style={{ paddingTop: "50px" }}>
        <h1> Our Healthy Restaurants </h1>
      </div>
      <Form >
        <Form.Group className="searchGym" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="  Search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Form.Group>
      </Form>
      <div className="AllResturants">
        {resturants &&
          resturants
            .filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((Element, i) => {
              return (
                <div
                  key={i}
                  className="cardRestrurant"
                  onClick={() => history.push(`/resturan/${Element.id}`)}
                >
                  <img src={Element.image} className="imgRestaurant" />
                  <h2 className="nameResturant">{Element.name}</h2>
                </div>
              );
            })}
      </div>
    </div>
  );
};
