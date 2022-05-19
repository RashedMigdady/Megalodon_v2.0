import React from "react";
import { Route, Switch } from "react-router-dom";
import {  Allproduct } from "./components/products/product.jsx";
import { Login } from "./components/auth/login/auth.jsx";
import { GymsView } from "./components/Sections/sections.jsx";
import { Trainer } from "./components/trainer/trainer.jsx";
import { Resturants } from "./components/resturants/resturant.jsx";
import Register from "./components/auth/signUp/signUp.jsx";
import Navigation from "./components/navigation/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Cart } from "./components/cart/cart.jsx";
import { OneTrainer } from "./components/trainer/OneTrainer.jsx";
import About from "./components/Footer/About.jsx"; 
import Policy from "./components/Footer/Policy.jsx";
import Payment from "./components/payment/payment.jsx";
import { OneResturant } from "./components/resturants/OneReastaurant.jsx";
import { ProfileUser } from "./components/users/profileUser.jsx";
import ScrollToTop from "./components/scroll/scroll.jsx";
 import {Review} from "./components/Review/Review.jsx";
import Dashboard from "./components/dashboard/Dashboard";
import Main from "./components/main/mainPage";
import { Logout } from "./components/logout/Logout.jsx";
import { Gym } from "./components/Gym/Gym.jsx";


const App = () => {
 
  return (
    <>      
      <Navigation />
      <ScrollToTop/>     
      <Switch>
      
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/review" component={Review} />
        <Route path="/logout" component={Logout} />
        <Route path="/cart" component={Cart} />
        <Route path="/home" component={Main} />
        <Route path="/allproduct" component={Allproduct} />
        <Route path="/payment" component={Payment} />
        <Route path="/gymsview" component={GymsView} />
        <Route path="/ALLGyms" component={Gym} />
        <Route path="/AllTrainers" component={Trainer} />
        <Route path="/AllRestaurnats" component={Resturants} />
        <Route exact path="/trainer/:id" component={OneTrainer} />
        <Route exact path='/profile' component={ProfileUser}/>
        <Route path="/boutUs" component={About} />
        <Route path="/ourPolicy" component={Policy} />
        <Route exact path="/resturan/:id" component={OneResturant} />
        <Route path="/" component={Main} />
        
      </Switch>
     <Footer /> 
    </>
  );
};

export default App;
