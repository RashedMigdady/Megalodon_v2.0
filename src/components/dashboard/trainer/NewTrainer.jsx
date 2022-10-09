import style from "./newTrainer.module.css";
import React, { useEffect, useState } from "react";
import { addNewTrainer } from '../../../servicesMethods/TrainersServices/trainersServices';
import { Autocomplete, Button, TextareaAutosize, TextField } from '@mui/material';
import { getSports } from '../../../servicesMethods/LookUpsIds/StaticLookUpsIds';
import { showError, showinfo } from '../../../Helper/Toastify.Helper';
import { sportsLookupId } from '../../../LookUpsIds/loookupIds';

export default function NewTrainer() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState();
  const [image, setImage] = useState();
  const [sport, setSport] = useState();
  const [priceMonthly, setPriceMonthly] = useState();
  const [description, setDescription] = useState();
  const [experience, setExperience] = useState();
  const [sports, setSports] = useState([])

  const createNewTrainer = async () => {
    const res = await addNewTrainer({ firstName, lastName, phoneNumber, location, image, sport, priceMonthly, description, experience });
    if (res)
      showinfo(res)
    else
      showError('something error!!')
  };

  const getAllSports = async () => {
    const res = await getSports(sportsLookupId);
    if (res)
      setSports(res && res.sports);
  }

  useEffect(() => {
    getAllSports();
  }, [])
  return (
    <div className={style.newUser}>
      <h1 className={style.newUserTitle}>New Trainer</h1>
      <form className={style.newUserForm}>
        <div className={style.newUserItem}>
          <label>First Name</label>
          <TextField
            required
            id="outlined-basic"
            label='First name'
            variant="outlined"
            value={firstName}
            onChange={(event => setFirstName(event.target.value))}
            type="text"
          />
        </div>
        <div className={style.newUserItem}>
          <label>Last Name</label>
          <TextField
            required
            id="outlined-basic"
            label='Last name'
            variant="outlined"
            value={lastName}
            onChange={(event => setLastName(event.target.value))}
            type="text"
          />
        </div>
        <div className={style.newUserItem}>
          <label>Phone Number</label>
          <TextField
            required
            id="outlined-basic"
            label='Phone'
            variant="outlined"
            value={phoneNumber}
            onChange={(event => setPhoneNumber(event.target.value))}
            type="number"
          />
        </div>
        <div className={style.newUserItem}>
          <label>Location</label>
          <TextField
            required
            id="outlined-basic"
            label='Location'
            variant="outlined"
            value={location}
            onChange={(event => setLocation(event.target.value))}
            type="text"
          />
        </div>
        <div className={style.newUserItem}>
          <label>Sport</label>
          <Autocomplete
            disablePortal
            required
            id="combo-box-demo"
            options={sports}
            getOptionLabel={(option) => option.sport_name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Sports" />}
            onChange={(event, newValue) => newValue && setSport(newValue.sport_name)}
          />
        </div>
        <div className={style.newUserItem}>
          <label>Experience</label>
          <TextField
            id="outlined-basic"
            label='Years of Experience'
            variant="outlined"
            value={experience}
            onChange={(event => setExperience(event.target.value))}
            type="number"
          />
        </div>
        <div className={style.newUserItem}>
          <label>Price Monthly</label>
          <TextField
            required
            id="outlined-basic"
            label='Price'
            variant="outlined"
            value={priceMonthly}
            onChange={(event => setPriceMonthly(event.target.value))}
            type="number"
          />
        </div>
        <div className={style.newUserItem}>
          <label>Image</label>
          <TextField
            id="outlined-basic"
            label='Image URL'
            variant="outlined"
            value={image}
            onChange={(event => setImage(event.target.value))}
            type="text"
          />
        </div>
        <div className={style.newUserItem}>
          <label>Description</label>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={1}
            placeholder=""
            style={{ width: 500 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </div>
      </form>

      <Button  className={style.newUserButton} variant="outlined" onClick={createNewTrainer}>Add New Trainer</Button>
    </div>
  );
}
