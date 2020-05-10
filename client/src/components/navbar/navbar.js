import React from "react";
import './navbar.module.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navheading">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <span id="spanheading">Covid-19 SriLanka DashBoard.Stay Home! Stay Safe</span>
                </nav>
            </div>
        )
    }
}

export default Navbar