import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../hocs/Layout";
import Home from "../containers/Home";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import ResetPassword from "../containers/ResetPassword";
import ResetPasswordConfirm from "../containers/ResetPasswordConfirm";
import Activate from "../containers/Activate";

const Navigator = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Navigator;
