import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Home = ({ logout, isAuthenticated }) => {
  const guestLinks = () => (
    <Fragment>
      <Link className="nav-item nav-link" to="/login">
        Login
      </Link>
    </Fragment>
  );

  const authLinks = () => (
    <a className="nav-item nav-link" onClick={logout} href="#!">
      Logout
    </a>
  );
  return (
    <div className="container">
      <div class="jumbotron mt-5">
        <h1 class="display-4">Welcome to Auth System</h1>
        <p class="lead">
          This is an incredible authentication system with production level
          features!
        </p>
        <hr class="my-4" />
        {!isAuthenticated && <p>Click the Log In button</p>}
        <p class="lead">{isAuthenticated ? authLinks() : guestLinks()}</p>
      </div>
    </div>
  );
};

// export default Home;
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Home);
