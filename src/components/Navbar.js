import React, { Component } from 'react'
import logo from '../logo.png'

import {
    Link
} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand d-flex align-items-center justify-content-around" to="/"> <img src={logo} className="mx-2" alt="" width="28px" height="25px" /> <strong className='text-dark'>Newspot</strong></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>

                                <li className="nav-item ">
                                    <Link className="nav-link bg-white" to="/">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link bg-white" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link bg-white" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item dropdown bg-white">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/entertainment">Enterainment</Link></li>
                                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/settings">Settings</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About</Link>
                                </li>

                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
