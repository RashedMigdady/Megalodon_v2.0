import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Button, Image } from "react-bootstrap";
import { Cancel } from "@mui/icons-material";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    backgroundColor: "white",
    overlay: {
      backgroundColor: "#ffffff",
    },
  },
};

export const ProfileUser = () => {
  const [profile, setProfile] = useState("");
  const [subRest, setSubRest] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://c3megalodon.herokuapp.com/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setProfile(result.data[0]);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://c3megalodon.herokuapp.com/subscribtion/ResturantsSubscribtion",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        setSubRest(result.data.result[0]);
      })
      .catch((err) => {});
  }, []);

  const [subTrainer, setSubTrainer] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://c3megalodon.herokuapp.com/subscribtion/TrainersSubscribtion",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        setSubTrainer(result.data.result[0]);
      })
      .catch((err) => {});
  }, []);

  const [subGym, setSubGym] = useState("");
  useEffect(() => {
    axios
      .get("https://c3megalodon.herokuapp.com/subscribtion/GymSubscribtions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setSubGym(result.data.result[0]);
      })
      .catch((err) => {});
  }, []);

  function dateDiffInDays(a) {
    const d = new Date();
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
    return Math.abs(Math.floor((utc2 - utc1) / 86400000));
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = "black";
    // subtitle.style.textAlign = "center";
    // subtitle.style.fontFamily = "bold";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [age, setAge] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [country, setCountry] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [diseases, setDiseases] = useState("");
  const history = useHistory();

  const AllSubscribtions = [subRest, subTrainer, subGym];

  const updateInfo = () => {
    axios
      .put(
        "https://c3megalodon.herokuapp.com/users",
        { age, phoneNumber, country, weight, height, diseases },
        { headers: { Authorization: `Bearer: ${token}` } }
      )
      .then((result) => {
        closeModal();
        history.push("/home");
        history.push("/profile");
      })
      .catch((err) => {});
  };

  return (
    <div className="userProfile">
      <div className="leftdiv">
        <div className="profileImg">
          {profile && profile.image !== null ? (
            <img className="imgProfile" src={profile && profile.image} />
          ) : (
            <img
              className="imgProfile"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            />
          )}
        </div>
        <h4 className="NameOfUser">
          {profile && profile.firstName + " " + profile.lastName}
        </h4>
      </div>

      <div className="imgAndInfo">
        <div className="middleDiv">
          <h5 className="details2">
            Phone Number : {profile && profile.phoneNumber}{" "}
          </h5>
          <h5 className="details2">Email : {profile && profile.email}</h5>
          <h5 className="details2">Country : {profile && profile.country}</h5>

          <h5 className="details2">
            Your Weight : {profile && profile.weight} Kg
          </h5>
          <h5 className="details2">
            Your Height: {profile && profile.height} cm
          </h5>
          <h5 className="details2">
            Your Age : {profile && profile.age} Years
          </h5>
          <h5 className="details2">
            Any Diseases History : {profile && profile.diseases}
          </h5>
          <Button
            onClick={openModal}
            variant="outline-dark"
            className="EditInfo"
            className="profileeeBtn"
          >
            {" "}
            Edit Info{" "}
          </Button>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <Cancel onClick={closeModal} className="closeButton" />
          <div className="AllInputs">
            <input
              type="number"
              className="inputModal"
              placeholder="Your Phone"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />

            <input
              type="number"
              value={profile && profile.weigh}
              className="inputModal"
              placeholder="Weight"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />

            <input
              type="number"
              className="inputModal"
              placeholder="Height"
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />

            <input
              type="number"
              className="inputModal"
              placeholder="Your Age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />

            <input
              type="text"
              className="inputModal"
              placeholder="Country"
              onChange={(e)=>setCountry(e.target.value)} 
              />
              <lebel className="lebelDiseases">
              {" "}
              • Do you have any Diseases ?
            </lebel>

              <input
              type="text"
              className="inputModalDiseases"
              value={profile && profile.diseases}
              onChange={(e) => {
                setDiseases(e.target.value);
              }}
              
            />
            
            
            <Button
              variant="outline-dark"
              className="EnterInfo"
              onClick={updateInfo}
            >
              Enter
            </Button>
          </div>
        </Modal>
      </div>

      <div className="AllSubscribtion">
        {AllSubscribtions.map((elem, i) => {
          return (
            <>
              {elem !== undefined ? (
                <fieldset className="restaurantSubscirption">
                  <legend className="titleSubscription"> </legend>
                  <p
                    className="nameSub"
                    style={{ margin: "0px", padding: "0px" }}
                  >
                    {elem && elem.name}
                  </p>
                  <div className="rightDivv">
                    <Image
                      src={elem && elem.image}
                      roundedCircle
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "100%",
                        paddingBottom: "5px",
                        marginLeft: "10px",
                      }}
                    />

                    <ProgressBar
                      variant="dark"
                      animated
                      now={
                        3.3 *
                        dateDiffInDays(
                          new Date(elem && elem.date_to.slice(0, 10))
                        )
                      }
                      label={`${dateDiffInDays(
                        new Date(elem && elem.date_to.slice(0, 10))
                      )} day`}
                      className="progress"
                      style={{
                        margin: "auto",
                        padding: "0px",
                        width: "200px",
                        height: "25px",
                      }}
                    />
                  </div>{" "}
                  Expier Date: {elem && elem.date_to.slice(0, 10)}
                </fieldset>
              ) : (
                <div></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
