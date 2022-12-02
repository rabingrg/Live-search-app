import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Contact from "./Contact";
import About from "./About";
import Menu from "./Menu";

const App=()=>{
    return(<>
    <Menu/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
</>
    );
}
export default App;