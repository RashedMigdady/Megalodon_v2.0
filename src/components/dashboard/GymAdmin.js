import React, { useState, useEffect } from "react";
import axios from "axios";

export const GymAdmin = () => {
  const [gyms, setAllGym] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [priceMonthly, setPriceMonthly] = useState("");
  const [description, setDescription] = useState("");

  const getAllGyms = () => {
    axios
      .get("https://c3megalodon.herokuapp.com/gym")
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
    axios
      .post("https://c3megalodon.herokuapp.com/gym", {
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
    axios
      .put(`https://c3megalodon.herokuapp.com/gym/${id}`, {
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
    axios
      .delete(`https://c3megalodon.herokuapp.com/gym/${id}`)
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
