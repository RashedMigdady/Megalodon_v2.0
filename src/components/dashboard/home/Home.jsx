import { FeaturedInfo } from "../featuredInfo/FeaturedInfo.jsx";
import style from "./home.module.css";
import { WidgetLg } from "../widgetLg/WidgetLg.jsx";

export const Home = () => {
  return (
    <div className={style.home}>
      <FeaturedInfo />
      <div className={style.homeWidgets}>
        <WidgetLg />
      </div>
    </div>
  );
}
