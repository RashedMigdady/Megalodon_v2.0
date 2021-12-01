import style from "./sidebar.module.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  Restaurant,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarWrapper}>
        <div className={style.sidebarMenu}>
          <h3 className={style.sidebarTitle}>Dashboard</h3>
          <ul className={style.sidebarList}>
            <Link to="/dashboard" className={style.link}>
              <li className="sidebarListItem active">
                <LineStyle className={style.sidebarIcon} />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className={style.sidebarMenu}>
          <h3 className={style.sidebarTitle}>Quick Menu</h3>
          <ul className={style.sidebarList}>
            <Link to="/dashboard/trainers" className={style.link}>
              <li className={style.sidebarListItem}>
                <PermIdentity className={style.sidebarIcon} />
                Trainers
              </li>
            </Link>
            <Link to="/dashboard/restaurants" className="link">
              <li className={style.sidebarListItem}>
                <Restaurant className={style.sidebarIcon} />
                Restaurants
              </li>
            </Link>
            <Link to="/dashboard/gyms" className="link">
              <li className={style.sidebarListItem}>
                <Storefront className={style.sidebarIcon} />
                Gyms
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
