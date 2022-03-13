import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Navbar = () => {
    return (



        <div className="nav">
            <div className="headtxt">Welcomee Gooys</div>
            <div className="nav3">
                 <div className="nav2">
                        <Link to="/About" style={{ color: "white", textDecoration: 'none' }}> About </Link>
                </div>
                <div className="nav2">
                 <Link to="/Gallery" style={{ color: "white", textDecoration: 'none' }}>Gallery</Link>
                </div>
               
                <div className="nav2">
                    <Link to="/Contact" style={{textDecoration:"none",color:"white"}}>Contact</Link>
                    </div>
                
                <div className="nav2">
                <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
                </div>
            </div>
           
        </div>
    );
}

export default Navbar;