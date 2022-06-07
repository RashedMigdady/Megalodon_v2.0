import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import style from "./dashboard.module.css";
import { Home } from "./home/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TrainerList } from './trainer/TrainerList.jsx'
import { Trainer } from "./trainer/Trainer.jsx";
import NewTrainer from "./trainer/NewTrainer";
import { Resturant } from "./resturant/Resturant.jsx";
import { NewResturant } from "./resturant/NewResturant.jsx";
import { ResturantList } from "./resturant/ResturantList.jsx";
import { GymList } from "./gym/GymList.jsx";
import { NewGym } from "./gym/NewGym.jsx";
import { Gym } from "./gym/Gym.jsx";

export const Dashboard = () => {
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
            <TrainerList />
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



