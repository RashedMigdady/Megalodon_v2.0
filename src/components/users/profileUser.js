import { serverAddress, HTTPServices } from "../../Helper/HTTPMethod.Helper";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Button, Image } from "react-bootstrap";
import { Cancel } from "@mui/icons-material";
import Modal from "react-modal";
import { EditProfile, GetuserProfile } from '../../servicesMethods/UsersServices/usersServices';
import { getGymsSubscribtions, getRestaurantSubscriptions, getTrainersSubscribtions } from '../../servicesMethods/SubscriptionsServices/subscriptionService';

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
  const [age, setAge] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [country, setCountry] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [diseases, setDiseases] = useState("");
  const [subTrainer, setSubTrainer] = useState("");
  const [subGym, setSubGym] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);


  const history = useHistory();

  const AllSubscribtions = [subRest, subTrainer, subGym];

  useEffect(async () => {
    const res = await GetuserProfile();
    if(res)
    setProfile(res.data[0]);
  }, []);

  useEffect(async () => {
    const res = await getRestaurantSubscriptions();
    if(res)
    setSubRest(res);
  }, []);

  useEffect(async () => {
    const res = await getTrainersSubscribtions();
    if(res)
    setSubTrainer(res);
  }, []);

  useEffect(async () => {
    const res = await getGymsSubscribtions();
    if(res)
    setSubGym(res);
  }, []);

  const dateDiffInDays = (dateTo) => {
    const today = new Date();
    const utc1 = Date.UTC(dateTo.getFullYear(), dateTo.getMonth(), dateTo.getDate());
    const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    return Math.abs(Math.floor((utc2 - utc1) / 86400000));
  }

  const openModal = () => {
    setIsOpen(true);
  }

  let subtitle;
  const afterOpenModal = () => {
    // subtitle.style.color = "black";
    // subtitle.style.textAlign = "center";
    // subtitle.style.fontFamily = "bold";
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  const updateInfo = async () => {
    const res = await EditProfile({ age, phoneNumber, country, weight, height, diseases });
    closeModal();
    history.push("/home");
    history.push("/profile");
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
            // className="EditInfo"
            className="profileBtn"
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
              onChange={(e) => setCountry(e.target.value)}
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
