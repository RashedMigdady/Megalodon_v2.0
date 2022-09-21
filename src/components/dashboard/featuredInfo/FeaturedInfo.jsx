import style from "./featuredInfo.module.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { getAllGyms } from '../../../servicesMethods/GymsServices/gymsServices'
import { getAllRestaurants } from '../../../servicesMethods/RestaurantsServices/RestaurantsServices';
import { getAllTrainers } from '../../../servicesMethods/TrainersServices/trainersServices';

export const FeaturedInfo = () => {
  const [trainer, setTrainer] = useState();
  const [resturants, setResturants] = useState([]);
  const [allgyms, setAllGyms] = useState([]);

  useEffect(async () => {
    const res = await getAllGyms();
    if (res)
      setAllGyms([...res]);
  }, []);

  useEffect(async () => {
    const res = await getAllTrainers();
    if (res)
      setTrainer(res);
  }, []);

  useEffect(async () => {
    const res = await getAllRestaurants();
    if (res)
      setResturants([...res]);
  }, []);

  return (
    <div className={style.featured}>
      <div className={style.featuredItem}>
        <span className={style.featuredTitle}>Resturants</span>
        <div className={style.featuredMoneyContainer}>
          <span className={style.featuredMoney}>
            {resturants && resturants.length}
          </span>
          <span className={style.featuredMoneyRate}>
            +4 <ArrowUpward className={style.featuredIcon} />
          </span>
        </div>
        <span className={style.featuredSub}>Compared to last month</span>
      </div>
      <div className={style.featuredItem}>
        <span className={style.featuredTitle}>Gyms</span>
        <div className={style.featuredMoneyContainer}>
          <span className={style.featuredMoney}>
            {allgyms && allgyms.length}
          </span>
          <span className={style.featuredMoneyRate}>
            -3 <ArrowDownward />
          </span>
        </div>
        <span className={style.featuredSub}>Compared to last month</span>
      </div>
      <div className={style.featuredItem}>
        <span className={style.featuredTitle}>Trainer</span>
        <div className={style.featuredMoneyContainer}>
          <span className={style.featuredMoney}>
            {trainer && trainer.length}
          </span>
          <span className={style.featuredMoneyRate}>
            -2 <ArrowDownward />
          </span>
        </div>
        <span className={style.featuredSub}>Compared to last month</span>
      </div>
    </div>
  );
}
