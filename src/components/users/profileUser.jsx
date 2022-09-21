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
import { dateDiffInDays } from "../../Helper/dateDiffInDays.Helper";
import { showSuccess } from "../../Helper/Toastify.Helper";
import { useTitle } from '../../Hooks/Title.Hook';
import { Autocomplete, TextField } from '@mui/material';
import { getCountries } from '../../servicesMethods/LookUpsIds/StaticLookUpsIds';


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
  useTitle('Profile');
  const [profile, setProfile] = useState("");
  const [subRest, setSubRest] = useState([]);
  const [age, setAge] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [country, setCountry] = useState("");
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [diseases, setDiseases] = useState("");
  const [subTrainer, setSubTrainer] = useState([]);
  const [subGym, setSubGym] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState(null);


  const history = useHistory();

  const AllSubscribtions = [subRest, subTrainer, subGym];

  useEffect(async () => {
    const res = await GetuserProfile();
    if (res)
      setProfile(res.data[0]);
  }, []);

  useEffect(async () => {
    const res = await getRestaurantSubscriptions();
    if (res)
      setSubRest(res);
  }, []);

  useEffect(async () => {
    const res = await getTrainersSubscribtions();
    if (res)
      setSubTrainer(res);
  }, []);

  useEffect(async () => {
    const res = await getGymsSubscribtions();
    if (res)
      setSubGym(res);
  }, []);



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

  const getLookUpIdCountries = async () => {
    const res = await getCountries(231);
    console.log(res);
    if (res && res.success)
      setCountries(res && res.countries)
  }

  useEffect(() => {
    getLookUpIdCountries();
  }, [])


  const updateInfo = async () => {
    const res = await EditProfile({ age, phoneNumber, country, weight, height, diseases });
    closeModal();
    showSuccess('Updating Your Information is Done')
    history.push("/home"); // rerender force
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
            <TextField
              id="outlined-basic"
              label="Your Phone"
              variant="outlined"
              value={phoneNumber}
              onChange={(event => setPhoneNumber(event.target.value))}
              type="number"
            />
            <TextField
              id="outlined-basic"
              label="Weight"
              variant="outlined"
              value={weight}
              onChange={(event => setWeight(event.target.value))}
              type="number"
            />

            <TextField
              id="outlined-basic"
              label='Height'
              variant="outlined"
              value={height}
              onChange={(event => setHeight(event.target.value))}
              type="number"
            />
            <TextField
              id="outlined-basic"
              label='Your Age'
              variant="outlined"
              value={age}
              onChange={(event => setAge(event.target.value))}
              type="number"
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={countries}
              getOptionLabel={(option) => option.country_name}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Country" />}
              onChange={(event, newValue) => setCountry(newValue.country_name)}
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
              Save
            </Button>
          </div>
        </Modal>
      </div>

      <div className="AllSubscribtion">
        {AllSubscribtions.map((elem, i) => {
          return (
            <>
              {elem.length != 0 ? (
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
                          new Date(elem && elem.date_to && elem.date_to.slice(0, 10))
                        )
                      }
                      label={`${dateDiffInDays(
                        new Date(elem && elem.date_to && elem.date_to.slice(0, 10))
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
                  Expier Date: {elem && elem.date_to && elem.date_to.slice(0, 10)}
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
