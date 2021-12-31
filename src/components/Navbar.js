
import React from 'react';
import "./style.css"
import { NavLink } from "react-router-dom";


const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand mx-2" to="/" style={{ textDecoration: 'none' }}>Movie-app</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/search">Search</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar
