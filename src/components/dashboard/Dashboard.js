import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import style from "./dashboard.module.css";
import Home from "./home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TrainerList from "./trainer/TrainerList";
import Trainer from "./trainer/Trainer";
import NewTrainer from "./trainer/NewTrainer";
import Resturant from "./resturant/Resturant";
import NewResturant from "./resturant/NewResturant";
import ResturantList from "./resturant/ResturantList";
import GymList from "./gym/GymList";
import NewGym from "./gym/NewGym";
import Gym from "./gym/Gym";

export default function Dashboard() {
  return (
    <Router>
      <Topbar />
      <div className={style.container}>
        <Sidebar />
        <Switch>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route path="/dashboard/trainers">
            <TrainerList/>
          </Route>
          <Route path="/dashboard/trainer/:trainerId">
            <Trainer />
          </Route>
          <Route path="/dashboard/newTrainer">
            <NewTrainer />
          </Route>
          <Route path="/dashboard/restaurants">
            <ResturantList />
          </Route>
          <Route path="/dashboard/restaurant/:restaurantId">
            <Resturant />
          </Route>
          <Route path="/dashboard/newRestaurant">
            <NewResturant />
          </Route>
          <Route path="/dashboard/gyms">
            <GymList />
          </Route>
          <Route path="/dashboard/gym/:gymId">
            <Gym />
          </Route>
          <Route path="/dashboard/newGym">
            <NewGym />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



