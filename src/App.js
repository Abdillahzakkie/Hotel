import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Rooms_Rent from "./pages/Rooms_Rent";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";


const App = () => {
  return (
    <div className="App">
      <Navbar companyName={'Hotel Ng'} />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/facilities' component={Facilities} />
        <Route exact path='/rooms' component={Rooms_Rent} />
        <Route exact path='/rooms/:slug' component={SingleProduct} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
      
      <Footer companyName={'Known'} />
    </div>
  );
}

export default App;
