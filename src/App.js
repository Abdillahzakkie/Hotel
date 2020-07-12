import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import { handleEffect } from "./components/Normal_Js/handleEffect";

import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import MyAccount from "./pages/MyAccount";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";



const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/facilities' component={Facilities} />
        <Route exact path='/facilities/:id' component={SingleProduct} />
        <Route exact path='/about' component={About} />
        <Route exact path='/my_account' component={MyAccount} />
        <Route component={Error} />
      </Switch>

      <ScrollTop />
      <Footer />
    </div>
  );
}
document.addEventListener('scroll', handleEffect);
export default App;
