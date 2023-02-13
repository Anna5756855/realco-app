import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
//import NavBar from './Components/NavBar/NavBar';
import NavBarContainer from "./Components/NavBar/NavBarContainer";
//import Properties from './Components/Properties/Properties';
import About from "./Components/About/About";
import Search from "./Components/Search/Search";
import Contact from "./Components/Contact/Contact";
import PropertiesContainer from "./Components/Properties/PropertiesContainer";
import PropertyItemContainer from "./Components/Properties/PropertyItem/PropertyItemContainer";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        {/* <Navigate to="/Home"/> */}
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<PropertiesContainer />} />
        <Route
          path="/PropertyItem/:itemId"
          element={<PropertyItemContainer />}
        />
        <Route path="/Login" element={<Login />} />
        {/* element={<Properties propElems={props.state.propertyPage.propElems} addProperty={props.addProperty} */}
        {/* <Route path="/About/*" element={<About aboutPage={props.state.aboutPage} dispatch={props.dispatch}/>}/> */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Search/*" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
