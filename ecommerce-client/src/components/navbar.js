import React from 'react';

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Chris Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="fas fa-shopping-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}