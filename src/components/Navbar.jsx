import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Hotel Management</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to="/booking-list" className="nav-link">Booking List</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Booking</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;