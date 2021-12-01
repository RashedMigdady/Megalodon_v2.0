import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import style from "./home.module.css";


import WidgetLg from "../widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className={style.home}>
      <FeaturedInfo />
      <div className={style.homeWidgets}>
        
        <WidgetLg/>
      </div>
    </div>
  );
}
