import React from "react";
import { Link } from "react-router-dom";

export const GymsView = () => {
  const styleGyms = {
    width: "200px",
    height: "500px",
    backgroundColor: "lightblue",
    fontSize: "20px",
    textAlign: "center",
    marginLeft: "50px",
  }
  return (
    <div style={{ display: "flex" }}>
      <Link to="/Gyms">
        <div
          style={styleGyms}
        >
          Gyms
        </div>
      </Link>

      <Link to="/Trainers">
        <div
          style={styleGyms}
        >
          All Trainers
        </div>
      </Link>

      <Link to="/Restaurnats">
        <div
          style={styleGyms}
        >
          All Restaurnats
        </div>
      </Link>
    </div>
  );
};
