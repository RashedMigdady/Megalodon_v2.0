import style from "./featuredInfo.module.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedInfo() {
  const [trainer, setTrainer] = useState();
  const [resturants, setResturants] = useState([]);
  const [allgyms, setAllGyms] = useState([]);

  useEffect(() => {
    axios
      .get("https://c3megalodon.herokuapp.com/gym")
      .then((res) => {
        setAllGyms([...res.data.result]);
      })
      .catch((error) => {});
  }, []);

  useEffect(async () => {
    await axios.get("https://c3megalodon.herokuapp.com/trainer").then((res) => {
      setTrainer(res.data.allTrainers);
    });
  }, []);

  useEffect(async () => {
    await axios
      .get("https://c3megalodon.herokuapp.com/resturan")
      .then((res) => {
        setResturants([...res.data.result]);
      })
      .catch((error) => {});
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
