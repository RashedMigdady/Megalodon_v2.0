import { host, HTTPServices } from "../../../Helper/HTTPMethod.Helper";
import React, { useEffect, useState } from "react";
import style from "./widgetLg.module.css";
import { Restaurant } from "@material-ui/icons";

export default function WidgetLg() {
  const [subRest, setSubRest] = useState();

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  useEffect(() => {
    HTTPServices
      .get(
        "http://localhost:5000/subscribtion/allResturantsSubscribtion"
      )
      .then((result) => {
        setSubRest(result.data.result);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className={style.widgetLg}>
      <h3 className={style.widgetLgTitle}>
        <Restaurant className={style.sidebarIcon} />
        Resturants Subscribtion
      </h3>
      <table className={style.widgetLgTable}>
        <tr className={style.widgetLgTr}>
          <th className={style.widgetLgTh}>Customer</th>
          <th className={style.widgetLgTh}>Date</th>
          <th className={style.widgetLgTh}>Amount</th>
          <th className={style.widgetLgTh}>Provider</th>
          <th className={style.widgetLgTh}>Status</th>
        </tr>
        {subRest &&
          subRest.map((elem, index) => {
            return (
              <tr className={style.widgetLgTr} key={index}>
                <td className={style.widgetLgUser}>
                  <img
                    src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
                    alt=""
                    className={style.widgetLgImg}
                  />
                  <span className={style.widgetLgName}>
                    {elem.firstName} {elem.lastName}
                  </span>
                </td>
                <td className={style.widgetLgDate}>{elem.date_to}</td>
                <td className={style.widgetLgAmount}>{elem.monthlyPrice}$</td>
                <td className={style.widgetLgUser}>{elem.name}</td>
                <td className={style.widgetLgStatus}>
                  <Button type="Approved" />
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
