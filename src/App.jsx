import React from "react";
import { Route, Switch } from "react-router-dom";
import { Products } from "./components/products/product.jsx";
import { Login } from "./components/auth/login/auth.jsx";
import { GymsView } from "./components/Sections/sections.jsx";
import { Trainer } from "./components/trainer/trainer.jsx";
import { Resturants } from "./components/resturants/resturant.jsx";
import { Register } from "./components/auth/signUp/signUp.jsx";
import { Navigation } from "./components/navigation/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Cart } from "./components/cart/cart.jsx";
import { OneTrainer } from "./components/trainer/OneTrainer.jsx";
import About from "./components/Footer/About.jsx";
import { Policy } from "./components/Footer/Policy.jsx";
import { Payment } from "./components/payment/payment.jsx";
import { OneResturant } from "./components/resturants/OneReastaurant.jsx";
import { ProfileUser } from "./components/users/profileUser.jsx";
import { ScrollToTop } from "./ShareComponents/scrollToTop/scroll.jsx";
import { Review } from "./components/Review/Review.jsx";
import { Dashboard } from "./components/dashboard/Dashboard.jsx";
import { Main } from "./components/main/mainPage";
import { Logout } from "./Helper/logout.Helper";
import { Gym } from "./components/Gym/Gym.jsx";
import { GlobalToasterGenerator } from "./Helper/Toastify.Helper.jsx";


const App = () => {

  return (
    <>
    <GlobalToasterGenerator />
      <Navigation />
      <ScrollToTop />
      <Switch>

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/review" component={Review} />
        <Route path="/logout" component={Logout} />
        <Route path="/cart" component={Cart} />
        <Route path="/home" component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/payment" component={Payment} />
        <Route path="/gymsview" component={GymsView} />
        <Route path="/Gyms" component={Gym} />
        <Route path="/Trainers" component={Trainer} />
        <Route path="/Restaurnats" component={Resturants} />
        <Route exact path="/trainer/:id" component={OneTrainer} />
        <Route exact path='/profile' component={ProfileUser} />
        <Route path="/aboutUs" component={About} />
        <Route path="/ourPolicy" component={Policy} />
        <Route exact path="/resturan/:id" component={OneResturant} />
        <Route path="/" component={Main} />

      </Switch>
      <Footer />
    </>
  );
};

export default App;
