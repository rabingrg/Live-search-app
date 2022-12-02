import React from "react";
import { NavLink } from "react-router-dom";


const Menu=()=>{
    return (<>
    
        <div className="menu_div">
            <NavLink exact  className="links" activeClassName="activeclass" to="/">Home</NavLink>
            <NavLink exact  className="links" activeClassName="activeclass" to="/search">Search</NavLink>
            <NavLink exact  className="links" activeClassName="activeclass" to="/contact">Contact</NavLink>
            <NavLink exact  className="links" activeClassName="activeclass" to="/about">About</NavLink>
        </div> 
</>);
}
export default Menu;