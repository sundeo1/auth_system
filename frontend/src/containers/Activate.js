import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";

const Activate = ({ verify }) => {
  const [verified, setVerified] = useState(false);

  const { uid } = useParams();
  const { token } = useParams();

  const VerifyAccount = (e) => {
    // const uid = match.params.uid;
    // const token = match.params.token;

    verify(uid, token);
    //window.alert(uid);
    setVerified(true);
  };

  //Is the user authenticated?
  //Redirect them to the homepage
  if (verified) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container ">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: "200px" }}
      >
        <h1>Verify your Account:</h1>
        <button
          onClick={VerifyAccount}
          type="buton"
          className="btn btn-primary"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default connect(null, { verify })(Activate);
