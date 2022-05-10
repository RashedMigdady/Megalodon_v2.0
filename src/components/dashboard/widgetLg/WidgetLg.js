import React, { useEffect, useState } from "react";
import style from "./widgetLg.module.css";
import { Restaurant } from "@material-ui/icons";
import { getRestaurantSubscriptions } from '../../../servicesMethods/SubscriptionsServices/subscriptionService';

export default function WidgetLg() {
  const [subRest, setSubRest] = useState();

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  useEffect(async () => {
    const res = await getRestaurantSubscriptions();
    if (res)
      setSubRest(res);
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
                    {elem && elem.firstName +" "+elem && elem.lastName}
                  </span>
                </td>
                <td className={style.widgetLgDate}>{elem && elem.date_to}</td>
                <td className={style.widgetLgAmount}>{elem && elem.monthlyPrice}$</td>
                <td className={style.widgetLgUser}>{elem && elem.name}</td>
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
