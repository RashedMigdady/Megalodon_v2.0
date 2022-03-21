import React, { useState, useEffect } from "react";
import { serverAddress, HTTPServices } from "../../Helper/HTTPMethod.Helper";

export const GymAdmin = () => {
  const [gyms, setAllGym] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [priceMonthly, setPriceMonthly] = useState("");
  const [description, setDescription] = useState("");

  const getAllGyms = () => {
    HTTPServices
      .get("http://localhost:5000/gym")
      .then((res) => {
        res.data;
        setAllGym([...res.data.result]);
      })
      .catch((error) => {
        error.response;
      });
  };

  useEffect(() => {
    getAllGyms();
  }, []);

  const addNewGym = () => {
    HTTPServices
      .post("http://localhost:5000/gym", {
        name,
        phoneNumber,
        image,
        priceMonthly,
        description,
      })
      .then((result) => {
        result;
      })
      .catch((error) => {
        error.response;
      });
  };

  const updateGymById = (id) => {
    HTTPServices
      .put(`http://localhost:5000/gym/${id}`, {
        name,
        phoneNumber,
        image,
        priceMonthly,
        description,
      })
      .then((result) => {
        result;
      });
  };

  const deleteGymById = (id) => {
    HTTPServices
      .delete(`http://localhost:5000/gym/${id}`)
      .then((result) => {
        getAllGyms();
      });
  };
  return (
    <div className="gym">
      <div className="child">
        <button
          onclick={() => {
            getAllGyms();
          }}
        >
          {" "}
          get all gyms{" "}
        </button>
        {gyms &&
          gyms.map((element, index) => {
            return (
              <div key={index}>
                <div className="childtwo">
                  <h5>{element.name}</h5>
                  <button
                    onClick={() => {
                      deleteGymById(element.id);
                    }}
                  >
                    {" "}
                    delete gym{" "}
                  </button>
                </div>
                <div>
                  <input
                    placeholder="name"
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                  <input
                    placeholder="phoneNumber"
                    type="number"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  ></input>
                  <input
                    placeholder="image Link"
                    type="text"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  ></input>
                  <input
                    placeholder="priceMonthly"
                    type="text"
                    onChange={(e) => {
                      setPriceMonthly(e.target.value);
                    }}
                  ></input>
                  <input
                    placeholder="description"
                    type="text"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      addNewGym();
                    }}
                  >
                    {" "}
                    Add Gym
                  </button>
                  <button
                    onClick={() => {
                      updateGymById(element.id);
                    }}
                  >
                    {" "}
                    update gym{" "}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
