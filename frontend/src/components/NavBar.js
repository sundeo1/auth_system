import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const NavBar = ({ logout, isAuthenticated }) => {
  const guestLinks = () => (
    <Fragment>
      <Link className="nav-item nav-link" to="/login">
        Login
      </Link>
      <Link className="nav-item nav-link" to="/signup">
        Sign Up
      </Link>
    </Fragment>
  );

  const authLinks = () => (
    <a className="nav-item nav-link" onClick={logout} href="#!">
      Logout
    </a>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Auth System
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Home
          </Link>
          {isAuthenticated ? authLinks() : guestLinks()}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);
