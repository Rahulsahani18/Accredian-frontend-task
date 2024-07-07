import React from "react";
import "./referPage.css";
const referPage = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <div className="d-flex flex-column">
                        <div className="navbar-brands ">
                            <a
                                className=" navbar-brand"
                                style={{ color: " #1A73E8 " }}
                                href="#"
                            >
                                accredian
                            </a>
                        </div>
                        <div className="nav-span">
                            <span className="nav-span">credentials that matter</span>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button
                            className="btn course-dropdown dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Course
                        </button >
                        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-end">
                        <div className="navbar-nav mx-2">
                            <a className="nav-link text-dark navItem mt-1" href="#">
                                Refer & Earn
                            </a>
                            <a className="nav-link text-dark navItem mt-1" href="#">
                                Resources
                            </a>
                            <a className="nav-link text-dark navItem mt-1" href="#">
                                About Us
                            </a>
                            <a className="nav-link" href="#">
                                <button className=" navbtn1 btn-hover ">Login</button>
                            </a>
                            <a className="nav-link" href="#">
                                <button className=" navbtn2 btn-hover btn-dark">Try for free</button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default referPage;
