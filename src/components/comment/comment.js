import React, { useState } from "react";
import "./comment.css";
import { serverAddress, HTTPServices } from "../../Helper/HTTPMethod.Helper";
import swal from "sweetalert";
export const AddComment = () => {
  const [comment, setComment] = useState("");
  const token = localStorage.getItem("token");
  const createComment = () => {
   
    HTTPServices
      .post(`http://localhost:5000/comment`, { comment },
      { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        swal({
          title: "Thank you for giving us your opinion ",
          icon: "success",
          button: "OK",
        });
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="commentPerant">
        <div className="container33">
          <div className="form44">
            <h4> Send us a Message</h4>
            <div className="detailsComment"><input className="detalisUser" placeholder="your Name" type="text"/> <input type="email" className="detalisUser" placeholder="your Email"/></div>
            <div className="container22">
              <textarea
                className="textareaaa"
                cols="30"
                rows="6"
                placeholder="Write your opinion . . .
              "
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
              <div className="clearrr">
                <button
                  type="submit"
                  className="signupbtnn"
                  onClick={createComment}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
