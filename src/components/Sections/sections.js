import React from "react";
import { Link } from "react-router-dom";

export const GymsView = () => {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/ALLGyms">
        <div
          style={{
            width: "200px",
            height: "500px",
            backgroundColor: "lightblue",
            fontSize: "20px",
            textAlign: "center",
            marginLeft: "50px",
          }}
        >
          Gyms
        </div>
      </Link>

      <Link to="/AllTrainers">
        <div
          style={{
            width: "200px",
            height: "500px",
            backgroundColor: "lightblue",
            fontSize: "20px",
            textAlign: "center",
            marginLeft: "50px",
          }}
        >
          All Trainers
        </div>
      </Link>

      <Link to="/AllRestaurnats">
        <div
          style={{
            width: "200px",
            height: "500px",
            backgroundColor: "lightblue",
            fontSize: "20px",
            textAlign: "center",
            marginLeft: "50px",
          }}
        >
          All Restaurnats
        </div>
      </Link>
    </div>
  );
};
