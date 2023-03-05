import React, { useState } from "react";
import avatar from "../img/1.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="..." />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Start
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              Netyfor
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              Twórczość
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Wspomnienia
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Upamiętnienie
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p className="copyright">Radom, 2021 - {new Date().getFullYear()}.</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
