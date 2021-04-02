import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  // console.log(user);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          mFlix
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
            {user && user.isAdmin && (
              <NavLink className="nav-link" to="/customers">
                Customers
              </NavLink>
            )}
            {user && user.isAdmin && (
              <NavLink className="nav-link" to="/rentals">
                Rentals
              </NavLink>
            )}
            {!user && (
              <React.Fragment>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink className="nav-link" to="/profile">
                  {user.name}
                </NavLink>
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
