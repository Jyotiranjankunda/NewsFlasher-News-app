import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path = "/" element = {<Home/>}/>
                    <Route path = "/general" element = {<FetchData type = "general"/>}/>
                    <Route path = "/business" element = {<FetchData type = "business"/>}/>
                    <Route path = "/entertainment" element = {<FetchData type = "entertainment"/>}/>
                    <Route path = "/health" element = {<FetchData type = "health"/>}/>
                    <Route path = "/science" element = {<FetchData type = "science"/>}/>
                    <Route path = "/sports" element = {<FetchData type = "sports"/>}/>
                    <Route path = "/technology" element = {<FetchData type = "technology"/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
};

export default App;
