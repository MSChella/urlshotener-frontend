// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ authenticated }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                URL Shortener
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    {authenticated && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-account">
                                My Account
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
