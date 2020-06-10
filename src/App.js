import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";


const App = () => {
  return (
    <div className="App">
      <Navbar companyName={'Hotel Ng'} />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/facilities' component={Facilities} />
        <Route exact path='/facilities/:slug' component={SingleProduct} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
      
      <Footer companyName={'Known'} />
    </div>
  );
}

export default App;
